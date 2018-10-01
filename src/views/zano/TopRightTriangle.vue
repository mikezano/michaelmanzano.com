<template lang="pug">
.trt
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TopRightTriangle extends Vue {}
</script>

<style lang="scss" scoped>
@import 'colors.scss';
.trt {
	position: absolute;
	top: 0;
	right: 0;
	width: 200px;
	height: 200px;
	background-color: red;
	background: linear-gradient(-45deg, $pink, $pinkL1);
	shape-outside: polygon(0 0, 100% 0, 100% 100%);
	clip-path: polygon(0 0, 100% 0, 100% 100%);
}
</style>