<script setup>
	import TopBar from './components/TopBar.vue';
	import Sidebar from '../Sidebar/index.vue';
	import { ref } from 'vue';

	let showSidebar = ref(false);

	const toggleSidebar = () => {
		showSidebar.value = !showSidebar.value;
	};
</script>

<template>
	<div :class="['sidebar-container', { 'show-sidebar': showSidebar }]">
		<Sidebar />
	</div>
	<TopBar @moreClick="toggleSidebar" />
	<div class="home">主页，先空着</div>
	<div :class="['mask', { 'show-mask': showSidebar }]" @click="toggleSidebar"></div>
</template>

<style scoped lang="scss">
	.home {
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
