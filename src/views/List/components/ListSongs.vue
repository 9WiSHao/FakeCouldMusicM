<script setup></script>
<template>
	<div class="allSongs">
		<div class="function">
			<div class="left">
				<img src="@/assets/icon/songlist/镂空圆播放.svg" alt="" class="play-icon" />
				<div class="text">播放全部</div>
				<div class="num">(10)</div>
			</div>
			<div class="right">
				<img src="@/assets/icon/songlist/添加音乐.svg" alt="" class="add" />
				<img src="@/assets/icon/songlist/下载.svg" alt="" class="download" />
				<img src="@/assets/icon/songlist/更改顺序.svg" alt="" class="select" />
			</div>
		</div>
		<div class="songs">
			<div class="song1">
				<div class="num">1</div>
				<div class="message">
					<div class="songname">くらべられっ子<span>(更多信息)</span></div>
					<div class="down">
						<img src="@/assets/icon/songlist/红心.svg" alt="" class="love" />
						<div class="high"></div>
						<div class="singer">ツユ - やっぱり雨は降るんだね</div>
					</div>
				</div>
				<div class="more">
					<img src="@/assets/icon/songlist/三点更多_灰.svg" alt="" />
				</div>
			</div>
			<div class="song1">
				<div class="num">1</div>
				<div class="message">
					<div class="songname">くらべられっ子</div>
					<div class="down">
						<img src="@/assets/icon/songlist/红心.svg" alt="" class="love" />
						<div class="high"></div>
						<div class="singer">ツユ - やっぱり雨は降るんだね</div>
					</div>
				</div>
				<div class="more">
					<img src="@/assets/icon/songlist/三点更多_灰.svg" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
	img {
		height: 4vh;
	}
	.allSongs {
		background-color: #fff;
		border-radius: 2vh 2vh 0 0;
		padding: 2vh;

		.function {
			display: flex;
			justify-content: space-between;
			margin-bottom: 2vh;
			& > div {
				display: flex;
				align-items: center;
			}
			.left {
				gap: 8px;
				img {
					height: 3vh;
				}
				.text {
					font-size: larger;
					font-weight: 600;
				}
				.num {
					font-size: small;
					color: #999;
				}
			}
			.right {
				gap: 20px;
				img {
					height: 2vh;
				}
			}
		}
		.songs {
			display: flex;
			flex-direction: column;
			gap: 2vh;
			.song1 {
				display: flex;
				align-items: center;
				justify-content: space-between;
				.num {
					color: #999;
				}
				.message {
					width: 72vw;
					.songname {
						margin-bottom: 0.4vh;
						span {
							color: #999;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}
					.down {
						display: flex;
						align-items: center;

						img {
							height: 1.6vh;
						}
						.singer {
							color: #999;
							font-size: small;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}
				}
			}
		}
	}
</style>
