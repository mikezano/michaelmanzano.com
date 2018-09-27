<template lang="pug">
rect(:x='x' :y='y' :width='width' :height='height' :fill='color' :filter='shadow')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CircleSVG extends Vue {
	@Prop() public x!: number;
	@Prop() public y!: number;
	@Prop() public width!: number;
	@Prop() public height!: number;
	@Prop() public color!: string;
	@Prop() public shadow!: string;
}
</script>

