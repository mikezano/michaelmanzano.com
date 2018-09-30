<template lang="pug">
.blt
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BottomLeftTriangle extends Vue {}
</script>

<style lang="scss" scoped>
.blt {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 200px;
	height: 200px;
	background-color: red;
	shape-outside: polygon(0 0, 100% 100%, 0 100%);
	clip-path: polygon(0 0, 100% 100%, 0 100%);
}
</style>
