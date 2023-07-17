<script setup>
	import { defineProps } from 'vue';
	defineProps({
		if_title: Boolean,
		title: String,
		services: Array,
	});
</script>

<template>
	<div class="main">
		<div class="title" v-if="if_title">{{ title }}</div>
		<div class="line" v-if="if_title"></div>
		<div class="services">
			<router-link :to="service.router" class="service" v-for="service in services" :key="service.id">
				<div class="message">
					<div class="left">
						<img :src="service.src" alt="" class="icon" />
						<div class="text">{{ service.text }}</div>
					</div>
					<div class="right">
						<div class="more" v-if="service.if_more">{{ service.more }}</div>
						<img src="@/assets/icon/sideBar/右折箭头_灰.svg" alt="" class="arrow" />
					</div>
				</div>
				<div class="line" v-if="service.if_line"></div>
			</router-link>
		</div>
	</div>
</template>

<style scoped lang="scss">
	@import '@/style/var.scss';
	.main {
		background-color: #fff;
		border-radius: 2vh;
		padding: 1vh 2vh;
		margin-bottom: 2vh;
		.title {
			font-size: smaller;
			color: $sidebarGery;
		}
		.line {
			width: 72vw;
			transform: translateY(1.5vh);
			height: 1px;
			background-color: #f3f3f3;
			margin-left: -4vw;
		}
		.services {
			.service {
				color: inherit;
				text-decoration: none;
				.message {
					display: flex;
					justify-content: space-between;
					padding-top: 3vh;
					img {
						height: 2.5vh;
					}
					.left {
						display: flex;
						align-items: center;
						.icon {
							margin-right: 10px;
						}
					}
					.right {
						display: flex;
						align-items: center;
						.more {
							font-size: smaller;
							color: $sidebarGery;
						}
					}
				}
				.line {
					width: 72vw;
					transform: translateY(1.5vh);
					height: 1px;
					background-color: #f3f3f3;
					margin-left: -4vw;
				}
			}
		}
	}
</style>
