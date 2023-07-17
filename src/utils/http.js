import axios from 'axios';

const httpInstance = axios.create({
	baseURL: 'https://api.hanling.space',
	timeout: 6000,
});

// 拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(
	(config) => {
		return config;
	},
	(e) => Promise.reject(e)
);

// axios响应式拦截器
httpInstance.interceptors.response.use(
	(res) => res.data,
	(e) => {
		return Promise.reject(e);
	}
);

export default httpInstance;
