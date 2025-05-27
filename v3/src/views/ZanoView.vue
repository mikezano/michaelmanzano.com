<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Background from '../components/Background.vue'
import AnimatedGrid from '../components/AnimatedGrid.vue'
import BottomLeftCurtain from '../components/BottomLeftCurtain.vue'
import TopRightCurtain from '../components/TopRightCurtain.vue'
import BottomLeftNavigation from '../components/BottomLeftNavigation.vue'
import BottomLeftTriangle from '../components/BottomLeftTriangle.vue'
import TopRightTriangle from '../components/TopRightTriangle.vue'
import Logo from '../components/Logo.vue'

const isBackgroundVisible = ref(false);
const areTriangesVisible = ref(false);
const areCurtainsVisible = ref(false);
const isLogoVisible = ref(true);
const load = () => {
    isCurtainVisible.value = false
}
const backgroundIntroDone = () => {
    areTriangesVisible.value = true;
    isLogoVisible.value = true;
}
const getNextPage = () => {
    // Logic to navigate to the next page
    console.log('Navigating to the next page...')
}

const toggleCurtains = () => {
    console.log('Toggling curtains...');
    isCurtainVisible.value = !isCurtainVisible.value
}

onMounted(() => {
    isBackgroundVisible.value = true;
    //bringToFront();
});
</script>

<template>
    <AnimatedGrid />
    <Logo :isVisible="isLogoVisible" />
    <Background :isVisible="isBackgroundVisible" :introDone="backgroundIntroDone">
        <BottomLeftCurtain :isVisible="false" :onClosed="load" :afterOpened="bringToFront" />
        <BottomLeftTriangle :isVisible="areTriangesVisible" :introDone="bringToFront" />
        <BottomLeftNavigation :isVisible="true" :onClick="getNextPage" />
        <TopRightCurtain :isVisible="false" />
        <TopRightTriangle :isVisible="areTriangesVisible" :introDone="bringToFront" />
    </Background>

</template>

<style scoped>
.test {
    margin-top: 2rem;
    position: absolute;
}
</style>