<template lang="pug">
transition(
	leave-active-class='leave'
	enter-active-class='enter'
)
	.blc(v-if='isVisible')
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BottomLeftCurtain extends Vue {
	@Prop()
	public isVisible!: boolean;

	public mounted(): void {
		console.log(this.isVisible);
	}
}
</script>

<style lang="scss" scoped>
@import 'colors.scss';
.blc {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 77.5%;
	height: 100%;
	background-color: orange;
	//shape-outside: polygon(0 0, 100% 100%, 0 100%);
	background: linear-gradient(45deg, $blueD2 40%, white);
	clip-path: polygon(0 0, 27.5% 0, 100% 100%, 0 100%);
}

.leave {
	animation: leave 0.5s ease-in;
}

@keyframes leave {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-20rem);
	}
}
</style>
