<template>
	<div id="app">
		<div id="app-background-container">
			<div id="app-background"></div>
		</div>

		<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/test">Test</router-link>
		</div> -->
		<router-view/>
	</div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Permanent+Marker');
@import 'styles/colors.scss';
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#app-background-container {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	perspective: 1000px;
	perspective-origin: top;
	overflow: hidden;
}
#app-background {
	width: 100%;
	height: 100%;
	transform-origin: 50% 0;
	transform-style: preserve-3d;
	transform: rotateX(70deg);
	background: linear-gradient(
			45deg,
			$blueD2 25.5%,
			transparent 25%,
			transparent 75%,
			$blueD2 75%,
			$blueD2 0
		),
		linear-gradient(
			45deg,
			$blueD2 25.5%,
			transparent 25%,
			transparent 75%,
			$blueD2 75%,
			$blueD2 0
		),
		black;
	background-repeat: repeat, repeat;
	background-position: 0 0, 50px 50px;
	background-size: 100px 100px, 100px 100px;
	animation: move 10s linear infinite;
}
@keyframes move {
	100% {
		background-position: 0 -400px, 50px -350px;
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
</style>
