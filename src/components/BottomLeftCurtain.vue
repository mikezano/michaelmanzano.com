<template lang="pug">
transition(
	leave-active-class='leave'
	enter-active-class='enter'
	@after-enter='onClosed'
)
	.blc(v-if='isVisible')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BottomLeftCurtain extends Vue {
	@Prop()
	public isVisible!: boolean;
	@Prop()
	public onClosed!: () => void;
}
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';
.blc {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 75%;
	height: 100%;
	background-color: orange;
	//shape-outside: polygon(0 0, 100% 100%, 0 100%);
	background: linear-gradient(45deg, $blueD2, $blueL1);
	clip-path: polygon(0 0, 32% 0, 100% 100%, 0 100%);
}

.leave {
	animation: leave $duration $motion;
}

@keyframes leave {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-20rem);
	}
}

.enter {
	animation: enter 0.5s $motion;
}

@keyframes enter {
	0% {
		transform: translateX(-20rem);
	}
	100% {
		transform: translateX(0);
	}
}
</style>
