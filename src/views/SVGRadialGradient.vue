<template lang="pug">
	radialGradient(:id='id' cx='50%' cy='50%' r='50%' fx='50%' fy='50%')
		stop(offset='0%' :style="'stop-color:'+ colorFrom +';stop-opacity:1'")
		stop(offset='100%' :style="'stop-color:'+ colorTo +';stop-opacity:1'")

	// Example
	//radialGradient#grad1(cx='50%' cy='50%' r='50%' fx='50%' fy='50%')
		stop(offset='0%' style='stop-color:#0071c5;stop-opacity:1')
		stop(offset='100%' style='stop-color:#004b85;stop-opacity:1')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CircleSVG from '@/views/CircleSVG.vue';

@Component
export default class SVGRadialGradient extends Vue {
	@Prop() private id!: string;
	@Prop() private colorFrom!: string;
	@Prop() private colorTo!: string;
}
</script>