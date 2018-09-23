<template lang="pug">
circle(:cx='x' :cy='y' :r='r' :fill='color' :filter='shadow')
//Example
//circle(cx='200' cy='70' r='50' fill='url(#z)' filter="url(#f1)")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CircleSVG extends Vue {
	@Prop() public x!: number;
	@Prop() public y!: number;
	@Prop() public r!: number;
	@Prop() public color!: string;
	@Prop() public shadow!: string;
}
</script>