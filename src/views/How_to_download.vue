<template>
	<main id="how_to_download" class="container">
		<h1>How to download Instagram Reels</h1>
		<p>
			Go to Instagram and open the video you wish to download. <br>
		</p>
		<p>
			If you are on the Instagram application, click on <b>other options</b> and copy the share URL/copy the link. Or if you are using Instagram in a web browser, open the video in a new tab and copy the video's link from the web browser's URL bar.
			and <b>paste the video link</b> into the input at <router-link v-on:click.native="nav_open()" to="/">Home</router-link>, and click/press the <b>« Download »</b> button.	
		</p>	
		<p>
			The Instagram video will play, and there is a "Download" button just below it, so just touch or click on it, and the Instagram video will be saved to your device.
		</p>
	</main>
</template>

<script>
export default {
	name: 'How_to_download',
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