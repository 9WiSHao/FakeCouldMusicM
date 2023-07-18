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
// 我自己部署的服务，有的接口总错，偶尔用用（主要没https，还是没咋用）
const httpInstance2 = axios.create({
	baseURL: 'http://162.14.111.196:4000',
	timeout: 6000,
});
httpInstance2.interceptors.request.use(
	(config) => {
		return config;
	},
	(e) => Promise.reject(e)
);

httpInstance2.interceptors.response.use(
	(res) => res.data,
	(e) => {
		return Promise.reject(e);
	}
);

export default httpInstance;
export { httpInstance2 };
