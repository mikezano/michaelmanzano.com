<template lang="pug">
transition(
	name='move'
	@after-enter='kill'
	@after-leave='restart')
	circle(
		:cx='x'
		:cy='y'
		:r='r'
		v-show='isAlive'
	)
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { setTimeout } from 'timers';

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

	public isAlive: boolean = true;

	public mounted(): void {
		//this.$el.style.webkitAnimationName
	}

	public move(): void {
		setTimeout(() => {
			this.$el.classList.add('to-point');
		}, 100);
	}

	public kill(): void {
		setTimeout(() => {
			this.isAlive = false;
		}, this.rand(10000));
	}

	public restart(): void {
		this.isAlive = true;
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
