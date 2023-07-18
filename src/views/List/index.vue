<script setup>
	import ListTop from './components/ListTop.vue';
	import ListMessage from './components/ListMessage.vue';
	import ListSongs from './components/ListSongs.vue';
</script>
<template>
	<div class="listAll">
		<div class="top">
			<ListTop />
		</div>
		<div class="placeholder"></div>
		<ListMessage />
		<ListSongs />
	</div>
</template>
<style scoped lang="scss">
	.listAll {
		position: relative;
		width: 100vw;
		background-color: #5992a1;
		.top {
			position: fixed;
			top: 0;
			z-index: 10;
		}
		.placeholder {
			height: 6vh;
			width: 100vw;
		}
	}
</style>
