<script setup>
	import router from '@/router/index';
	import { ref } from 'vue';
	import { getSMScodeAPI, verifyCookieAPI } from '@/apis/login.js';
	import { useLoginStore } from '@/stores/login.js';
	import { useUserStore } from '@/stores/person.js';

	let phone = ref('');
	let countdown = ref('获取验证码');
	const getSMScode = async () => {
		// 校验手机号，包括1开头以及位数
		if (!/^1\d{10}$/.test(phone.value)) {
			alert('请输入正确的手机号');
			return;
		}
		if (countdown.value !== '获取验证码' && countdown.value !== '重新获取验证码') {
			return;
		}

		// 按完了就直接开始倒计时
		let time = 60;
		countdown.value = `${time}s后重新获取验证码`;
		const timer = setInterval(() => {
			time--;
			countdown.value = `${time}s后重新获取验证码`;
			if (time === 0) {
				clearInterval(timer);
				countdown.value = '重新获取验证码';
			}
		}, 1000);

		const res = await getSMScodeAPI(phone.value);
		if (res.code === 200) {
			alert('验证码已发送');
		} else {
			alert('验证码发送失败');
		}
	};

	// 验证cookie
	let cookie = ref('');
	const { a, verifyCookie, c } = useLoginStore();
	const { user, setUserInformation } = useUserStore();
	const verifyC = async () => {
		let result = await verifyCookie(cookie.value);
		if (!result) {
			alert('cookie验证失败');
			return;
		}
		alert('cookie验证成功,成功登录');
		await setUserInformation();
		router.push('/home');
	};

	const toQRcode = () => {
		router.push('/login/qrcode');
	};
</script>

<template>
	<div class="phone">
		<div class="provided">运营商提供</div>
		<div class="phone-input">
			<div class="country-code">+86</div>
			<div class="triangle"></div>
			<div class="line"></div>
			<input type="text" placeholder="输入手机号" v-model="phone" />
		</div>
		<div class="button" @click="getSMScode">{{ countdown }}</div>
		<div class="agree">
			<input type="checkbox" name="" id="" />
			我已阅读并同意<a href="">《服务条款》</a>、<a href="">《隐私政策》</a>
		</div>
		<div class="other-login">
			<img src="@/assets/icon/login/微信.svg" alt="" />
			<img src="@/assets/icon/login/qq.svg" alt="" />
			<img src="@/assets/icon/login/微博.svg" alt="" />
			<img src="@/assets/icon/login/网易.svg" alt="" />
		</div>
		<p>api问题，此页面只能给手机发验证码</p>
		<p>但是没有下一步了，测试过还是给上去验证码只反-462</p>
		<p>不过可以直接传cookie，如果验证成功的话直接登录</p>
		<input type="text" v-model="cookie" placeholder="输入cookie(完整复制过来)" />
		<button @click="verifyC">验证cookie</button>
		<button @click="toQRcode">转到扫描二维码登录（无奈之举）</button>
	</div>
</template>

<style scoped lang="scss">
	.phone {
		display: flex;
		flex-direction: column;
		align-items: center;
		.provided {
			margin-bottom: 2vh;
			color: #797f8d;
			font-size: smaller;
		}
		.phone-input {
			background-color: #f3f3f5;
			display: flex;
			align-items: center;
			justify-content: space-around;
			height: 6vh;
			width: 80vw;
			border-radius: 1.4vh;
			margin-bottom: 2vh;
			.country-code {
				margin-left: 2vw;
				color: #797f8d;
				font-weight: 1000;
			}
			.triangle {
				width: 0;
				height: 0;
				border-top: 1vh solid #797f8d;
				border-left: 2vw solid transparent;
				border-right: 2vw solid transparent;
			}
			.line {
				width: 1px;
				height: 4vh;
				background-color: #dedfe3;
			}
			input {
				height: 100%;
				width: 60vw;
				border: none;
				outline: none;
				background-color: transparent;
			}
		}
		.button {
			width: 80vw;
			height: 6vh;
			background-color: #ff393a;
			border-radius: 3vh;
			color: #fff;
			text-align: center;
			line-height: 6vh;
			margin-bottom: 2vh;
		}
		.agree {
			color: #ccc;
			font-size: small;
			a {
				text-decoration: none;
				color: #567aa5;
			}
		}
		.other-login {
			margin-top: 6vh;
			img {
				width: 10vw;
				margin: 2vh 4vw;
				padding: 1.5vw;
				border: 1px solid #ccc;
				border-radius: 50%;
			}
		}
	}
</style>
