<template lang="pug">
.find-me(v-if="isVisible")
	.find-me__title Find me here:
	.find-me__links
		a.find-me__link-item
			img.image(src='../assets/codepen.svg')
			div.title Code Pen
		//- a.find-me__item(href='https://codepen.io/_zan0/' target='_blank') Code Pen
		//- 	//img(src='../assets/codepen.svg')
		//- a.find-me__item(href='https://twitter.com/_zan0' target='_blank') Twitter
		//- 	//img(src='../assets/facebook.svg')
		//- a.find-me__item(href='https://www.instagram.com/mikezan0/' target='_blank') Instagram
		//- 	//img(src='../assets/instagram.svg')
		//- a.find-me__item(href='https://zan0.bandcamp.com/' target='_blank') BandCamp
		//- 	//img(src='../assets/soundcloud.svg')
		//- a.find-me__item(href='https://soundcloud.com/djzan0' target='_blank') SoundCloud
		//- 	//img(src='../assets/soundcloud.svg')
		//- a.find-me__item(href='' target='_blank') Facebook
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
	&__title,
	&__item {
		text-align: left;
		//margin-right: 3rem;
		display: inline-block;
	}
	&__title {
		font-size: 2rem;
		color: black;
	}
	&__item {
		width: 10rem;
		color: $pinkL3;
		font-weight: bold;
		font-size: 1.5rem;
		text-decoration: none;
	}

	&__link-item {
		display: flex;

		.image {
			width: 2rem;
			height: 2rem;
		}
		.title {
			color: white;
			width: 8rem;
		}
	}
}
</style>
