FROM node:14.17.6 AS builder

ADD ./public /tmp/ck-web-front/public/
ADD ./src /tmp/ck-web-front/src/
ADD ./.env.test /tmp/ck-web-front/.env.test
ADD ./config-overrides.js /tmp/ck-web-front/config-overrides.js
ADD ./package.json /tmp/ck-web-front/package.json
ADD ./tsconfig.json /tmp/ck-web-front/tsconfig.json

RUN cd /tmp/ck-web-front/ && npm install --registry https://code.trechina.cn/package/repository/npm/ && npm run build:test

FROM nginx:1.23.3

COPY --from=builder /tmp/ck-web-front/build/ /usr/share/nginx/html/

RUN ln -snf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && echo Asia/Tokyo > /etc/timezone
RUN rm /etc/nginx/conf.d/default.conf

ADD nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
