import { Interceptors } from './Interceptors';
import message from '../components/ckAlert';
import { downFile } from '../utils/Download';
import { removeToken } from '../utils/Token';
import { getMsg } from '../utils/Message';
export class HttpService {
	public axios: any;

	constructor() {
		this.axios = new Interceptors().getInterceptors();
	}

	public get(url: string, params: any, showLoading = false, isJwt = true) {
		return new Promise((resolve, reject) => {
			this.axios
				.get(url, {
					params: params,
					headers: { isJwt: isJwt, showLoading: showLoading }
				})
				.then((res: any) => {
					this.resultHandle(res, resolve);
				})
				.catch((err: any) => {
					reject(err.message);
				});
		});
	}
	public getStr(url: string, params: any, showLoading = false, isJwt = true) {
		return new Promise((resolve, reject) => {
			this.axios
				.get(url, {
					data: params,
					headers: { isJwt: isJwt, showLoading: showLoading }
				})
				.then((res: any) => {
					this.resultHandle(res, resolve);
				})
				.catch((err: any) => {
					reject(err.message);
				});
		});
	}
	public post(url: string, params: any, showLoading = false, isJwt = true) {
		return new Promise((resolve, reject) => {
			this.axios
				.post(url, params, {
					headers: { isJwt: isJwt, showLoading: showLoading }
				})
				.then((res: any) => {
					this.resultHandle(res, resolve);
				})
				.catch((err: any) => {
					reject(err.message);
				});
		});
	}

	public delete(url: string, params: any, showLoading = false, isJwt = true) {
		return new Promise((resolve, reject) => {
			this.axios
				.delete(url, {
					data: params,
					headers: { isJwt: isJwt, showLoading: showLoading }
				})
				.then((res: any) => {
					this.resultHandle(res, resolve);
				})
				.catch((err: any) => {
					reject(err.message);
				});
		});
	}

	public deleteStr(
		url: string,
		params: any,
		showLoading = false,
		isJwt = true
	) {
		return new Promise((resolve, reject) => {
			this.axios
				.delete(url, {
					params: params,
					headers: { isJwt: isJwt, showLoading: showLoading }
				})
				.then((res: any) => {
					this.resultHandle(res, resolve);
				})
				.catch((err: any) => {
					reject(err.message);
				});
		});
	}

	public put(url: string, params: any, showLoading = false, isJwt = true) {
		return new Promise((resolve, reject) => {
			this.axios
				.put(url, params, {
					headers: { isJwt: isJwt, showLoading: showLoading }
				})
				.then((res: any) => {
					this.resultHandle(res, resolve);
				})
				.catch((err: any) => {
					reject(err.message);
				});
		});
	}

	public patch(url: string, params: any, showLoading = false, isJwt = true) {
		return new Promise((resolve, reject) => {
			this.axios
				.patch(url, params, {
					headers: { isJwt: isJwt, showLoading: showLoading }
				})
				.then((res: any) => {
					this.resultHandle(res, resolve);
				})
				.catch((err: any) => {
					reject(err.message);
				});
		});
	}

	public download(url: string, params: any, showLoading = false, isJwt = true) {
		return new Promise((resolve, reject) => {
			this.axios
				.get(url, {
					params: params,
					headers: { isJwt: isJwt, showLoading: showLoading },
					responseType: 'blob'
				})
				.then((res: any) => {
					this.resultDownloadHandle(res, resolve);
				})
				.catch((err: any) => {
					reject(err.message);
				});
		});
	}

	public downloadPost(
		url: string,
		params: any,
		showLoading = false,
		isJwt = true
	) {
		return new Promise((resolve, reject) => {
			this.axios
				.post(url, params, {
					headers: { isJwt: isJwt, showLoading: showLoading },
					responseType: 'blob'
				})
				.then((res: any) => {
					const self = this;
					const file = new FileReader() as any;
					file.readAsText(res.data, 'utf-8');
					file.onload = function () {
						try {
							if (file.result === '') {
								resolve({
									code: 200
								});
							} else {
								const result = JSON.parse(file.result);
								if (result.code !== 200) {
									self.resultHandle(result, resolve);
								}
							}
						} catch (error) {
							self.resultDownloadHandle(res, resolve);
						}
					};
				})
				.catch((err: any) => {
					reject(err.message);
				});
		});
	}

	public resultHandle(res: any, resolve: any) {
		switch (res.code) {
			case 200:
				resolve(res.data);
				break;
			case 40103:
				removeToken();
				window.location.href = '/#/login';
				break;
			case 40104:
				removeToken();
				message.info({
					content: res.msg
				});
				window.location.href = '/#/login';
				break;
			default:
				message.info({ content: res.msg });
				break;
		}
	}

	public resultDownloadHandle(res: any, resolve: any) {
		const blob = new Blob([res.data], { type: res.headers['content-type'] });
		let fileName = '';
		const contentDisposition = res.headers['content-disposition'];
		if (contentDisposition) {
			fileName = window.decodeURI(
				res.headers['content-disposition'].split('=')[1]
			);
		}
		downFile(blob, fileName);
		resolve(getMsg('10007'));
	}
}
