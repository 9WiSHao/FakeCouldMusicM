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
	},

	{
		path: '/user',
		component: User,
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
