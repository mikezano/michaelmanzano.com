<template lang="pug">
.blc
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TopRightCurtain extends Vue {}
</script>

<style lang="scss" scoped>
@import 'colors.scss';
.blc {
	position: absolute;
	top: 0;
	right: 0;
	width: 77.5%;
	height: 100%;
	background-color: green;
	//display: none;
	background: linear-gradient(-45deg, $blueD2, $blueL2);
	//shape-outside: polygon(0 0, 100% 100%, 0 100%);
	clip-path: polygon(0 0, 100% 0, 100% 100%, 72.5% 100%);
}
</style>
