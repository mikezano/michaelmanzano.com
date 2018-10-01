<template lang="pug">
div
	.zano
		Background(:isVisible='isBackgroundVisible' :introDone='startTriangles')
			.fake-blt
			FindMe(:isVisible='isFindMeVisible')
			BottomLeftCurtain(:isVisible='isBottomLeftCurtainVisible' :onClosed='load')
			TopRightCurtain(:isVisible='isTopRightCurtainVisible')
			BottomLeftTriangle(:isVisible='isBottomLeftTriangleVisible' :introDone='closeCurtains')
			TopRightTriangle(:isVisible='isTopRightTriangleVisible')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Background from '@/components/Background.vue';
import BottomLeftTriangle from '@/components/BottomLeftTriangle.vue';
import TopRightTriangle from '@/components/TopRightTriangle.vue';
import TopRightCurtain from '@/components/TopRightCurtain.vue';
import BottomLeftCurtain from '@/components/BottomLeftCurtain.vue';
import FindMe from '@/components/FindMe.vue';

@Component({
	components: {
		Background,
		BottomLeftTriangle,
		BottomLeftCurtain,
		TopRightTriangle,
		TopRightCurtain,
		FindMe,
	},
})
export default class Zano extends Vue {
	public isBottomLeftCurtainVisible: boolean = false;
	public isTopRightCurtainVisible: boolean = false;
	public isBottomLeftTriangleVisible: boolean = false;
	public isTopRightTriangleVisible: boolean = false;
	public isBackgroundVisible: boolean = false;
	public isFindMeVisible: boolean = false;

	public mounted(): void {
		this.isBackgroundVisible = true;
	}

	public toggleCurtains(): void {
		this.closeCurtains();
	}

	public startTriangles(): void {
		this.isBottomLeftTriangleVisible = true;
		this.isTopRightTriangleVisible = true;
	}

	public load(): void {
		this.isFindMeVisible = true;
		this.openCurtains();
	}

	public closeCurtains(): void {
		this.isBottomLeftCurtainVisible = true;
		this.isTopRightCurtainVisible = true;
	}

	public openCurtains(): void {
		this.isBottomLeftCurtainVisible = false;
		this.isTopRightCurtainVisible = false;
	}
}
</script>

<style lang="scss">
@import '../styles/colors.scss';
@import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Permanent+Marker');

.zano {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40rem;

	font-family: 'Permanent Marker';
}
$size: 16rem;
.fake-blt {
	position: relative;
	float: left;
	bottom: 0;
	left: 0;
	width: $size;
	height: $size;
	background-color: none;
	shape-outside: polygon(0 0, 100% 100%, 0 100%);
	clip-path: polygon(0 0, 100% 100%, 0 100%);
}

body {
	$bg-color1: hsla(0, 0%, 15%, 1);
	$bg-color2: hsla(0, 0%, 13%, 1);
	$bg-color3: rgba(38, 255, 0, 0);

	background: radial-gradient(
				circle farthest-side at 0% 50%,
				$bg-color1 23.5%,
				$bg-color3 0
			)
			21px 30px,
		radial-gradient(
				circle farthest-side at 0% 50%,
				$bg-color2 24%,
				$bg-color3 0
			)
			19px 30px,
		linear-gradient(
				$bg-color1 14%,
				$bg-color3 0,
				$bg-color3 85%,
				$bg-color1 0
			)
			0 0,
		linear-gradient(
				150deg,
				$bg-color1 24%,
				$bg-color2 0,
				$bg-color2 26%,
				$bg-color3 0,
				$bg-color3 74%,
				$bg-color2 0,
				$bg-color2 76%,
				$bg-color1 0
			)
			0 0,
		linear-gradient(
				30deg,
				$bg-color1 24%,
				$bg-color2 0,
				$bg-color2 26%,
				$bg-color3 0,
				$bg-color3 74%,
				$bg-color2 0,
				$bg-color2 76%,
				$bg-color1 0
			)
			0 0,
		linear-gradient(
				90deg,
				$bg-color2 2%,
				$bg-color1 0,
				$bg-color1 98%,
				$bg-color2 0%
			)
			0 0 $bg-color1;
	background-size: 40px 60px;
	background-attachment: fixed;
	background-color: #333;
	animation: up-left 10s infinite linear;
}
@keyframes up-left {
	100% {
		background-position: -30px -30px;
	}
}
</style>
