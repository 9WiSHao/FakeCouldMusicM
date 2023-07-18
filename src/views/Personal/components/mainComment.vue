<script setup></script>
<template>
	<div class="comment">
		<div class="title">
			<div class="left">
				<div class="text">我的评论</div>
				<div class="num">(6)</div>
			</div>
			<img src="@/assets/icon/person/锁.svg" alt="" />
		</div>
		<div class="comments">
			<div class="comment1">
				<div class="song">
					<div class="left">
						<img src="@/assets/images/never.png" alt="" class="song-cover" />
						<div class="song-name">单曲[xxx] - V/dj</div>
					</div>
					<div class="right">
						<div class="likes">10</div>
						<img src="@/assets/icon/person/点赞.svg" alt="" class="like" />
					</div>
				</div>
				<div class="text">哎呀这不dj吗，还是看看远处的雪山吧家人们</div>
				<div class="date">2022年2月22日</div>
			</div>
		</div>
		<div class="line"></div>
		<div class="more"><span>查看全部</span><img src="@/assets/icon/person/右折箭头_灰.svg" alt="" /></div>
	</div>
</template>
<style scoped lang="scss">
	.comment {
		background-color: #fff;
		border-radius: 2vh;
		padding: 2vh;
		.title {
			display: flex;
			justify-content: space-between;
			margin-bottom: 8px;
			img {
				height: 2vh;
			}
			.left {
				display: flex;
				gap: 4px;
				.text {
					font-size: x-large;
					font-weight: 600;
				}
				.num {
					font-size: smaller;
					line-height: 3.4vh;
					color: #999;
				}
			}
		}
		.comments {
			display: flex;
			flex-direction: column;
			gap: 6px;
			.comment1 {
				display: flex;
				flex-direction: column;
				gap: 10px;
				.song {
					display: flex;
					justify-content: space-between;
					img {
						height: 3vh;
						width: 3vh;
						object-fit: cover;
						border-radius: 0.6vh;
					}
					.left {
						display: flex;
						align-items: center;
						gap: 6px;
						.song-name {
							font-size: small;
							color: #999;
						}
					}
					.right {
						display: flex;
						align-items: center;
						gap: 4px;
						.likes {
							font-size: small;
							color: #999;
						}
						.like {
							height: 2vh;
							width: 2vh;
						}
					}
				}
				.date {
					font-size: small;
					color: #999;
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
