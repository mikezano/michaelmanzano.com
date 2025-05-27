<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Background from '../components/Background.vue'
import AnimatedGrid from '../components/AnimatedGrid.vue'
import BottomLeftCurtain from '../components/BottomLeftCurtain.vue'
import TopRightCurtain from '../components/TopRightCurtain.vue'
import BottomLeftNavigation from '../components/BottomLeftNavigation.vue'
import BottomLeftTriangle from '../components/BottomLeftTriangle.vue'
import TopRightTriangle from '../components/TopRightTriangle.vue'

const isBackgroundVisible = ref(false);
const isCurtainVisible = ref(true)
const load = () => {
    isCurtainVisible.value = false
}
const bringToFront = () => {
    isCurtainVisible.value = true
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
    <button class="test" @click="toggleCurtains">Hi</button>
    <Background :isVisible="isBackgroundVisible" :introDone="bringToFront">
        <BottomLeftCurtain :isVisible="isCurtainVisible" :onClosed="load" :afterOpened="bringToFront" />
        <BottomLeftTriangle :isVisible="true" :introDone="bringToFront" />
        <BottomLeftNavigation :isVisible="true" :onClick="getNextPage" />
        <TopRightCurtain :isVisible="isCurtainVisible" />
        <TopRightTriangle :isVisible="true" :introDone="bringToFront" />
    </Background>

</template>

<style scoped>
.test {
    margin-top: 2rem;
    position: absolute;
}
</style>