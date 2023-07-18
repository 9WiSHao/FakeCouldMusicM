<script setup>
	import { useUserStore } from '@/stores/person.js';
	const { user, userReal } = useUserStore();
</script>
<template>
	<div class="main">
		<div class="background" :style="{ backgroundImage: user.backgroundUrl ? `url('${user.backgroundUrl}')` : `url('src/assets/images/魔理沙.png')` }"></div>
		<div class="base-information">
			<img :src="user.avatarUrl ?? 'src/assets/images/Akkarin.jpg'" alt="" class="avatar" />
			<div class="nickname">{{ user.nickname ?? 'Akkarin' }}</div>
			<div class="message1">
				<div class="concern">{{ userReal.follows ?? 1 }} 关注</div>
				<div class="line"></div>
				<div class="fans">{{ userReal.followeds ?? 4 }} 粉丝</div>
				<div class="line"></div>
				<div class="lv">lv.{{ userReal.level ?? 6 }}</div>
			</div>
			<div class="message2">
				<div class="ip">IP: {{ userReal.provinceIP ?? '未知' }}</div>
				<div class="sex-age">
					<img :src="userReal.gender ? 'src/assets/icon/person/男性.svg' : 'src/assets/icon/person/女性.svg'" alt="" /><span>{{ userReal.age ?? '90后' }}</span>
				</div>
				<div class="address">{{ userReal.adress2 ?? '霓虹 我不道啊' }}</div>
				<div class="music-age">村龄{{ userReal.villageAge ?? '6' }}年</div>
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
		height: 58vh;
		width: 100vw;
		position: relative;
		.background {
			height: 38vh;
			width: 100vw;
			background-image: url('@/assets/images/魔理沙.png');
			background-size: auto 42vh;
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
