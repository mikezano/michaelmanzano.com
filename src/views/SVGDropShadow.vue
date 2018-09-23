<template lang="pug">
	filter(:id='id' x='-20%' y='-20%' width='200%' height='200%')
		feOffset(result='offOut' in='SourceGraphic' dx='2' dy='2')
		feGaussianBlur(result='blurOut' in='offOut' stdDeviation='4')
		feBlend(in='SourceGraphic' in2='blurOut' mode='normal')
	//filter#f1(x='-20%' y='-20%' width='200%' height='200%')
		feOffset(result='offOut' in='SourceGraphic' dx='2' dy='2')
		feGaussianBlur(result='blurOut' in='offOut' stdDeviation='4')
		feBlend(in='SourceGraphic' in2='blurOut' mode='normal')
</template>



<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SVGDropShadow extends Vue {
	@Prop() private id!: string;
}
</script>