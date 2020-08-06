import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import How_to_download from '../views/How_to_download.vue'
import error_404 from '../views/error_404.vue'

Vue.use(VueRouter)
	const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/blog',
		name: 'Blog',
		component: Blog
	},
	{
		path: '/how-to-download-reels',
		name: 'How_to_download',
		component: How_to_download
	},
	{
		path: '*',
		name: 'error_404',
		component: error_404
	}
]

const router = new VueRouter({
	routes
})

export default router
