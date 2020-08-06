import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import How_to_download from '../views/How_to_download.vue'
import Privacy from '../views/Privacy.vue'
import Contact from '../views/Contact.vue'
import error_404 from '../views/error_404.vue'

import VueHead from 'vue-head';
Vue.use(VueHead)
Vue.use(VueRouter)
	const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Download Reels Instagram',
			description: 'Download Reels Instagram Free in one click download.'
		}
	},
	{
		path: '/blog',
		name: 'Blog',
		component: Blog,
		meta: {
			title: 'Download Reels Instagram Blog',
			description: 'Find the latest Instagram Reels news and updates. Browse featured articles and topics to learn more about what Instagram Reels has to offer.'
		}
	},
	{
		path: '/how-to-download-reels',
		name: 'How_to_download',
		component: How_to_download,
		meta: {
			title: 'How to download reels instagram',
			description: ' How to download Reels Instagram on PC, Android or IOS.'
		}
	},
	{
		path: '/privacy',
		name: 'Privacy',
		component: Privacy,
		meta: {
			title: 'Privacy | DownloadReels',
			description:''
		}
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact,
		meta: {
			title: 'Contact | DownloadReels',
			description: 'We are here to help you and answer all your requests.'
		}
	},
	{
		path: '*',
		name: 'error_404',
		component: error_404,
		meta: {
			title: '404 | DownloadReels',
			description:''
		}
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router
