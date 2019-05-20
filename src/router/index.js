import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// const main = () => import('@/pages/main/index')
// console.log(main())
const routes = [
	{
		path: '/',
		name: '_main',
		redirect: '/pageA',
		component: () => import('@/pages/main/index'),
		children: [
			{
				path: 'pageA',
				name: 'pageA',
				meta: {
					keepAlive: true
				},
				component: () => import('@/pages/pageA/index')
			},
			
			{
				path: 'pageB',
				name: 'pageB',
				meta: {
					keepAlive: true
				},
				component: () => import('@/pages/pageB/index')
			},
		]
	}
]
const router =  new VueRouter({
	mode: 'history',
	routes
})
export default router

// {
// 	path: '/',
// 	name: '_home',
// 	redirect: '/home',
// 	component: Main,
// 	meta: {
// 		hideInMenu: true,
// 		notCache: true
// 	},
// 	children: [
// 		{
// 			path: '/home',
// 			name: 'home',
// 			meta: {
// 				hideInMenu: true,
// 				title: '首页',
// 				notCache: true,
// 				icon: 'md-home'
// 			},
// 			component: () => import('@/view/single-page/home')
// 		}
// 	]
// },