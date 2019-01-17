<template lang="pug">
transition(
	leave-active-class='leave'
	enter-active-class='enter'
)
	.bln(v-if='isVisible')
		.bln__triangle
		p.bln__find-me(@click="navigate('FindMe')") Find Me
		p.bln__etc(@click="navigate('Etc')") Etc

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BottomLeftNavigation extends Vue {
	@Prop()
	public isVisible!: boolean;
	@Prop()
	public onClick!: (page: string) => void;

	public navigate(page: string): void {
		this.onClick(page);
	}
}
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

@media screen and (max-width: 600px) {
	.bln {
		display: none;
	}
}

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

	&__find-me {
		padding-top: 6rem;
	}

	&__find-me,
	&__etc {
		text-align: right;
		font-size: 1.4rem;
		//position: relative;
		//width: auto;
		transition: all 0.2s ease-in-out;

		&:hover {
			color: $blueD2;
			cursor: pointer;
			transform: translateY(-0.1rem);
			text-shadow: 0.2rem 0.2rem 0.2rem $pink;
		}

		// &:hover::before {
		// 	transition: all 0.2s ease-in-out;
		// 	border-bottom: 0.3rem solid $pinkL1;
		// 	width: 100%;
		// }

		// &::before {
		// 	content: '';
		// 	position: absolute;
		// 	padding-bottom: 0.2rem;
		// 	height: 2rem;
		// 	width: 0;
		// 	border-bottom: 0.3rem solid white;
		// }
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
