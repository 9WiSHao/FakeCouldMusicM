import httpInstance from '@/utils/http';

export function getSMScodeAPI(phoneNumber) {
	return httpInstance({
		url: `/captcha/sent?phone=${phoneNumber}`,
		method: 'GET',
	});
}

export function verifyCookieAPI(cookie) {
	let formData = new FormData();
	formData.append('cookie', cookie);
	return httpInstance({
		url: `/login/status?timestamp=${Date.now()}&noCookie=true`,
		method: 'POST',
		data: formData,
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
}
