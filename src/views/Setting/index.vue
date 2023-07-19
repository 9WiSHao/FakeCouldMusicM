<script setup>
	import { useUserStore } from '@/stores/person.js';
	import { onMounted } from 'vue';
	import { ref } from 'vue';
	import { updateInformationAPI } from '@/apis/person.js';
	import ChinaLocation from 'china-location';
	import router from '@/router/index';

	const { user, userReal } = useUserStore();

	let nickname = ref('');
	let gender = ref('');
	let birthday = ref('');
	let location = ref('');
	let signature = ref('');
	const submit = async () => {
		console.log(nickname.value);
		console.log(gender.value);
		console.log(birthday.value);
		console.log(location.value);
		console.log(signature.value);
		// 如果没有设置，就还是原来的值
		if (nickname.value == '') {
			nickname.value = userReal.nickname;
		}
		if (gender.value == '') {
			gender.value = userReal.gender;
		}
		if (birthday.value == '') {
			birthday.value = userReal.ageString;
		}
		if (location.value == '') {
			location.value = user.cityCode;
		}
		if (signature.value == '') {
			signature.value = userReal.signature;
		}

		// 处理性别 0:保密 1:男性 2:女性
		if (gender.value == '男') {
			gender.value = 1;
		}
		if (gender.value == '女') {
			gender.value = 2;
		} else {
			gender.value = 0;
		}
		// 处理生日，把字符转化为时间戳
		birthday.value = new Date(birthday.value).getTime();
		// 处理城市，把名字转化成代码
		// 真完蛋，只能数字代号转城市名，反过来转不了，那就算了，强制要求输入城市代码吧
		let cityCode = location.value;
		let province = Math.floor(location.value / 1000) * 1000;

		let provinceCode = location.value;

		// updateInformationAPI(gender, birthday, nickname, province, city, signature)
		const res = await updateInformationAPI(gender.value, birthday.value, nickname.value, province, cityCode, signature.value);
		if (res.status == 200) {
			alert('修改成功');
		}
	};

	const backUser = () => {
		router.push('/user');
	};
</script>
<template>
	<div class="setting-main">
		<div class="top">
			<img src="@/assets/icon/person/左箭头.svg" alt="" @click="backUser" />
			<div class="text">我的资料</div>
		</div>
		<div class="main">
			<div class="avator">
				<div class="text">头像</div>
				<img :src="userReal.avatarUrl ?? 'src/assets/images/Akkarin.jpg'" alt="" />
			</div>
			<div class="line"></div>
			<div class="nickname">
				<div class="text">昵称</div>
				<input type="text" :placeholder="userReal.nickname ?? 'Akkarin'" v-model="nickname" />
			</div>
			<div class="line"></div>
			<div class="gender">
				<div class="text">性别</div>
				<input type="text" :placeholder="userReal.gender ? '男' : '女'" v-model="gender" />
			</div>
			<div class="line"></div>
			<div class="birthday">
				<div class="text">生日</div>
				<input type="text" :placeholder="userReal.ageString ?? '1111-11-11'" v-model="birthday" />
			</div>
			<div class="line"></div>
			<div class="location">
				<div class="text">地区</div>
				<input type="text" :placeholder="userReal.adress2 ?? '未设置'" v-model="location" />
			</div>
			<div class="line"></div>
			<div class="signature">
				<div class="text">简介</div>
				<input type="text" :placeholder="userReal.signature ?? '低存在感'" v-model="signature" />
			</div>
			<div class="line"></div>
		</div>
		<button @click="submit">提交更改资料</button>
	</div>
</template>
<style scoped lang="scss">
	.top {
		padding: 2vh;
		width: 100vw;
		height: 6vh;
		display: flex;
		align-items: center;
		gap: 10px;
		img {
			height: 5vh;
		}
		.text {
			font-size: larger;
		}
	}
	.main {
		padding: 2vh;
		display: flex;
		flex-direction: column;
		gap: 2vh;
		& > div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			input {
				border: none;
				outline: none;
			}
		}
		img {
			height: 5vh;
		}
	}

	button {
		width: 90vw;
		height: 6vh;
		background-color: #ff4d4f;
		border: none;
		border-radius: 5px;
		color: white;
		font-size: larger;
		margin: 5vh 2vh;
	}

	.line {
		width: 100vw;
		height: 1px;
		background-color: #e5e5e5;
	}
</style>
