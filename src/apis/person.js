import httpInstance from '@/utils/http';
import { httpInstance2 } from '@/utils/http';
import axios from 'axios';

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

export function getUserMoreInformationAPI(id) {
	let formData = new FormData();
	const cookie = localStorage.getItem('cookie');
	formData.append('cookie', cookie);
	return httpInstance({
		url: `/user/detail?uid=${id}&noCookie=true`,
		method: 'POST',
		data: formData,
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
}

export function getUserPlaylistAPI(id) {
	let formData = new FormData();
	const cookie = localStorage.getItem('cookie');
	formData.append('cookie', cookie);
	return httpInstance({
		url: `/user/playlist?uid=${id}&noCookie=true`,
		method: 'POST',
		data: formData,
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
}

export function getUserlistCountAPI() {
	let formData = new FormData();
	const cookie = localStorage.getItem('cookie');
	formData.append('cookie', cookie);
	return httpInstance({
		url: `/user/subcount?noCookie=true`,
		method: 'POST',
		data: formData,
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
}

export function getAdressAPI(ip) {
	return axios.get(`https://www.fkcoder.com/ip?ip=${ip}`);
}

export function getUserCommentAPI(id) {
	return httpInstance2({
		url: `/user/comment/history?uid=${id}&noCookie=true`,
		method: 'GET',
	});
}
