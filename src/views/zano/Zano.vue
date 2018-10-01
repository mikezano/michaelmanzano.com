<template lang="pug">
div
	button(@click='toggleCurtains') ToggleCurtains
	.zano
		Background(:isVisible='isBackgroundVisible' :introDone='startTriangles')
			BottomLeftCurtain(:isVisible='isBottomLeftCurtainVisible' :onClosed='load')
			TopRightCurtain(:isVisible='isTopRightCurtainVisible')
			BottomLeftTriangle(:isVisible='isBottomLeftTriangleVisible' :introDone='closeCurtains')
			TopRightTriangle(:isVisible='isTopRightTriangleVisible')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Background from '@/views/zano/Background.vue';
import BottomLeftTriangle from '@/views/zano/BottomLeftTriangle.vue';
import TopRightTriangle from '@/views/zano/TopRightTriangle.vue';
import TopRightCurtain from '@/views/zano/TopRightCurtain.vue';
import BottomLeftCurtain from '@/views/zano/BottomLeftCurtain.vue';

@Component({
	components: {
		Background,
		BottomLeftTriangle,
		BottomLeftCurtain,
		TopRightTriangle,
		TopRightCurtain,
	},
})
export default class Zano extends Vue {
	public isBottomLeftCurtainVisible: boolean = false;
	public isTopRightCurtainVisible: boolean = false;
	public isBottomLeftTriangleVisible: boolean = false;
	public isTopRightTriangleVisible: boolean = false;
	public isBackgroundVisible: boolean = false;

	public mounted(): void {
		this.isBackgroundVisible = true;
	}

	public toggleCurtains(): void {
		this.closeCurtains();
	}

	public startTriangles(): void {
		console.log('triangles');
		this.isBottomLeftTriangleVisible = true;
		this.isTopRightTriangleVisible = true;
	}

	public load(): void {
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
@import 'colors.scss';
@import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Permanent+Marker');

.zano {
	border: 1px solid;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40rem;
}

body {
	background: radial-gradient(black, #333);
	background-attachment: fixed;
	width: 100%;
	height: 100%;
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
