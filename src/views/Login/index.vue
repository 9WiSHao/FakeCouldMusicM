<script setup></script>

<template>
	<div class="login">
		<router-link to="/home" class="visitors">立即体验</router-link>
		<img src="@/assets/icon/login/网易云.svg" alt="" class="icon" />
		<div class="login-main">
			<router-view></router-view>
		</div>
		<div class="question">登录遇到问题(这登录接口全是问题)</div>
	</div>
</template>

<style scoped lang="scss">
	@import '@/style/var.scss';
	.login {
		position: relative;
		height: 100vh;
		width: 100vw;

		.visitors {
			position: absolute;
			top: 2vh;
			right: 4vw;
			color: $sidebarGery;
			text-decoration: none;
		}
		.icon {
			width: 22vw;
			position: absolute;
			top: 20vh;
			left: 50%;
			margin-left: -11vw;
		}
		.login-main {
			position: absolute;
			top: 40vh;
			width: 100%;
		}
		.question {
			position: absolute;
			bottom: 4vh;
			left: 50%;
			transform: translateX(-50%);
			color: $sidebarGery;
		}
	}
</style>
