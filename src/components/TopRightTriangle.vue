<template lang="pug">
transition(
	enter-active-class='enter'
)
	.trt(v-if='isVisible')
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TopRightTriangle extends Vue {
	@Prop()
	public isVisible!: boolean;
	@Prop()
	public introDone!: () => void;
}
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

@media screen and (max-width: 600px) {
	.trt {
		display: none;
	}
}
$size: 16rem;
.trt {
	position: absolute;
	top: 0;
	right: 0;
	width: $size;
	height: $size;
	background-color: red;
	background: linear-gradient(45deg, white, $pink);
	shape-outside: polygon(0 0, 100% 0, 100% 100%);
	clip-path: polygon(0 0, 100% 0, 100% 100%);
}

.enter {
	animation: enter $duration $motion;
}

@keyframes enter {
	0% {
		transform: translateX(30rem);
	}
	100% {
		transform: translateX(0);
	}
}
</style>