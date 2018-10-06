<template lang="pug">
.etc(v-if="isVisible")
    | Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    | In non libero eget ligula volutpat sollicitudin. In hac habitasse platea dictumst.
    | Phasellus vehicula, risus nec hendrerit tristique, elit dui lacinia mauris, ut porta erat nisl eget lacus.
    | Donec vestibulum, lacus ut fermentum dapibus, est metus feugiat ligula,
    | ut maximus ex lectus vitae risus. Vivamus auctor, metus sagittis 
    | fermentum posuere, ipsum arcu tristique ex, ut fringilla neque tortor nec felis.
    | Nam interdum rhoncus massa at consectetur. Quisque enim dui, vestibulum sit amet libero nec, efficitur maximus nulla.
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Etc extends Vue {
	@Prop() public isVisible: boolean = false;
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';
.etc {
    color:white;
}
</style>
