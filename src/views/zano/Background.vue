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
	public introDone!: Function;
}
</script>

<style lang="scss" scoped>
@import 'colors.scss';
.background {
	position: relative;
	width: 40rem;
	height: 20rem;
	//background-color: blue;
	background: linear-gradient($pink, lighten(blue, 20%));
	overflow: hidden;
	box-shadow: 0 0 2rem black;
}

.intro {
	animation: intro 1s $motion;
}

@keyframes intro {
	0% {
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
	}
}
</style>
