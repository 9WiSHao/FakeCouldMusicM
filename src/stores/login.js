import { defineStore } from 'pinia';
import { ref } from 'vue';
import { verifyCookieAPI, getQrKeyAPI, getQrImgAPI, checkQrCodeAPI } from '@/apis/login';

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
		cookie.value = Cookie;
		return true;
	};

	const getQRkey = async () => {
		const keyRes = await getQrKeyAPI();
		const key = keyRes.data.unikey;
		return key;
	};

	const getQRcode = async (key) => {
		const imgRes = await getQrImgAPI(key);
		const imgBase64 = imgRes.data.qrimg;
		return imgBase64;
	};

	const checkQRcode = async (key) => {
		let timer = null;
		if (timer) clearTimeout(timer);
		// 采取这种写法而不是固定的定时器，因为固定定时器可能跑的比接口快，接口是成功一次后面都返回失败，就有bug了
		return new Promise(async (resolve, reject) => {
			// 每回接口有反应之后，等一秒，轮询扫码结果
			const checkResult = async () => {
				let res = await checkQrCodeAPI(key);

				if (res.code == 800) {
					reject('二维码过期，请重新生成');
				}
				if (res.code == 803) {
					const res2 = await verifyCookie(res.cookie);

					if (res2) {
						resolve('扫码登录成功');
					} else {
						reject('登录失败，请重试');
					}
				} else {
					timer = setTimeout(checkResult, 1000);
				}
			};
			await checkResult();
		});
	};

	return {
		cookie,
		verifyCookie,
		getQRkey,
		getQRcode,
		checkQRcode,
	};
});
