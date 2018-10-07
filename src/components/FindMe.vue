<template lang="pug">
.find-me(v-if="isVisible")
	.find-me__title Find me here:
	.find-me__links

		a.find-me__item(href='https://codepen.io/_zan0/' target='_blank')
			img(src='../assets/codepen.png')
			span Code Pen
		a.find-me__item(href='https://twitter.com/_zan0' target='_blank')
			img(src='../assets/twitter.svg')
			span Twitter
		a.find-me__item(href='https://www.instagram.com/mikezan0/' target='_blank')
			img(src='../assets/instagram.svg')
			span Instagram
		a.find-me__item(href='https://zan0.bandcamp.com/' target='_blank')
			img(src='../assets/bandcamp.png')
			span BandCamp
		a.find-me__item(href='https://soundcloud.com/djzan0' target='_blank')
			img(src='../assets/soundcloud.svg')
			span SoundCloud
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
	}

	&__links {
		margin-top: 1rem;
	}
	&__title {
		font-size: 2rem;
		color: black;
	}
	&__item {
		color: $pinkL3;
		font-weight: bold;
		font-size: 1.5rem;
		text-decoration: none;
		display: inline-flex;
		height: 2rem;
		border-bottom: 0.1rem solid transparent;
		padding-bottom: 0.2rem;
		margin-bottom: 0.8rem;

		img {
			width: 2rem;
			height: 2rem;
		}
		span {
			width: 8rem;
			margin-left: 0.5rem;
		}

		&:hover {
			transition: border-bottom 0.2s ease-in-out;
			border-bottom: 0.1rem solid $pinkL1;
		}
	}
}
</style>
