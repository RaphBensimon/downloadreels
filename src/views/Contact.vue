<template>
	<main id="contact" class="container">
		<h1>Contact</h1>
		<p>
			You can contact us by sending a email at :<a class="link" href="mailto:contact@downloadreels.com">contact@downloadreels.com</a>
		</p>
	</main>
</template>

<script>
export default {
	name: 'Contact',
	data() {
		return {
		}
	},
	head: {
		title: function() {
			return {
				   inner: this.$route.meta.title,
				   separator: ' '
     		}
		},
		 meta: function() {
			 return [
				{ name: 'description', content: this.$route.meta.description }
			]
		}

	},
}
</script>

<style lang="less" scoped>
@import '@/assets/css/common.less';
#contact {
	padding-top: 20px;
}
h2 {
	margin: 0;
	text-align: center;
}
</style>