import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/index.vue';
import Login from '@/views/Login/index.vue';
import User from '@/views/Personal/index.vue';

const routes = [
	{
		path: '/home',
		component: Home,
	},
	{
		path: '/login',
		component: Login,
		redirect: '/login/phone',
		children: [
			{
				path: 'phone',
				component: () => import('@/views/Login/components/Phone.vue'),
			},
			{
				path: 'qrcode',
				component: () => import('@/views/Login/components/Qrcode.vue'),
			},
		],
	},

	{
		path: '/user',
		component: User,
	},
	{
		path: '/songlist',
		component: () => import('@/views/List/index.vue'),
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/user',
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
