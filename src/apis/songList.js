import httpInstance from '@/utils/http';
import { httpInstance2 } from '@/utils/http';

export function getSongListAPI(id) {
	return httpInstance({
		url: `/playlist/track/all?id=${id}`,
		method: 'GET',
	});
}

export function getSongListDetailAPI(id) {
	return httpInstance({
		url: `/playlist/detail?id=${id}`,
		method: 'GET',
	});
}
