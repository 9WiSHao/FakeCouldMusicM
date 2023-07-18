<script setup>
	const emit = defineEmits(['more-click']);
	const moreClick = () => {
		emit('more-click');
	};
</script>
<template>
	<div class="top-bar">
		<img src="@/assets/icon/home/更多.svg" alt="" class="slider-button" @click="moreClick" />
		<div class="search">
			<img src="@/assets/icon/home/搜索.svg" alt="" class="magnifying-glass" />
			<input type="text" placeholder="くらべられっ子" />
			<img src="@/assets/icon/home/扫码.svg" alt="" class="qrcode" />
		</div>
		<img src="@/assets/icon/home/听歌识曲.svg" alt="" class="recognize-song" />
	</div>
	<div class="place-holder"></div>
</template>
<style scoped lang="scss">
	.top-bar {
		position: fixed;
		top: 0;
		height: 6vh;
		width: 100vw;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #f6f5f6;
		img {
			height: 3vh;
		}
		.search {
			padding: 0 4vw;
			height: 5vh;
			background: linear-gradient(to right, #dbdcfd, #f5d7ee);
			width: 70vw;
			border-radius: 3.5vh;
			display: flex;
			align-items: center;
			background-color: #fff;
			img {
				height: 2.5vh;
			}
			input {
				height: 3vh;
				width: 52vw;
				border: none;
				outline: none;
				background-color: transparent;
				font-size: 1.5vh;
			}
		}
	}
	.place-holder {
		height: 6vh;
		width: 100vw;
	}
</style>
