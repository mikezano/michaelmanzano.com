<template lang="pug">
transition(
	@after-enter='kill'
	@after-leave='restart'
	leave-active-class='move')
	circle(
		:cx='_x'
		:cy='y'
		:r='r'
		:fill='color'
		:filter='shadow'
		v-if='isAlive'
	)
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CircleSVG extends Vue {
	@Prop()
	public x!: number;
	@Prop()
	public y!: number;
	@Prop()
	public r!: number;
	@Prop()
	public color!: string;
	@Prop()
	public shadow!: string;

	get _x(): string {
		return this.x.toString();
	}

	public isAlive: boolean = true;

	public copy(): void {}
	public mounted(): void {
		this.kill();
	}

	public move(): void {
		setTimeout(() => {
			this.$el.classList.add('to-point');
		}, 100);
	}

	public kill(): void {
		console.log('kill');
		setTimeout(() => {
			//this.isAlive = false;
		}, this.rand(1000));
	}

	public setup(): void {}

	public restart(): void {
		//this.x = this.rand(500);
		//this.y = this.rand(500);
		this.isAlive = true;
		//debugger;
		//if (this.$el)
		//	this.$el.style.animationDuration = `${this.rand(1000).toString()}s`;
	}

	public rand(max: number): number {
		return Math.floor(Math.random() * max);
	}
}
</script>

<style lang="scss" scope>
.move {
	animation-name: move;
	animation-timing-function: ease-in;
	animation-duration: 10s;
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
