import httpInstance from '@/utils/http';

export function getUserBaseInformationAPI(cookie) {
	let formData = new FormData();
	formData.append('cookie', cookie);
	return httpInstance({
		url: `/user/account?timestamp=${Date.now()}&noCookie=true`,
		method: 'POST',
		data: formData,
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
}
