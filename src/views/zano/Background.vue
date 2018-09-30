<template lang="pug">
transition(
	@after-enter='done'
	enter-active-class='intro')
	.background(v-if="isVisible")
		slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Background extends Vue {
	public isVisible: boolean = false;

	public mounted(): void {
		this.isVisible = true;
	}

	public done(): void {
		alert('done');
	}
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
}

.intro {
	animation: intro 1s ease-in;
}

@keyframes intro {
	0% {
		height: 0;
		width: 0;
		opacity: 0;
	}

	20% {
		opacity: 1;
	}
	50% {
		height: 0;
		width: 40rem;
	}

	100% {
		height: 20rem;
		width: 40rem;
	}
}
</style>
