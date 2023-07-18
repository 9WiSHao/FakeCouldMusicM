<script setup></script>
<template>
	<div class="top">
		<div class="left">
			<img src="@/assets/icon/person/左箭头.svg" alt="" />
			<div class="username">xxx123</div>
		</div>
		<div class="center"></div>
		<div class="right">
			<img src="@/assets/icon/person/三点更多.svg" alt="" />
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
			}
		}
	}
</style>
