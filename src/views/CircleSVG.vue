<template lang="pug">
circle(:cx='x' :cy='y' :r='r' :fill='color' :filter='shadow' class="base")
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

	public el: HTMLElement = this.$el;

	public mounted(): void {
		this.el = this.$el;
		this.move();
	}

	public move(): void {
		console.log(this.el);
		this.el.classList.add('toPoint');
	}
}
</script>

<style lang="scss">
.base {
	transition: all 10.5s ease-in;
}
.toPoint {
	transform: translateX(-100px) translateY(-100px);
}
</style>
