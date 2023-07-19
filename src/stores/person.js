import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getUserBaseInformationAPI, getUserMoreInformationAPI, getUserPlaylistAPI, getUserlistCountAPI, getAdressAPI, getUserCommentAPI } from '@/apis/person.js';
import list from 'china-location/dist/location.json';
import ChinaLocation from 'china-location';

export const useUserStore = defineStore('user', () => {
	// 原始信息
	let user = ref({});
	// 转换后直接可用信息
	let userReal = ref({});

	const setUserInformation = async () => {
		const cookie = localStorage.getItem('cookie');
		if (!cookie) {
			return;
		}
		const res = await getUserBaseInformationAPI(cookie);
		if (res.code !== 200 || res.profile == null) {
			return;
		}
		user.value.id = res.profile.userId;
		user.value.nickname = res.profile.nickname;
		user.value.avatarUrl = res.profile.avatarUrl;
		user.value.backgroundUrl = res.profile.backgroundUrl;
		user.value.signature = res.profile.signature;
		user.value.createTime = res.profile.createTime;
		user.value.birthday = res.profile.birthday;
		user.value.provinceCode = res.profile.province;
		user.value.cityCode = res.profile.city;
		user.value.ip = res.profile.lastLoginIP;
		user.value.gender = res.profile.gender;
	};

	const setUserMoreInformation = async () => {
		if (!user.value.id) {
			return;
		}
		const res = await getUserMoreInformationAPI(user.value.id);
		if (res.code !== 200 || res.profile == null) {
			return;
		}
		user.value.level = res.level;
		user.value.followeds = res.profile.followeds;
		user.value.follows = res.profile.follows;
		user.value.listenSongs = res.listenSongs;
	};

	const setUserPlaylist = async () => {
		if (!user.value.id) {
			return;
		}
		const res = await getUserPlaylistAPI(user.value.id);
		const resCount = await getUserlistCountAPI();
		if (res.code !== 200 || res.playlist == null || resCount.code !== 200) {
			return;
		}
		user.value.loveSong = res.playlist[0].trackCount;
		// 这玩意接口太特么分散了。先获取下自己歌单数量和订阅歌单数，才能整出来正确的歌单
		user.value.myListCount = resCount.createdPlaylistCount;
		user.value.subscribedListCount = resCount.subPlaylistCount;

		user.value.myList = res.playlist.slice(1, user.value.myListCount - 1);
		user.value.subscribedList = res.playlist.slice(user.value.myListCount, user.value.myListCount + user.value.subscribedListCount - 1);
	};

	const setUserReal = async () => {
		userReal.value.nickname = user.value.nickname;
		userReal.value.follows = user.value.follows;
		userReal.value.followeds = user.value.followeds;
		userReal.value.level = user.value.level;
		// 获取ip对应地址
		const res = await getAdressAPI(user.value.ip);
		userReal.value.countryIP = res.data.country;
		userReal.value.provinceIP = res.data.province;
		userReal.value.cityIP = res.data.city;
		userReal.value.gender = false;
		if (user.value.gender == 1) {
			userReal.value.gender = true;
		}
		// 计算是几零后
		let age1 = new Date(user.value.birthday).getFullYear();
		userReal.value.age = `${parseInt((age1 % 100) / 10)}0后`;

		userReal.value.ageString = `${age1}-${new Date(user.value.birthday).getMonth() + 1}-${new Date(user.value.birthday).getDate()}`;
		// 获取城市
		const location = new ChinaLocation(list);
		location.changeLocation(user.value.provinceCode, user.value.cityCode);
		userReal.value.province = location.getCurrentAddress().province.name;
		userReal.value.city = location.getCurrentAddress().city.name;
		userReal.value.adress2 = `${userReal.value.province} ${userReal.value.city}`;
		// 计算村龄
		let age2 = new Date(user.value.createTime).getFullYear();
		userReal.value.villageAge = new Date().getFullYear() - age2;
		userReal.value.loveSongs = user.value.loveSong;
		userReal.value.listenSongs = user.value.listenSongs;
		// 歌单部分,把接口传的信息精简到 歌单号 封面图，歌单名，歌曲数，创建者，播放数
		// 因为不能凭空从undefined上挂载属性，所以先得一下原数组长度的空对象数组
		userReal.value.myList = user.value.myList.map(() => {
			return {};
		});
		userReal.value.subscribedList = user.value.subscribedList.map(() => {
			return {};
		});
		user.value.myList.forEach((item, index) => {
			userReal.value.myList[index].id = item.id;
			userReal.value.myList[index].coverUrl = item.coverImgUrl;
			userReal.value.myList[index].listName = item.name;
			userReal.value.myList[index].songNum = item.trackCount;
			userReal.value.myList[index].creator = item.creator.nickname;
			let count = 0,
				num = parseInt(item.playCount);
			if (num > 100000000) {
				count = (num / 100000000).toFixed(1) + '亿';
			} else if (num > 10000) {
				count = (num / 10000).toFixed(1) + '万';
			} else {
				count = num;
			}
			userReal.value.myList[index].playCount = count;
		});
		user.value.subscribedList.forEach((item, index) => {
			userReal.value.subscribedList[index].id = item.id;
			userReal.value.subscribedList[index].coverUrl = item.coverImgUrl;
			userReal.value.subscribedList[index].listName = item.name;
			userReal.value.subscribedList[index].songNum = item.trackCount;
			userReal.value.subscribedList[index].creator = item.creator.nickname;
			let count = 0,
				num = parseInt(item.playCount);
			if (num > 100000000) {
				count = (num / 100000000).toFixed(1) + '亿';
			} else if (num > 10000) {
				count = (num / 10000).toFixed(1) + '万';
			} else {
				count = num;
			}
			userReal.value.subscribedList[index].playCount = count;
		});
		// 注册日期
		let time3 = new Date(user.value.createTime);
		userReal.value.createTime = `${time3.getFullYear()}年${time3.getMonth() + 1}月注册`;
		userReal.value.signature = user.value.signature;
		// 评论,需要评论歌曲封面，歌曲名称，歌手，点赞数，评论内容，评论时间
		let res4 = await getUserCommentAPI(user.value.id);
		userReal.value.commentsCount = res4.data.commentCount;
		userReal.value.comments = res4.data.comments.map(() => {
			return {};
		});
		res4.data.comments.forEach((item, index) => {
			userReal.value.comments[index].id = item.commentId;
			let obj = JSON.parse(item.resourceInfo);
			userReal.value.comments[index].coverUrl = undefined;
			userReal.value.comments[index].songName = obj.name;
			userReal.value.comments[index].singer = obj.artists.map((item) => item.name).join('/');
			userReal.value.comments[index].likedCount = item.likedCount;
			userReal.value.comments[index].content = item.content;
			let time4 = new Date(item.time);
			userReal.value.comments[index].time = `${time4.getFullYear()}年${time4.getMonth() + 1}月${time4.getDate()}日`;
		});
	};

	const logOff = () => {
		user.value = {};
		userReal.value = {};
		localStorage.removeItem('cookie');
	};

	return {
		user,
		userReal,
		setUserInformation,
		setUserMoreInformation,
		setUserPlaylist,
		setUserReal,
		logOff,
	};
});
