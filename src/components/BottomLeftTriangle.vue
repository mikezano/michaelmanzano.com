<template lang="pug">
transition(
	@after-enter='introDone'
	enter-active-class='enter'
)
	.blt(v-if='isVisible')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BottomLeftTriangle extends Vue {
	@Prop()
	public isVisible!: boolean;
	@Prop()
	public introDone!: Function;
}
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';
$size:16rem;
.blt {
	position: absolute;
	bottom: 0;
	left: 0;
	width: $size;
	height: $size;
	background: linear-gradient(45deg, $pink, white);
	shape-outside: polygon(0 0, 100% 100%, 0 100%);
	clip-path: polygon(0 0, 100% 100%, 0 100%);
}

.enter {
	animation: enter $duration $motion;
}

@keyframes enter {
	0% {
		transform: translateX(-30rem);
	}
	100% {
		transform: translateX(0);
	}
}
</style>
