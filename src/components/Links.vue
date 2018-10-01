<template lang="pug">
.links
	a.links__item(href='https://codepen.io/_zan0/' target='_blank') Code Pen
	a.links__item(href='https://twitter.com/_zan0' target='_blank') Twitter
	a.links__item(href='https://www.instagram.com/mikezan0/' target='_blank') Instagram
	a.links__item(href='https://zan0.bandcamp.com/' target='_blank') BandCamp
	a.links__item(href='https://soundcloud.com/djzan0' target='_blank') SoundCloud
	a.links__item(href='' target='_blank') Facebook
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Links extends Vue {}
</script>

<style lang="scss" scoped>
.links {
	display: flex;
	flex-direction: column;
	&__item {
		color: white;
		font-weight: bold;
	}
}
</style>
