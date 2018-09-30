<template lang="pug">
.blc
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BottomLeftCurtain extends Vue {}
</script>

<style lang="scss" scoped>
.blc {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 77.5%;
	height: 100%;
	background-color: orange;
	//shape-outside: polygon(0 0, 100% 100%, 0 100%);
	clip-path: polygon(0 0, 27.5% 0, 100% 100%, 0 100%);
}
</style>
