import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getSongListAPI, getSongListDetailAPI } from '@/apis/songList.js';

export const useSongListStore = defineStore('songList', () => {
	const listDetail = ref({});
	const getListDetail = async (id) => {
		const res = await getSongListDetailAPI(id);
		if (res.code !== 200) {
			return;
		}
		listDetail.value.coverImgUrl = res.playlist.coverImgUrl;
		listDetail.value.playCount = res.playlist.playCount;
		listDetail.value.name = res.playlist.name;
		listDetail.value.creator = res.playlist.creator.nickname;
		listDetail.value.creatorAvator = res.playlist.creator.avatarUrl;
		listDetail.value.description = res.playlist.description;
		if (res.playlist.description == null) {
			listDetail.value.description = '暂无简介';
		}
		listDetail.value.songNum = res.playlist.trackCount;
		listDetail.value.shareNum = res.playlist.shareCount;
		listDetail.value.commentNum = res.playlist.commentCount;
		listDetail.value.collectNum = res.playlist.subscribedCount;
	};
	const getSongList = async (id) => {
		listDetail.value.lists = [];
		const res = await getSongListAPI(id);
		if (res.code !== 200) {
			return;
		}
		listDetail.value.lists = res.songs.map((item) => {
			return {};
		});
		res.songs.forEach((item, index) => {
			listDetail.value.lists[index].id = item.id;
			listDetail.value.lists[index].name = item.name;

			let moreName = undefined;
			if (item.alia[0]) {
				moreName = `(${item.alia[0]})`;
			} else if (item.tns) {
				moreName = `(${item.tns[0]})`;
			}
			listDetail.value.lists[index].nameMore = moreName;

			listDetail.value.lists[index].singer = item.ar[0].name;
			listDetail.value.lists[index].album = item.al.name;
		});
	};
	return {
		listDetail,
		getListDetail,
		getSongList,
	};
});
