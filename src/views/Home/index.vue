<script setup>
	import TopBar from './components/TopBar.vue';
	import Sidebar from '../Sidebar/index.vue';
	import { ref, onMounted, onUnmounted, watch } from 'vue';

	let showSidebar = ref(false);
	const toggleSidebar = () => {
		showSidebar.value = !showSidebar.value;
	};

	// 左侧屏幕 20vw 起点
	const sidebarThreshold = window.innerWidth * 0.2;
	// 滑动打开侧边栏所需最小距离
	const slideOpenMin = 50;
	const deltaYThreshold = 30;

	// 初始触碰位置
	let startX = 0;
	let startY = 0;
	// 触碰开始回调,记录起始坐标
	const touchStartHandler = (event) => {
		startX = event.touches[0].clientX;
		startY = event.touches[0].clientY;
	};
	// 触碰滑动回调,计算滑动距离和方向
	const touchMoveHandler = (event) => {
		const deltaX = event.touches[0].clientX - startX;
		const deltaY = event.touches[0].clientY - startY;
		// 判断为左侧滑动且距离超过阈值,显示侧边栏
		if (startX <= sidebarThreshold && deltaX > slideOpenMin && Math.abs(deltaY) < deltaYThreshold) {
			showSidebar.value = true;
		} else {
			showSidebar.value = false;
		}
	};

	onMounted(() => {
		document.addEventListener('touchstart', touchStartHandler);
		document.addEventListener('touchmove', touchMoveHandler);

		// 清除事件监听器
		onUnmounted(() => {
			document.removeEventListener('touchstart', touchStartHandler);
			document.removeEventListener('touchmove', touchMoveHandler);
		});
	});

	watch(showSidebar, (newValue) => {
		if (newValue) {
			// 显示侧边栏时清除监听
			document.removeEventListener('touchstart', touchStartHandler);
			document.removeEventListener('touchmove', touchMoveHandler);
		} else {
			// 隐藏侧边栏时重新绑定监听
			document.addEventListener('touchstart', touchStartHandler);
			document.addEventListener('touchmove', touchMoveHandler);
		}
	});
</script>

<template>
	<div class="home">
		<div :class="['sidebar-container', { 'show-sidebar': showSidebar }]">
			<Sidebar />
		</div>
		<TopBar @moreClick="toggleSidebar" />
		<div class="find">主页，先空着</div>
		<div :class="['mask', { 'show-mask': showSidebar }]" @click="toggleSidebar"></div>
	</div>
</template>

<style scoped lang="scss">
	.home {
		height: 30vh;
		width: 100vw;
	}
	.find {
		width: 100vw;
		text-align: center;
		background-color: aqua;
	}
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 998;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s ease, visibility 0.3s ease;
	}
	.show-mask {
		opacity: 1;
		visibility: visible;
		transition: opacity 0.3s ease, visibility 0.3s ease;
	}
	.sidebar-container {
		position: fixed;
		top: 0;
		left: -80vw;
		z-index: 999;

		transform: translateX(0);
		transition: transform 0.3s ease-in-out;
	}
	.show-sidebar {
		transform: translateX(80vw);
		transition: transform 0.3s ease-in-out;
	}
</style>
