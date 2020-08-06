<template>
	<div id="app">
		<header>
			<a href="/"><h2 class="gineso">Download<span class="blue">REELS</span>.com</span></h2></a>
			<nav :class="{active: nav_active}">
				<ul>
					<li>
						<router-link v-on:click.native="nav_open()" to="/">
							Home
							<img src="@/assets/img/home.svg" class="svg" alt="Home svg">
							<img src="@/assets/img/home-outline.svg" class="outline_icon svg" alt="Home outline svg">
						</router-link>
					</li>
					<li>
						<router-link v-on:click.native="nav_open()" to="/blog">
							Blog
							<img src="@/assets/img/newspaper.svg" class="svg" alt="Blog svg">
							<img src="@/assets/img/newspaper-outline.svg" class="outline_icon svg" alt="Blog svg">
						</router-link>
					</li>
				</ul>
			</nav>
			<div id="hamburger" :class="{active: nav_active}" v-on:click="nav_open()">
				<div></div>
				<div></div>
			</div>
		</header>
		<div id="overlay_nav" :class="{active: nav_active}" v-on:click="nav_open()"></div>
		<router-view/>
		<footer>
			<ul>
				<li><router-link to="/privacy">Privacy</router-link></li>
				<li><router-link to="/contact">Contact</router-link></li>
			</ul>
		</footer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			nav_active: false,
		}
	},
	methods: {
		nav_open: function(){
			if(this.nav_active){
				this.nav_active = false;
			} else {
				this.nav_active = true;
			}
		}
	}
}
</script>

<style lang="less">
@import '@/assets/css/common.less';
#app {
	height: 100%;
}
header {
	min-height: 54px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 40px;
	border: 1px solid @grey;
	background-color: @white;
}
header h2 {
	border-radius: @round;
	font-size: 32px;
	margin: 0;
}
header nav {
	z-index: 2;
}
header nav ul{
	display: flex;
}
header nav ul li {
	font-size: 16px;
	margin-left: 20px;
	display: flex;
	justify-content: flex-end;
	&:first-of-type {
		margin-left: 0;
	}
	a.router-link-exact-active {
		text-shadow: 0 0 1px @black;
  		transition: @transition;
		.outline_icon {
			opacity: 0;
		}
		img:not(.outline_icon) {
			opacity: 1;
		}
	}
}
header nav ul li a {
	display: flex;
	align-items: top;
	position: relative;
	padding-right: 25px;
}
header nav ul li a .svg {
	margin-left: 5px;
	position: absolute;
	right: 0;
  	transition: @transition;
	&.help_icon {
		width: 24px;
		height: 24px;
	}
	&:not(.outline_icon) {
			opacity: 0;
	}
}
header #hamburger {
	display: none;
	flex-direction: column;
	justify-content: space-between;
	width: 27px;
	z-index: 2;
	position: absolute;
	right: 18px;
	height: 10px;
}
header #hamburger div {
	content: '';
	width: 100%;
	height: 2px;
	background-color: @black;
	transition: 0.3s;
}
header #hamburger.active div {
	&:nth-child(1) {
		transform: translateY(5px) rotate(45deg);

	}
	&:nth-child(2) {
		transform: translateY(-3px) rotate(-45deg);
	}
}
#overlay_nav {
	position: fixed;
	top: 0;
	right: 0px;
	left: 0;
	bottom: 0;
	background-color: @white;
	z-index: 0;
	opacity: 0;
	visibility: hidden;
	transition: @transition;
}
footer {
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
}
footer ul {
	display: flex;
}
footer ul li {
	margin-left: 10px;
	&:first-of-type {
		margin-left: 0;
	}
}
footer ul li a {
	text-transform: uppercase;
	color: @dark_blue;
	font-weight: 600;
	font-size: 12px;
}
@media only screen and (max-width: 500px) {
	header {
		justify-content: center;
	}
	header nav {
		position: fixed;
		right: -193px;
		height: 100%;
		background-color: @white;
		top: 0;
		transition: @transition;
	}
	header nav.active {
		right: 0;
	}
	header nav ul {
		flex-direction: column;
		margin-top: 50px;
	}
	header nav ul li {
		margin-left: 0;
		padding: 10px 20px;
		text-align: right;
	}
	header #hamburger {
		display: flex;
	}
	#overlay_nav.active {
		z-index: 1;
		opacity: 0.5;
		visibility: visible;
	}
}
</style>
