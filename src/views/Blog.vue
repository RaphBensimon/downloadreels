<template>
	<main id="blog" class="container">

	</main>
</template>

<script>
export default {
	name: 'Blog',
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

</style>