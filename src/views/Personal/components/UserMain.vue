<script setup>
	import mainTaste from './mainTaste.vue';
	import mainList from './mainList.vue';
	import mainComment from './mainComment.vue';
	import mainBase from './mainBase.vue';
	import { useUserStore } from '@/stores/person.js';
	const { user, userReal } = useUserStore();
</script>
<template>
	<div class="main2">
		<mainTaste />
		<mainList title="创建的歌单" :count="user.myListCount" :lists="userReal.myList" />
		<mainList title="收藏的歌单" :count="user.subscribedListCount" :lists="userReal.subscribedList" />
		<mainComment :count="userReal.commentsCount" :lists="userReal.comments" />
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
