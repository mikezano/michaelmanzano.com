<template lang="pug">
transition(
	leave-active-class='leave'
	enter-active-class='enter'
)
	.bln(v-if='isVisible')
		.bln__triangle
		p.bln__home(@click='navigate') Home
		p.bln__etc(@click='navigate') ETC
		p.bln__about(@click='navigate') About

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BottomLeftNavigation extends Vue {
	@Prop()
	public isVisible!: boolean;
	@Prop()
	public onClick!: (page:string)=>void;

	public navigate(): void {
		this.onClick('hi');
	}
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
	margin-top: 2rem;
	shape-outside: polygon(0 0, 100% 100%, 0 100%);
	//background: linear-gradient(45deg, $blueD2, $blueL1);
	//clip-path: polygon(0 0, 32% 0, 100% 100%, 0 100%);
	//shape-outside: polygon(0 0, 100% 100%, 0 100%);
	//clip-path: polygon(0 0, 100% 100%, 0 100%);

	&__triangle {
		//background: linear-gradient(black, white);
		shape-outside: polygon(0 0, 100% 0, 100% 100%);
		//clip-path: polygon(0 0, 100% 0, 100% 100%);
		width: $size;
		height: $size;
		float: right;
	}

	&__home {
		padding-top: 4rem;
	}

	&__home,
	&__about,
	&__etc {
		text-align: right;
	}
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
