<script setup>
	import { ref } from 'vue';
	import { useLoginStore } from '@/stores/login.js';
	import { useUserStore } from '@/stores/person.js';
	import router from '@/router/index.js';

	const { a = undefined, b = undefined, getQRkey, getQRcode, checkQRcode } = useLoginStore();
	const { c = undefined, setUserInformation } = useUserStore();

	let message = ref('');
	let qrcodeSrc = ref('');

	const setQRcode = async () => {
		let key = await getQRkey();
		qrcodeSrc.value = await getQRcode(key);
		message.value = '等待扫码中';
		checkQRcode(key)
			.then(async (res) => {
				message.value = res;
				alert('成功登录');
				await setUserInformation();
				router.push('/home');
			})
			.catch((err) => {
				message.value = err;
			});
	};
</script>

<template>
	<div class="qrcode">
		<img :src="qrcodeSrc" alt="" />
		<p>{{ message }}</p>
		<button @click="setQRcode">生成二维码</button>
	</div>
</template>

<style scoped lang="scss">
	.qrcode {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 40vh;
		img {
			height: 20vh;
		}
		p {
			margin: 2vh 0;
		}
	}
</style>
