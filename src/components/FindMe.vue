<template lang="pug">
.find-me(v-if="isVisible")
	.find-me__title Find me here:
	.find-me__links
		a.find-me__item(
			v-for="link in links"
			:href='link.url'
			:class="{'in-front' : isInFront}"
			target='_blank' 
		)
			img(:src="link.icon")
			span {{link.name}}
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ILink } from "@/models/IModels";
@Component
export default class FindMe extends Vue {
	@Prop()
	public isVisible: boolean = false;
	@Prop()
	public isInFront: boolean = false;

	public links: ILink[] = [
		{
			url: "https://codepen.io/_zan0/",
			name: "Code Pen",
			icon: require("../assets/codepen.png")
		},
		{
			url: "https://twitter.com/_zan0",
			name: "Twitter",
			icon: require("../assets/twitter.svg")
		},
		{
			url: "https://www.instagram.com/mikezan0/",
			name: "Instagram",
			icon: require("../assets/instagram.svg")
		},
		{
			url: "https://zan0.bandcamp.com/",
			name: "Bandcamp",
			icon: require("../assets/bandcamp.png")
		},
		{
			url: "https://soundcloud.com/djzan0",
			name: "Soundcloud",
			icon: require("../assets/soundcloud.svg")
		}
	];
}
</script>

<style lang="scss" scoped>
@import "../styles/colors";

.in-front {
	position: relative;
	z-index: 1;
}
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
		display: inline-flex;
		position: relative;
		text-decoration: none;
		margin-bottom: 1rem;
		margin-left: 2rem;

		img {
			width: 2rem;
			height: 2rem;
		}
		span {
			font-size: 1.7rem;
			height: 2rem;
			width: auto;
			margin-left: 0.5rem;
		}

		&:hover::before {
			transition: all 0.2s ease-in-out;
			border-bottom: 0.3rem solid $pinkL1;
			width: 100%;
		}
	}
	&__item::before {
		content: "";
		position: absolute;
		padding-bottom: 0.2rem;
		height: 2rem;
		width: 0;
		border-bottom: 0.3rem solid white;
	}
}

@media screen and (max-width: 600px) {
	.find-me__title {
		display: none;
	}
}
</style>
