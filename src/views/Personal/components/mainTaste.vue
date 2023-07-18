<script setup></script>
<template>
	<div class="taste">
		<div class="title">音乐品味</div>
		<div class="card">
			<div class="like">
				<div class="text">我的喜欢</div>
				<div class="key">111首</div>
				<div class="more">
					<img src="@/assets/icon/person/爱心.svg" alt="" class="icon" />
					<div class="mtext">喜欢的音乐</div>
				</div>
			</div>
			<div class="listenNum">
				<div class="text">累计听歌</div>
				<div class="key">970首</div>
				<div class="more">
					<img src="@/assets/icon/person/排行.svg" alt="" class="icon" />
					<div class="mtext">听歌排行</div>
				</div>
			</div>
			<div class="keyWord">
				<div class="text">本周关键词</div>
				<div class="key">属于你的音乐档案</div>
				<div class="more">
					<img src="@/assets/icon/person/沙漏.svg" alt="" class="icon" />
					<div class="mtext">黑胶时光机</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
	.taste {
		background-color: #fff;
		border-radius: 2vh;
		padding: 2vh;
		.title {
			font-size: x-large;
			font-weight: 600;
			margin-bottom: 1vh;
		}
		.card {
			display: flex;
			justify-content: space-between;
			img {
				height: 1.6vh;
			}
			.like,
			.listenNum,
			.keyWord {
				height: 12vh;
				width: 25vw;
				padding: 1vh;
				border-radius: 2vh;
				.text {
					font-size: small;
					margin-bottom: 1vh;
				}
				.key {
					font-weight: 500;
					height: 6.4vh;
				}
				.more {
					display: flex;
					align-items: center;
					.icon {
						margin-right: 1vw;
					}
					.mtext {
						font-size: x-small;
					}
				}
			}
			.like {
				border: 1px solid #fbf1f2;
				background: linear-gradient(to bottom, #fef2f2, #fefcfd);
			}
			.listenNum {
				border: 1px solid #fcf6eb;
				background: linear-gradient(to bottom, #fdf6e6, #fefcf9);
			}
			.keyWord {
				border: 1px solid #eef3fa;
				background: linear-gradient(to bottom, #f0f5fd, #fdfeff);
			}
		}
	}
</style>
