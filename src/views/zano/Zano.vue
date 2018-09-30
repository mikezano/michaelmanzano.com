<template lang="pug">
.zano
	Background
		BottomLeftCurtain
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
export default class Zano extends Vue {}
</script>

<style lang="scss">
@import 'colors.scss';
@import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Permanent+Marker');

.zano {
	display: flex;
	justify-content: center;
}

body {
	background: radial-gradient(black, #333);
	background-attachment: fixed;
	width: 100%;
	height: 100%;
}
</style>
