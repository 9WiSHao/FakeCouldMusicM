<script setup>
	import router from '@/router/index';
	import { ref, onMounted, onBeforeUnmount } from 'vue';
	import { useUserStore } from '@/stores/person.js';
	const { user } = useUserStore();

	const toHome = () => {
		router.push('/home');
	};

	// 是否已经滚动的标志位，初始状态为false
	const scrolled = ref(false);
	const handleScroll = () => {
		// 当滚动的距离大于一定值时，修改scrolled为true，否则为false
		scrolled.value = window.scrollY > 260;
	};
	onMounted(() => {
		// 在组件挂载后监听window的滚动事件
		window.addEventListener('scroll', handleScroll);
	});

	onBeforeUnmount(() => {
		// 在组件销毁前移除滚动事件监听器
		window.removeEventListener('scroll', handleScroll);
	});
</script>
<template>
	<div :class="['top', { 'scrolled-top': scrolled }]">
		<div class="left">
			<img :src="scrolled ? 'src/assets/icon/person/左箭头.svg' : 'src/assets/icon/person/左箭头_白.svg'" alt="" @click="toHome" />
			<div :class="['username', { 'scrolled-name': scrolled }]">{{ user.nickname ?? '加载中' }}</div>
		</div>
		<div class="center"></div>
		<div class="right">
			<img :src="scrolled ? 'src/assets/icon/person/三点更多.svg' : 'src/assets/icon/person/三点更多_白.svg'" alt="" />
		</div>
	</div>
</template>
<style scoped lang="scss">
	img {
		height: 4vh;
	}

	.top {
		width: 100vw;
		height: 6vh;
		background-color: transparent;
		padding: 0 4vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left {
			display: flex;
			align-items: center;
			.username {
				margin-left: 2vw;
				color: #fff;

				&.scrolled-name {
					color: #000;
				}
			}
		}
	}

	.scrolled-top {
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
</style>
