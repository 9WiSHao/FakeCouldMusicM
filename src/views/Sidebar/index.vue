<script setup>
	import router from '@/router/index';
	import Services from './components/Services.vue';
	import { service1, service2, service3, service4 } from './components/siderBar';
	import { ref } from 'vue';
	import { useUserStore } from '@/stores/person.js';

	// 没登录的时候的默认值
	const { user, b } = useUserStore();
	// let username = ref('未登录');
	// let avatorUrl = ref('src/assets/images/Akkarin.jpg');

	const toPersionalMessage = () => {
		if (user.nickname === '未登录') {
			router.push('/login');
			return;
		}
		router.push('/user');
	};
</script>
<template>
	<div class="side-main">
		<div class="top">
			<div class="left" @click="toPersionalMessage">
				<img :src="user.avatarUrl" alt="" class="avator" />
				<div class="name">{{ user.nickname }}</div>
				<img src="@/assets/icon/sideBar/右折箭头.svg" alt="" class="arrows" />
			</div>
			<img src="@/assets/icon/sideBar/扫码.svg" alt="" class="scanQR" />
		</div>
		<div class="vip">
			<div class="renewal">
				<div class="text">续费黑胶VIP</div>
				<div class="button">会员中心</div>
			</div>
			<div class="introduction">
				<div class="text">立享超21项专属特权</div>
				<img src="@/assets/icon/sideBar/右折箭头_棕.svg" alt="" />
			</div>
			<div class="more">
				<div class="text">畅享千万vip专属曲库!</div>
				<div class="invitation-only">受邀专享</div>
			</div>
		</div>
		<Services :if_title="true" title="我的" :services="service1" />
		<Services :if_title="true" title="音乐服务" :services="service2" />
		<Services :if_title="true" title="其他" :services="service3" />
		<Services :if_title="true" title="更多设置" :services="service4" />

		<div class="logoff">退出登录/关闭</div>
	</div>
</template>
<style scoped lang="scss">
	@import '@/style/var.scss';
	.side-main {
		height: 100vh;
		width: 80vw;
		padding: 4vw;
		background-color: #f6f5f6;
		z-index: 999;
		overflow: auto;

		img {
			height: 3vh;
		}
		.top {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 2vh;
			.left {
				display: flex;
				align-items: center;
				.avator {
					border-radius: 1.5vh;
				}
				.name {
					margin-left: 2vw;
					font-size: 2vh;
				}
				.arrows {
					height: 2vh;
				}
			}
		}
		.vip {
			width: 100%;
			background-color: #443d3d;
			border-radius: 2vh;
			padding: 1.5vh;
			margin-bottom: 2vh;
			.renewal {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 4px;
				.text {
					font-size: 2vh;
					color: #f3dedc;
				}
				.button {
					height: 3vh;
					border-radius: 1.5vh;
					font-size: 1vh;
					color: $sidebarBrown;
					border: 1px solid $sidebarBrown;
					padding: 0 1vh;
					line-height: 2.5vh;
				}
			}
			.introduction {
				display: flex;
				padding-bottom: 15px;
				border-bottom: 0.5px solid #635555;

				.text {
					font-size: 1vh;
					color: $sidebarBrown;
				}
				img {
					height: 1.6vh;
				}
			}
			.more {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 15px;
				.text {
					font-size: 1.5vh;
					color: $sidebarBrown;
				}
				.invitation-only {
					height: 3vh;
					width: 3vh;
					padding: 0.1vh;
					background-color: #de4a06;
					font-size: 1vh;
					font-weight: 900;
					color: white;
				}
			}
		}
		.logoff {
			height: 6vh;
			width: 100%;
			border-radius: 1.5vh;
			font-size: larger;
			color: red;
			text-align: center;
			line-height: 6vh;
			background-color: #fff;
		}
	}
</style>
