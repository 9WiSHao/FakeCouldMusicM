<script setup>
	import mainTaste from './mainTaste.vue';
	import mainList from './mainList.vue';
	import mainComment from './mainComment.vue';
	import mainBase from './mainBase.vue';
</script>
<template>
	<div class="main2">
		<mainTaste />
		<mainList />
		<mainList />
		<mainComment />
		<mainBase />
	</div>
</template>
<style scoped lang="scss">
	.main2 {
		width: 90vw;
		margin: 0 5vw;
		display: flex;
		flex-direction: column;
		gap: 2vh;
	}
</style>
