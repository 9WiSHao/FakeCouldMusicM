import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/index.vue';
import Login from '@/views/Login/index.vue';

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
		path: '/:catchAll(.*)',
		redirect: '/home',
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
