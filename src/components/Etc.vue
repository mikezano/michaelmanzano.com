<template lang="pug">
.etc(v-if="isVisible")
	| Software Engineer at Intel for 7+ years, Michael has dedicated much of his time learning .NET backends
	| and Javascript front ends. With a previous background in the video game industry, Michael has
	| developed a passion for the visual aspects of engineering and the ways they can be applied on the web
	| via CSS.  Always looking for the opportunity, Michael is eager to share his knowledge with others.
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Etc extends Vue {
	@Prop()
	public isVisible: boolean = false;
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';
.etc {
	color: white;
	margin-top: 1.5rem;
}
</style>
