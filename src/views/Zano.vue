<template lang="pug">
div
	.zano
		Background(:isVisible='isBackgroundVisible' :introDone='startTriangles')
			.fake-blt
			.fake-trt
			FindMe(:isVisible='isFindMeVisible' :isInFront='isinFront')
			Etc(:isVisible='isEtcVisible' )
			BottomLeftCurtain(:isVisible='isBottomLeftCurtainVisible' :onClosed='load' :afterOpened='bringToFront')
			TopRightCurtain(:isVisible='isTopRightCurtainVisible')
			BottomLeftTriangle(:isVisible='isBottomLeftTriangleVisible' :introDone='closeCurtains')
			BottomLeftNavigation(:isVisible='isBottomLeftNavigationVisible' :onClick='getNextPage')
			TopRightTriangle(:isVisible='isTopRightTriangleVisible')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Background from '@/components/Background.vue';
import BottomLeftTriangle from '@/components/BottomLeftTriangle.vue';
import TopRightTriangle from '@/components/TopRightTriangle.vue';
import TopRightCurtain from '@/components/TopRightCurtain.vue';
import BottomLeftCurtain from '@/components/BottomLeftCurtain.vue';
import BottomLeftNavigation from '@/components/BottomLeftNavigation.vue';
import FindMe from '@/components/FindMe.vue';
import Etc from '@/components/Etc.vue';

@Component({
	components: {
		Background,
		BottomLeftTriangle,
		BottomLeftNavigation,
		BottomLeftCurtain,
		TopRightTriangle,
		TopRightCurtain,
		FindMe,
		Etc,
	},
})
export default class Zano extends Vue {
	public isBottomLeftCurtainVisible: boolean = false;
	public isBottomLeftNavigationVisible: boolean = false;
	public isTopRightCurtainVisible: boolean = false;
	public isBottomLeftTriangleVisible: boolean = false;
	public isTopRightTriangleVisible: boolean = false;
	public isBackgroundVisible: boolean = false;
	public isFindMeVisible: boolean = false;
	public isEtcVisible: boolean = false;
	public nextPageName: string = '';
	public isInFront: boolean = false;

	public mounted(): void {
		this.isBackgroundVisible = true;
	}

	public bringToFront(): void {
		this.isInFront = true;
	}

	public setNextPage(): void {

		this.isFindMeVisible = false;
		this.isEtcVisible = false;
		this.isInFront = false;

		switch (this.nextPageName) {
			case 'FindMe':
				this.isFindMeVisible = true;
				break;
			case 'Etc':
				this.isEtcVisible = true;
				break;
			default:
				this.isFindMeVisible = true;
				break;
		}

		this.openCurtains();
	}

	public getNextPage(page: string): void {
		this.nextPageName = page;
		this.closeCurtains();
	}

	public toggleCurtains(): void {
		this.closeCurtains();
	}

	public startTriangles(): void {
		this.isBottomLeftTriangleVisible = true;
		this.isTopRightTriangleVisible = true;
	}

	public load(): void {
		if (this.nextPageName !== '') {
			this.setNextPage();
		} else {
			this.isFindMeVisible = true;
			this.isBottomLeftNavigationVisible = true;
			this.openCurtains();
		}
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
$size: 20rem;

.fake-blt,
.fake-trt {
	position: relative;
	width: $size;
	height: $size;
	background-color: none;
}

.fake-blt {
	float: left;
	bottom: 0;
	left: 0;
	shape-outside: polygon(0 0, 100% 100%, 0 100%);
	clip-path: polygon(0 0, 100% 100%, 0 100%);
}

.fake-trt {
	float: right;
	top: 0;
	right: 0;
	shape-outside: polygon(0 0, 100% 100%, 100% 0);
	clip-path: polygon(0 0, 100% 100%, 100% 0);
}
</style>
