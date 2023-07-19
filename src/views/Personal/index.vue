<script setup>
	import UserTop from './components/UserTop.vue';
	import UserBase from './components/UserBase.vue';
	import UserMain from './components/UserMain.vue';
	import UserStatus from './components/UserStatus.vue';
	import UserSetting from './components/UserSetting.vue';
	import settingOut from './components/settingOut.vue';
	import { ref, onMounted, onBeforeUnmount } from 'vue';

	import { useUserStore } from '@/stores/person.js';

	const { user, userReal, setUserInformation, setUserMoreInformation, setUserPlaylist, setUserReal } = useUserStore();

	onMounted(async () => {
		if (!userReal.listenSongs) {
			// 挂载完获取全部主页信息，比较慢
			await setUserInformation();
			await setUserMoreInformation();
			await setUserPlaylist();
			await setUserReal();
		}
	});

	let settin = ref(false);
	const toggleSetting = () => {
		settin.value = !settin.value;
	};
	const outSetting = () => {
		settin.value = false;
	};
</script>
<template>
	<div class="bgc">
		<div class="top">
			<UserTop @setEdit="toggleSetting" />
		</div>
		<UserBase @click="outSetting" />
		<div class="table">
			<div class="text">
				<div class="main-page" @click="test">主页</div>
				<div class="status">动态</div>
				<div class="video">视频</div>
				<div class="podcast">播客</div>
			</div>
			<div class="line"></div>
		</div>
		<div class="main1">
			<UserMain />
			<!-- <UserStatus />
			<UserSetting />  -->
		</div>
		<div :class="settin ? 'In' : 'Out'"><settingOut /></div>
	</div>
</template>
<style scoped lang="scss">
	@import '@/style/var.scss';
	.bgc {
		background-color: #f6f5f6;
	}
	.top {
		position: fixed;
		top: 0;
		z-index: 10;
	}
	.table {
		margin-top: 2vh;
		margin-bottom: 2vh;
		width: 90%;
		margin-left: 5%;
		position: relative;
		.text {
			font-size: large;
			font-weight: 900;
			display: flex;
			justify-content: space-around;
			width: 100%;
		}
		.line {
			height: 4px;
			width: 5vw;
			border-radius: 2px;
			background-color: $couldColorR;
			position: absolute;
			bottom: -1vh;
			left: 8.5vw;
			// 剩下还有
			// left: 31vw;
			// left: 54vw;
			// left: 76vw;
		}
	}

	.Out {
		position: absolute;
		top: -100%;
		right: -100%;
		transition: all 0.5s ease-in-out;
	}
	.In {
		position: absolute;
		top: 0;
		right: 0;
		transition: all 0.5s ease-in-out;
	}
</style>
