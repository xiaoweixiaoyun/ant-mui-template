import axios from 'axios';
import { getToken, setToken } from '../utils/Token';
import message from '../components/ckAlert';
import { getMsg } from '../utils/Message';
import { showLoading, hideLoading } from '../components/ckLoading';
export class Interceptors {
	public instance: any;

	constructor() {
		// Creating an axios instance
		this.instance = axios.create({
			timeout: process.env.REACT_APP_TIMEOUT as any,
			baseURL: process.env.REACT_APP_BASE_URL
		});
		// Initialize the block
		this.initInterceptors();
	}

	// To get the axios instance initialized with http.ts
	public getInterceptors() {
		return this.instance;
	}

	// Initialize the block
	public initInterceptors() {
		/**
		 * Request stopper
		 * If a token exists before each request, carry the token in the request header.
		 */
		this.instance.interceptors.request.use(
			(config: any) => {
				config.headers?.showLoading && showLoading();
				// Login flow control determines the login status of a user based on the presence of a token locally.
				// However, even if the token exists, the token may expire, so carry the token in each request header.
				//In the background, it determines the user's login status based on the token they have with them and returns the corresponding status code.
				if (config.headers.isJwt) {
					const token = getToken();
					if (token) {
						config.headers.Authorization = 'Bearer ' + token;
					}
				}
				return config;
			},
			(error: any) => {
				message.error({
					content: getMsg('10011')
				});
			}
		);

		// Response block
		this.instance.interceptors.response.use(
			// Request successful.
			(res: any) => {
				hideLoading();
				if (res.headers['ck-access-token']) {
					setToken(res.headers['ck-access-token']);
				} else if (res.data && res.data.token) {
					setToken(res.data.token);
				}
				if (res.status === 200) {
					if (res.config.responseType === 'blob') {
						return Promise.resolve(res);
					}
					return Promise.resolve(res.data);
				}
				return Promise.reject(res.data);
			},
			// I failed my request.
			async (error: any) => {
				hideLoading();
				const { response } = error;
				if (error.message.indexOf('timeout') !== -1) {
					message.error({
						content: getMsg('10012')
					});
				}
				if (response) {
					this.errorHandle(response);
				}
				return Promise.reject(error);
			}
		);
	}

	/**
	 * HTTP handshake error
	 * @param res Response callbacks, operations based on responses
	 */
	private errorHandle(res: any) {
		// Status code judgment
		switch (res.status) {
			case 401:
				message.warning({
					content: getMsg('10008')
				});
				window.location.href = '/#/login';
				break;
			case 403:
				message.warning({
					content: getMsg('10009')
				});
				break;
			case 404:
				message.warning({
					content: getMsg('10010')
				});
				break;
			default:
				message.warning({
					content: getMsg('10011')
				});
				break;
		}
	}
}
