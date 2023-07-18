<script setup>
	import { ref, onMounted, onBeforeUnmount } from 'vue';
	import { useUserStore } from '@/stores/person.js';

	// 是否已经滚动的标志位，初始状态为false
	const scrolled = ref(false);
	const handleScroll = () => {
		scrolled.value = window.scrollY > 260;
	};

	const goBack = () => {
		window.history.back();
	};

	onMounted(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onBeforeUnmount(() => {
		window.removeEventListener('scroll', handleScroll);
	});
</script>
<template>
	<div :class="['top-main', { 'scrolled-top': scrolled }]">
		<div class="left">
			<img src="@/assets/icon/songlist/左箭头.svg" alt="" @click="goBack" />
			<div class="text">歌单</div>
		</div>
		<div class="right">
			<img src="@/assets/icon/songlist/搜索.svg" alt="" class="search" />
			<img src="@/assets/icon/songlist/三点更多.svg" alt="" class="more" />
		</div>
	</div>
</template>
<style scoped lang="scss">
	img {
		height: 3vh;
	}
	.top-main {
		width: 100vw;
		height: 6vh;
		background-color: transparent;
		padding: 0 4vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: transparent;
		.left {
			display: flex;
			align-items: center;
			.text {
				margin-left: 2vw;
				color: white;
			}
		}
		.right {
			.search {
				margin-right: 2vw;
			}
		}
	}
	.scrolled-top {
		background-color: #716b6f;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
</style>
