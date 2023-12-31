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
		path: '/songlist/:id',
		name: 'songlist',
		component: () => import('@/views/List/index.vue'),
	},
	{
		path: '/setting',
		component: () => import('@/views/Setting/index.vue'),
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/home',
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
