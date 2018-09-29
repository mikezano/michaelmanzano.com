<template lang="pug">
transition(
	name='move'
	@after-enter='kill'
	@after-leave='restart')
	circle(
		:cx='x'
		:cy='y'
		:r='r'
		:fill='color'
		:filter='shadow'
		v-show='isAlive'
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
		//console.log('kill');
		// setTimeout(() => {
		this.isAlive = false;
		// }, this.rand(10000) + 1000);
	}

	public setup(): void {}

	public restart(): void {
		this.isAlive = true;
		console.log(this.$el);
		//debugger;
		//if (this.$el)
		//	this.$el.style.animationDuration = `${this.rand(1000).toString()}s`;
	}

	public rand(max: number): number {
		return Math.floor(Math.random() * max);
	}
}
</script>

<style lang="scss">
// .move {
// 	animation-name: move;
// 	animation-timing-function: ease-in;
// 	animation-duration: 10s;
// }

.move-leave-active {
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
