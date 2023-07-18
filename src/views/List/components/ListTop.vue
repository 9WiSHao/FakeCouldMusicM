<script setup></script>
<template>
	<div class="top">
		<div class="left">
			<img src="@/assets/icon/songlist/左箭头.svg" alt="" />
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
	.top {
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
</style>
