<template>
	<div id="home" class="container">
		<form v-if="!loading && !url_download" v-on:submit="get_videos()">
			<input placeholder="Ex: https://www.instagram.com/p/CDYt6BdKgG9/" type="text" v-model="url_video">
			<button>
				Download<span class="gineso" style="margin-left: 3px; transform: translateY(-2px);">REELS</span>
				<img src="@/assets/img/download.svg" alt="Download svg" class=svg>	
			</button>
		</form>
		<div v-if="error" id="error">
			<p>{{error}}</p>
		</div>
		<img v-if="loading" src="@/assets/img/loading.svg" alt="Download svg" id="loading" class=svg>
		<div v-if="url_download" id="safari_option">
			<a :href="url_download" target="_blank" id="download"><Button>Download your <span class="gineso">REELS</span></Button></a>
			<button class="grey">Download another <span class="gineso">REELS</span></button>
		</div>
	</div>
</template>

<script>
var FileSaver = require('file-saver');
export default {
	name: 'Home',
	data() {
		return {
			url_video: "https://www.instagram.com/p/CDZutJgK6SK/",
			url_download: "",
			error: "",
			loading: false,
		}
	},
	methods: {
		get_videos: function(e){
			var t = this;
			event.preventDefault();
			var regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
			if(regexp.test(t.url_video)){
				if(t.url_video.includes("www.instagram.com")){
					t.error_true = false;
					t.loading = true;
					var req = new XMLHttpRequest();
					req.open("GET", t.url_video, true);
					req.send(null);
					req.onreadystatechange = function() {
						if(req.readyState == 4 && this.status == 200){
							t.loading = false;
							var html = document.createElement('html');
							html.innerHTML = req.responseText;
							// IF SAFARI
							if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){
								t.url_download = html.querySelector("meta[property='og:video']").content + "&dl=1"
							} else {
								window.open(html.querySelector("meta[property='og:video']").content + "&dl=1", 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
							}
							t.url_video = "";
						}
					}
					
				} else {
					t.error = "Please enter instagram URL";
					t.error_true = true;
				}
			} else {
				t.error = "Please enter valid URL";
				t.error_true = true;
			}
			
			
		},
	}
}
</script>

<style lang="less" scoped>
@import '@/assets/css/common.less';
#home {
	display: flex;
	align-items: center;
	flex-direction: column;
}
form {
	width: 90%;
	max-width: 400px;
	background-color: @white;
	border-radius: @round;
	padding: 20px;
	border: 1px solid @grey;
	display: flex;
	height: fit-content;
	flex-direction: column;
}
form input {
	margin-bottom: 10px;
}
form button {
	padding: 10px 20px;
	font-size: 18px;
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;
}
form button .svg {
	width: 25px;
	height: 25px;
	position: relative;
	top: -3px;
	margin-left: 3px;
}
#error {
	font-weight: bold;
	color: @red;
	transition: @transition;
}
#loading {
	width: 40px;
	height: 40px;
	position: relative;
	top: 67px;
	transform: translateY(-50%);
}
#safari_option {
	width: 90%;
	align-items: center;
	display: flex;
	flex-direction: column;
	max-width: 400px;
}
#safari_option  * {
	margin-top: 10px;
    font-size: 18px;
	font-weight: bold;
}
#sarafi_option a {
	width: 100%;
	padding: 10px 20px;
	display: contents;
}
#safari_option button {
	padding: 10px 20px;
	max-width: 358px;
	width: 100%;
}
</style>