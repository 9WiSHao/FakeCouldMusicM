<script setup>
	import router from '@/router/index';
	const toSetting = () => {
		router.push('/setting');
	};
</script>
<template>
	<div class="settingOut">
		<div class="editor" @click="toSetting">
			<img src="@/assets/icon/person/编辑资料.svg" alt="" />
			<div class="text">编辑资料</div>
		</div>
		<div class="editor" @click="toSetting">
			<img src="@/assets/icon/person/编辑资料.svg" alt="" />
			<div class="text">编辑资料</div>
		</div>
		<div class="editor" @click="toSetting">
			<img src="@/assets/icon/person/编辑资料.svg" alt="" />
			<div class="text">编辑资料</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
	.settingOut {
		width: 50vw;
		height: 20vh;
		border-radius: 8px;
		background-color: white;
		padding: 1vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		img {
			height: 3vh;
		}
		.editor {
			display: flex;
			align-items: center;
			gap: 10px;
		}
	}
</style>
