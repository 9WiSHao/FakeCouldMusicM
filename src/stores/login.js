import { defineStore } from 'pinia';
import { ref } from 'vue';
import { verifyCookieAPI } from '@/apis/login';

export const useLoginStore = defineStore('login', () => {
	let cookie = ref('');
	// 如果有cookie，就从本地获取（真就是接口限制，浏览器自动获取cookie的方法都没了）
	if (localStorage.getItem('cookie')) {
		cookie.value = localStorage.getItem('cookie');
	}
	const verifyCookie = async (Cookie) => {
		const res = await verifyCookieAPI(Cookie);
		if (res.data.profile == null || res.data.code !== 200) {
			return false;
		}
		localStorage.setItem('cookie', Cookie);
		return true;
	};
	const getCookieQRcode = () => {};

	return {
		cookie,
		verifyCookie,
		getCookieQRcode,
	};
});
