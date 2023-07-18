<script setup></script>
<template>
	<div class="main">
		<div class="background"></div>
		<div class="base-information">
			<img src="@/assets/images/Akkarin.jpg" alt="" class="avatar" />
			<div class="nickname">Akkarin好</div>
			<div class="message1">
				<div class="concern">1 关注</div>
				<div class="line"></div>
				<div class="fans">4 粉丝</div>
				<div class="line"></div>
				<div class="lv">lv.6</div>
			</div>
			<div class="message2">
				<div class="ip">IP: 我不道啊</div>
				<div class="sex-age"><img src="@/assets/icon/person/女性.svg" alt="" /><span>90后 水瓶座</span></div>
				<div class="address">霓虹 我不道啊</div>
				<div class="music-age">村龄6年</div>
			</div>
			<div class="improve-information">
				<div class="text">完善主页，发现更多音乐好品味</div>
				<div class="button">去填写</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
	@import '@/style/var.scss';
	img {
		height: 10vh;
	}
	.main {
		height: 60vh;
		width: 100vw;
		position: relative;
		.background {
			height: 40vh;
			width: 100vw;
			background-color: red;
			background-image: url('@/assets/images/魔理沙.png');
			background-size: auto 40vh;
			background-position: center;
			background-repeat: no-repeat;
		}
		.base-information {
			width: 90vw;
			height: 24vh;
			margin-left: 5vw;
			border-radius: 1.6vh;
			position: absolute;
			bottom: 0;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			.avatar {
				height: 10vh;
				width: 10vh;
				border-radius: 50%;
				margin-top: -7vh;
			}
			.nickname {
				font-size: 2.4vh;
				font-weight: 900;
			}

			.message1,
			.message2,
			.improve-information {
				display: flex;
			}
			.message1 {
				gap: 10px;
				.line {
					height: 1.5vh;
					width: 1px;
					background-color: #ebebeb;
				}
				div {
					font-size: smaller;
					color: #999;
				}
			}
			.message2 {
				justify-content: space-between;
				gap: 6px;
				div {
					height: 2.6vh;
					font-size: xx-small;
					padding: 0 1.5vw;
					border-radius: 1vh;
					border: 1px solid #ebebeb;
					line-height: 2.4vh;
				}
				.sex-age {
					img {
						height: 1.6vh;
						margin-bottom: -2px;
					}
				}
			}
			.improve-information {
				width: 90%;
				justify-content: space-between;
				align-items: center;
				.text {
					font-size: small;
					color: #666;
				}
				.button {
					font-size: small;
					color: $couldColorR;
					height: 3vh;
					line-height: 3vh;
					padding: 0 2vw;
					border-radius: 1.5vh;
					border: 1px solid #ebebeb;
				}
			}
		}
	}
</style>
