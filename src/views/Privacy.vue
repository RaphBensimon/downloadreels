<template>
	<main id="privacy" class="container">
		<h1>Privacy</h1>
		<p>
			No user data is collected because DownloadReels.com doesn't use cookies or databases, it's just a tool to download a reel from instagram.
			<br>
			By downloading an instagram reel you confirm that you own the copyright of the reel in question.
		</p>
	</main>
</template>

<script>
export default {
	name: 'Privacy',
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
#privacy {
	padding-top: 20px;
}
h2 {
	margin: 0;
	text-align: center;
}

</style>