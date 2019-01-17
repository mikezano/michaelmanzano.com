<template lang="pug">
transition(
	@after-enter='introDone'
	enter-active-class='intro')
	.background(v-if="isVisible")
		slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Background extends Vue {
	@Prop()
	public isVisible!: boolean;
	@Prop()
	public introDone!: () => void;
}
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';

.background {
	position: relative;
	width: 40rem;
	height: 20rem;
	//background-color: blue;
	background: linear-gradient($pink, lighten(blue, 20%));
	overflow: hidden;
	box-shadow: 0 0 2rem $pinkL1;
	border-radius: 0.4rem;
}
@media screen and (max-width: 600px) {
	.background {
		width: 24rem;
	}
}

.intro {
	animation: intro $duration $motion;
}

@keyframes intro {
	0% {
		transform: perspective(500px) translateZ(300px);
		height: 1rem;
		width: 0;
		opacity: 0;
	}

	20% {
		height: 1rem;
		opacity: 1;
		width: 0;
	}
	50% {
		height: 1rem;
		width: 40rem;
	}

	100% {
		height: 20rem;
		width: 40rem;
		transform: translateZ(0);
	}
}
</style>
