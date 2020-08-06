import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import How_to_download from '../views/How_to_download.vue'
import Privacy from '../views/Privacy.vue'
import Contact from '../views/Contact.vue'
import error_404 from '../views/error_404.vue'

Vue.use(VueRouter)
	const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Download Reels Instagram',
		}
	},
	{
		path: '/blog',
		name: 'Blog',
		component: Blog,
		meta: {
			title: 'Download Reels Instagram Blog',
		}
	},
	{
		path: '/how-to-download-reels',
		name: 'How_to_download',
		component: How_to_download,
		meta: {
			title: 'How to download reels instagram',
		}
	},
	{
		path: '/privacy',
		name: 'Privacy',
		component: Privacy,
		meta: {
			title: 'Privacy | DownloadReels',
		}
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact,
		meta: {
			title: 'Contact | DownloadReels',
		}
	},
	{
		path: '*',
		name: 'error_404',
		component: error_404,
		meta: {
			title: '404 | DownloadReels',
		}
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})
router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	next();
});
export default router
