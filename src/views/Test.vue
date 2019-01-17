<template lang="pug">
#circle Zano
</template>



<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Test extends Vue {
	//https://vuejs.github.io/vetur/formatting.html
}
</script>

<style lang="scss">
#circle {
	width: 10rem;
	height: 10rem;
	border-radius: 5rem;
	background-image: radial-gradient(darken(lightblue, 20%), lightblue);
}
</style>
