<script setup></script>
<template>
	<div class="list-message">
		<div class="message">
			<div class="left">
				<img src="@/assets/images/never.png" alt="" class="cover" />
				<div class="count">
					<img src="@/assets/icon/songlist/播放_白.svg" alt="" />
					<div class="number">22</div>
				</div>
			</div>
			<div class="right">
				<div class="list-name">
					<div class="name">歌单13214123123 2321qweqwe3123</div>
					<div class="more"></div>
				</div>
				<div class="owner">
					<img src="@/assets/images/Akkarin.jpg" alt="" class="avator" />
					<div class="nickname">Akkarin</div>
					<img src="@/assets/icon/songlist/右折箭头.svg" alt="" class="arrow" />
				</div>
			</div>
		</div>
		<div class="introduction">
			<div class="text">这是简介</div>
			<img src="@/assets/icon/songlist/右折箭头.svg" alt="" class="arrow" />
		</div>
		<div class="function">
			<div class="share">
				<img src="@/assets/icon/songlist/分享.svg" alt="" />
				<div class="text">123</div>
			</div>
			<div class="comment">
				<img src="@/assets/icon/songlist/评论.svg" alt="" />
				<div class="text">456</div>
			</div>
			<div class="collection">
				<img src="@/assets/icon/songlist/收藏列表.svg" alt="" />
				<div class="text">789</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
	.list-message {
		background-color: transparent;
		width: 90vw;
		margin: 0 auto;
		.message {
			display: flex;
			justify-content: space-around;
			margin: 1.5vh 0;
			.left {
				width: 30vw;
				height: 30vw;
				position: relative;
				.cover {
					width: 100%;
					height: 100%;
					object-fit: cover;
					border-radius: 1vh;
				}
				.count {
					position: absolute;
					top: 4px;
					right: 4px;
					display: flex;
					align-items: center;
					img {
						height: 1vh;
					}
					.number {
						font-size: 1.5vh;
						color: #fff;
					}
				}
			}
			.right {
				width: 54vw;
				.list-name {
					display: flex;
					justify-content: space-between;
					margin-bottom: 1.4vh;
					.name {
						width: 46vw;
						word-wrap: break-word;
						font-size: large;
						font-weight: 600;
						color: #fff;
					}
				}
				.owner {
					display: flex;
					align-items: center;
					gap: 4px;
					.avator {
						width: 4vh;
						height: 4vh;
						border-radius: 50%;
					}
					.nickname {
						font-size: 1.5vh;
						color: #ddd;
					}
					.arrow {
						height: 1.6vh;
					}
				}
			}
		}
		.introduction {
			display: flex;
			align-items: center;
			margin-bottom: 1.5vh;
			.text {
				font-size: 1.5vh;
				color: #ddd;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.arrow {
				height: 1.6vh;
			}
		}
		.function {
			display: flex;
			justify-content: space-around;
			padding-bottom: 4vh;
			& > div {
				height: 5vh;
				width: 26vw;
				display: flex;
				gap: 3px;
				justify-content: center;
				align-items: center;
				background-color: rgba($color: #fff, $alpha: 0.2);
				border-radius: 2.4vh;
				img {
					height: 3vh;
				}
				.text {
					font-size: small;
					color: #ddd;
				}
			}
		}
	}
</style>
