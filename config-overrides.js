/* config-overrides.js */
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = function override(config, _env) {
  //do stuff with the webpack config...
  //別名の設定
  config.resolve.alias = {
    '@': resolve('src')
  };
  return config;
};
