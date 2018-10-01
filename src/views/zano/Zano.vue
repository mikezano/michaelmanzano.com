<template lang="pug">
.zano
	Background(:isVisible='isBackgroundVisible' :introDone='startCurtains')
		BottomLeftCurtain(:isVisible='isBottomLeftCurtainVisible')
		TopRightCurtain
		BottomLeftTriangle
		TopRightTriangle
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
	public isBottomLeftCurtainVisible: boolean = true;
	public isBackgroundVisible: boolean = false;

	public mounted(): void {
		this.isBackgroundVisible = true;
	}

	public startCurtains(): void {
		this.isBottomLeftCurtainVisible = false;
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
</style>
