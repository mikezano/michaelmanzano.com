<template lang="pug">
.blt
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BottomLeftTriangle extends Vue {}
</script>

<style lang="scss" scoped>
@import 'colors.scss';
.blt {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 200px;
	height: 200px;
	background: linear-gradient(45deg, $pink 20%, white);
	shape-outside: polygon(0 0, 100% 100%, 0 100%);
	clip-path: polygon(0 0, 100% 100%, 0 100%);
}
</style>
