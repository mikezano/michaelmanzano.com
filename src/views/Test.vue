<template lang="pug">
	svg(height='800' width='800')
		defs
			SVGRadialGradient(:id="'violet'",	:colorFrom="'#9400D3'" :colorTo="'#7200a3'")
			SVGRadialGradient(:id="'indigo'",	:colorFrom="'#4B0082'" :colorTo="'#410070'")
			SVGRadialGradient(:id="'blue'",		:colorFrom="'#0000FF'" :colorTo="'#0000c7'")
			SVGRadialGradient(:id="'green'",	:colorFrom="'#00FF00'" :colorTo="'#0dc200'")
			SVGRadialGradient(:id="'yellow'",	:colorFrom="'#FFFF00'" :colorTo="'#b8b800'")
			SVGRadialGradient(:id="'orange'",	:colorFrom="'#FF7F00'" :colorTo="'#b85c00'")
			SVGRadialGradient(:id="'red'",		:colorFrom="'#FF0000'" :colorTo="'#9e0000'")
			SVGDropShadow(:id="'dropShadow'")
		rect(width='100%' height='100%' fill='#ddd')
		CircleSVG(
			:x='c.x'
			:y='c.y'
			:r='c.r'
			:fill='c.color'
			:filter='c.dropShadow'
			v-for='c in circles'
		)
</template>



<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CircleSVG from '@/views/CircleSVG.vue';
import SVGRadialGradient from '@/views/SVGRadialGradient.vue';
import SVGDropShadow from '@/views/SVGDropShadow.vue';
import ISVGCircle from '@/models/ISVGCircle';
import { setInterval } from 'timers';

@Component({
	components: {
		CircleSVG,
		SVGRadialGradient,
		SVGDropShadow,
	},
})
export default class Test extends Vue {
	private shadow: string = 'url(#dropShadow)';
	private circles: ISVGCircle[] = [];
	private colors: string[] = [
		'violet',
		'indigo',
		'blue',
		'green',
		'yellow',
		'orange',
		'red',
	];

	public mounted() {
		setInterval(() => {
			this.generateCircles();
		}, 1000);
	}

	public generateCircles(): void {
		for (let i = 0; i < 10; i++) {
			this.circles.push({
				x: this.rand(800),
				y: this.rand(800),
				r: this.rand(30),
				color: `url(#${this.randColor()})`,
				dropShadow: 'url(#dropShadow)',
			});
		}
	}
	public rand(max: number): number {
		return Math.floor(Math.random() * max);
	}

	public randColor(): string {
		const max = this.colors.length;
		const numb = this.rand(max);
		return this.colors[numb];
	}
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Permanent+Marker');

.test {
	font-size: 3rem;
	&__parent {
		border: 0.1rem solid blue;
	}

	&__child-a {
		font-family: 'Gloria Hallelujah', cursive;
	}

	&__child-b {
		font-family: 'Permanent Marker', cursive;
	}
}
</style>
