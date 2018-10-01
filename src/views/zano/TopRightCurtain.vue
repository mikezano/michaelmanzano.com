<template lang="pug">
transition(
	leave-active-class='leave'
	enter-active-class='enter'
)
	.trc(v-if='isVisible')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TopRightCurtain extends Vue {
	@Prop()
	public isVisible!: boolean;
}
</script>

<style lang="scss" scoped>
@import 'colors.scss';
.trc {
	position: absolute;
	top: 0;
	right: 0;
	width: 77.5%;
	height: 100%;
	background-color: green;
	background: linear-gradient(45deg, $blueL1, $blueD2);
	//shape-outside: polygon(0 0, 100% 100%, 0 100%);
	clip-path: polygon(0 0, 100% 0, 100% 100%, 72.5% 100%);
}

.leave {
	animation: leave 0.5s $motion;
}

@keyframes leave {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(20rem);
	}
}

.enter {
	animation: enter 0.5s $motion;
}

@keyframes enter {
	0% {
		transform: translateX(20rem);
	}
	100% {
		transform: translateX(0);
	}
}
</style>
