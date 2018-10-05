<template lang="pug">
transition(
	leave-active-class='leave'
	enter-active-class='enter'
)
	.bln(v-if='isVisible')
		ul
			li(@click='onClick') ABC
			li DEF
			li GHI
			li JKL
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BottomLeftNavigation extends Vue {
	@Prop()
	public isVisible!: boolean;
	@Prop()
	public onClick!: Function;
}
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';
$size: 16rem;
.bln {
	position: absolute;
	bottom: 0;
	left: 0;
	width: $size;
	height: $size;
	text-align: left;
	color: white;

	shape-outside: polygon(0 0, 100% 100%, 0 100%);
	//background: linear-gradient(45deg, $blueD2, $blueL1);
	//clip-path: polygon(0 0, 32% 0, 100% 100%, 0 100%);
	//shape-outside: polygon(0 0, 100% 100%, 0 100%);
	//clip-path: polygon(0 0, 100% 100%, 0 100%);
}

ul {
	margin-top: 5rem;
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
