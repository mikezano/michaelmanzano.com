<template>
	<div id="app">
		<div id="app-background-container">
			<div id="app-background"></div>
		</div>

		<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/test">Test</router-link>
		</div>-->
		<router-view/>
	</div>
</template>

<style lang="scss">
//@import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Permanent+Marker');
@import url(https://fonts.googleapis.com/css?family=Audiowide);
@import "styles/colors.scss";
body {
	padding: 0;
	margin: 0;
}
#app {
	font-family: "Audiowide";
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #0892d0;
	background: linear-gradient(to bottom, black 100px, #0892d0);
}
#app-background-container {
	position: absolute;
	top: 300px;
	left: 0;
	right: 0;
	bottom: 0;
	perspective: 1000px;
	perspective-origin: top;
	overflow: hidden;
}
#app-background {
	border-top: 0.3rem solid lighten($blueD1, 20%);
	width: 100%;
	height: 100%;
	min-height: 800px;
	transform-origin: 50% 0;
	transform-style: preserve-3d;
	transform: rotateX(70deg);
	background: linear-gradient(
			90deg,
			transparent 0%,
			rgba(8, 146, 208, 0.5) 4%,
			#0892d0 5%,
			rgba(8, 146, 208, 0.5) 6%,
			transparent 10%
		),
		linear-gradient(
			1800deg,
			transparent 0%,
			rgba(8, 146, 208, 0.5) 4%,
			#0892d0 5%,
			rgba(8, 146, 208, 0.5) 6%,
			transparent 10%
		),
		black;
	background-repeat: repeat, repeat;
	background-position: 0 0, 50px 50px;
	background-size: 50px 50px, 50px 50px;
	animation: move 20s linear infinite;
}
@keyframes move {
	100% {
		background-position: 0 400px, 50px 350px;
	}
}
#nav {
	padding: 30px;
	a {
		font-weight: bold;
		color: #2c3e50;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}

@media screen and (max-width: 600px) {
	#app-background-container {
		top: 200px;
	}
}
</style>
