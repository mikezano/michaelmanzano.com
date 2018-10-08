<template lang="pug">
.find-me(v-if="isVisible")
	.find-me__title Find me here:
	.find-me__links
		a.find-me__item(:href='link.url' target='_blank' v-for="link in links" :class="{'in-front' : isInFront}")
			img(:src="link.icon")
			span {{link.name}}
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ILink } from '@/models/IModels';
@Component
export default class FindMe extends Vue {
	@Prop()
	public isVisible: boolean = false;
	@Prop()
	public isInFront: boolean = false;

	public links: ILink[] = [
		{
			url: 'https://codepen.io/_zan0/',
			name: 'Code Pen',
			icon: require('../assets/codepen.png'),
		},
		{
			url: 'https://twitter.com/_zan0',
			name: 'Twitter',
			icon: require('../assets/twitter.svg'),
		},
		{
			url: 'https://www.instagram.com/mikezan0/',
			name: 'Instagram',
			icon: require('../assets/instagram.svg'),
		},
		{
			url: 'https://zan0.bandcamp.com/',
			name: 'Bandcamp',
			icon: require('../assets/bandcamp.png'),
		},
		{
			url: 'https://soundcloud.com/djzan0',
			name: 'Soundcloud',
			icon: require('../assets/soundcloud.svg'),
		},
	];
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
		width: 14rem;

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
