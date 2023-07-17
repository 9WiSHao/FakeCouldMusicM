import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getUserBaseInformationAPI } from '@/apis/person.js';

export const useUserStore = defineStore('user', () => {
	let user = ref({});
	user.value.nickname = '未登录';
	user.value.avatarUrl = 'src/assets/images/Akkarin.jpg';

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
	};
	return {
		user,
		setUserInformation,
	};
});
