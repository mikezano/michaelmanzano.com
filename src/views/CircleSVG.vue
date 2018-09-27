<template lang="pug">
transition(
	@after-enter='kill'
	@after-leave='restart'
	leave-active-class='move')
	circle(
		:cx='x'
		:cy='y'
		:r='r'
		:fill='color'
		:filter='shadow'
		class="base"
		v-if='isAlive'
	)
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

	public isAlive: boolean = true;

	public mounted(): void {
		this.kill();
	}

	public move(): void {
		setTimeout(() => {
			this.$el.classList.add('to-point');
		}, 100);
	}

	public kill(): void {
		this.isAlive = false;
	}

	public setup(): void {}

	public restart(): void {
		this.x = this.rand(500);
		this.y = this.rand(500);
		this.isAlive = true;
	}

	public rand(max: number): number {
		return Math.floor(Math.random() * max);
	}
}
</script>

<style lang="scss">
.base {
	transition: all 10.5s ease-in;
}
.move {
	animation: move 10s linear;
}
@keyframes move {
	from {
		transform: translateX(0px) translateY(0px);
	}
	to {
		transform: translateX(-500px) translateY(-500px);
	}
}
</style>
