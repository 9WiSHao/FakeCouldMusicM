<script setup>
	import { defineProps } from 'vue';
	defineProps({
		title: String,
		count: Number,
		lists: Array,
	});
	const toList = (id) => {
		console.log(id);
		// router.push({
		//   path: '/list',
		//   query: {
		//     id,
		//   },
		// });
	};
</script>
<template>
	<div class="list">
		<div class="title">
			<div class="text">{{ title }}</div>
			<div class="num">({{ count }}个)</div>
		</div>
		<div class="song-lists">
			<div class="list1" v-if="!lists">
				<img src="@/assets/images/never.png" alt="" />
				<div class="right">
					<div class="list-title">加载中</div>
					<div class="message">10首，By wishao，播放1次</div>
				</div>
			</div>
			<div class="list1" v-else v-for="list in lists.slice(0, 10)" :key="list.id" @click="toList(list.id)">
				<img :src="list.coverUrl" alt="" />
				<div class="right">
					<div class="list-title">{{ list.listName }}</div>
					<div class="message">{{ list.songNum }}首，By {{ list.creator }}，播放{{ list.playCount }}次</div>
				</div>
			</div>
		</div>
		<div class="line"></div>
		<div class="more"><span>查看全部</span><img src="@/assets/icon/person/右折箭头_灰.svg" alt="" /></div>
	</div>
</template>
<style scoped lang="scss">
	.list {
		background-color: #fff;
		border-radius: 2vh;
		padding: 2vh;
		.title {
			display: flex;
			gap: 4px;
			margin-bottom: 2vh;
			.text {
				font-size: x-large;
				font-weight: 600;
			}
			.num {
				font-size: smaller;
				line-height: 3vh;
				color: #999;
			}
		}
		.song-lists {
			display: flex;
			flex-direction: column;
			gap: 8px;
			.list1 {
				display: flex;
				align-items: center;
				gap: 8px;
				img {
					height: 6vh;
					width: 6vh;
					object-fit: cover;
					border-radius: 1vh;
				}
				.right {
					.list-title {
						max-width: 71vw;
						margin-bottom: 6px;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					.message {
						max-width: 71vw;
						font-size: x-small;
						color: #999;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
		.more {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 2px;
			margin-top: 1vh;
			span {
				font-size: small;
				color: #999;
			}
			img {
				height: 1.4vh;
			}
		}
		.line {
			height: 1px;
			width: 90vw;
			background-color: #eee;
			margin-top: 1vh;
			margin-left: -4vw;
		}
	}
</style>
