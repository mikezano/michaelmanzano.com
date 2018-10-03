<template lang="pug">
.find-me(v-if="isVisible")
	.find-me__title Find me here:
	.find-me__links
		a.find-me__item(href='https://codepen.io/_zan0/' target='_blank') Code Pen
			//img(src='../assets/codepen.svg')
		a.find-me__item(href='https://twitter.com/_zan0' target='_blank') Twitter
			//img(src='../assets/facebook.svg')
		a.find-me__item(href='https://www.instagram.com/mikezan0/' target='_blank') Instagram
			//img(src='../assets/instagram.svg')
		a.find-me__item(href='https://zan0.bandcamp.com/' target='_blank') BandCamp
			//img(src='../assets/soundcloud.svg')
		a.find-me__item(href='https://soundcloud.com/djzan0' target='_blank') SoundCloud
			//img(src='../assets/soundcloud.svg')
		a.find-me__item(href='' target='_blank') Facebook
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FindMe extends Vue {
	@Prop()
	public isVisible: boolean = false;
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';
.find-me {
	&__title {
		font-size: 2rem;
		text-align: left;
		color: black;
	}
	&__item {
		color: $pinkL3;
		font-weight: bold;
		font-size: 1.5rem;
		display: block;
		text-align: left;
	}
}
</style>
