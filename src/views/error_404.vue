<template>
	<div id="error_404" class="container">

	</div>
</template>

<script>
export default {
	name: 'error_404',
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