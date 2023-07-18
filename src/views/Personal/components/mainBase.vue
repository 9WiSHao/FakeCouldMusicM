<script setup></script>
<template>
	<div class="base">
		<div class="title">
			<div class="text">基本信息</div>
			<div class="button">领取村民证</div>
		</div>
		<div class="could-age">村龄：6年(2017年03月注册)</div>
		<div class="sex">性别：女</div>
		<div class="age">年龄：90后 水瓶座</div>
		<div class="profile">个人简介：吧啦吧啦吧拉</div>
		<div class="line"></div>
		<div class="more"><span>查看全部</span><img src="@/assets/icon/person/右折箭头_灰.svg" alt="" /></div>
	</div>
</template>
<style scoped lang="scss">
	.base {
		background-color: #fff;
		border-radius: 2vh;
		padding: 2vh;
		display: flex;
		flex-direction: column;
		gap: 12px;
		.title {
			display: flex;
			justify-content: space-between;
			.text {
				font-size: x-large;
				font-weight: 600;
			}
			.button {
				border: 1px solid #e6e6e6;
				border-radius: 2vh;
				padding: 2px 8px;
				font-size: small;
				line-height: 2vh;
			}
		}
		.could-age,
		.sex,
		.age,
		.profile {
			font-size: small;
			color: #999;
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
