<template lang="pug">
.zano
	.zano__background
		BottomLeftCurtain
		TopRightCurtain
		BottomLeftTriangle
		TopRightTriangle
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BottomLeftTriangle from '@/views/zano/BottomLeftTriangle.vue';
import TopRightTriangle from '@/views/zano/TopRightTriangle.vue';
import TopRightCurtain from '@/views/zano/TopRightCurtain.vue';
import BottomLeftCurtain from '@/views/zano/BottomLeftCurtain.vue';

@Component({
	components: {
		BottomLeftTriangle,
		BottomLeftCurtain,
		TopRightTriangle,
		TopRightCurtain,
	},
})
export default class Zano extends Vue {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Permanent+Marker');

.zano {
	display: flex;
	justify-content: center;

	&__background {
		position: relative;
		width: 40rem;
		height: 20rem;
		background-color: blue;
	}
}
</style>
