<template lang="pug">
.logo ZANO
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Logo extends Vue {
	@Prop()
	public isVisible: boolean = false;
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';
@import url(https://fonts.googleapis.com/css?family=Audiowide);
.logo {
	color: white;
	font-family: 'Audiowide';
	font-size: 5rem;
	animation: glow 3s ease-in infinite;

	-webkit-text-fill-color: transparent;
	-webkit-text-stroke: 0.5px #8fdcea;
	//-webkit-background-clip: text;
}

@keyframes glow {
	0% {
		filter: drop-shadow(0 0 1rem white);
	}
	50% {
		filter: drop-shadow(0 0 1.2rem white);
	}
	100% {
		filter: drop-shadow(0 0 1rem white);
	}
}
</style>
