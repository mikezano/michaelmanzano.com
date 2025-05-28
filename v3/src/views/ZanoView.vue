<script setup lang="ts">
import About from '@/components/About.vue'
import FindMe from '@/components/FindMe.vue'
import { onMounted, ref } from 'vue'
import AnimatedGrid from '../components/AnimatedGrid.vue'
import Background from '../components/Background.vue'
import BottomLeftCurtain from '../components/BottomLeftCurtain.vue'
import BottomLeftNavigation from '../components/BottomLeftNavigation.vue'
import BottomLeftTriangle from '../components/BottomLeftTriangle.vue'
import Logo from '../components/Logo.vue'
import TopRightCurtain from '../components/TopRightCurtain.vue'
import TopRightTriangle from '../components/TopRightTriangle.vue'

const isBackgroundVisible = ref(false);
const isLogoVisible = ref(true);
const areTriangesVisible = ref(false);
const isNavigationVisible = ref(false);
const areCurtainsVisible = ref(false);
const isFindMeVisible = ref(false);
const isInFront = ref(false);
const isAboutVisible = ref(false);
const nextPage = ref('FindMe');

onMounted(() => {
    isBackgroundVisible.value = true;

});
const handleBackgroundAfterEnter = () => {
    areTriangesVisible.value = true;
    isLogoVisible.value = true;
}
const handleTriangleAfterEnter = () => {
    isNavigationVisible.value = true;
}
const handleNavigationAfterEnter = () => {
    areCurtainsVisible.value = true;
}
// a.k.a Curtains are 'closed'
const handleCurtainAfterEnter = () => {
    loadNextPage();
    areCurtainsVisible.value = false;
}
// a.k.a Curtains are 'opened'
const handleCurtainAfterLeave = () => {
    if (nextPage.value === 'FindMe')
        isInFront.value = true;
}

const setNextPage = (page: string) => {
    nextPage.value = page;
    isInFront.value = false;
    areCurtainsVisible.value = true;
}

const loadNextPage = () => {
    isFindMeVisible.value = false;
    isAboutVisible.value = false;


    switch (nextPage.value) {
        case 'FindMe':
            isFindMeVisible.value = true;
            break;
        case 'About':
            isAboutVisible.value = true;
            break;
    }
}


</script>

<template>
    <AnimatedGrid />
    <Logo :isVisible="isLogoVisible" />
    <Background :isVisible="isBackgroundVisible" :afterEnter="handleBackgroundAfterEnter">
        <div class="fake-blt"></div>
        <div class="fake-trt"></div>
        <FindMe :isVisible="isFindMeVisible" :isInFront="isInFront" />
        <About :isVisible="isAboutVisible" />
        <BottomLeftCurtain :isVisible="areCurtainsVisible" :afterEnter="handleCurtainAfterEnter"
            :afterLeave="handleCurtainAfterLeave" />
        <BottomLeftTriangle :isVisible="areTriangesVisible" :afterEnter="handleTriangleAfterEnter" />
        <BottomLeftNavigation :isVisible="isNavigationVisible" :afterEnter="handleNavigationAfterEnter"
            :onClick="setNextPage" />
        <TopRightCurtain :isVisible="areCurtainsVisible" />
        <TopRightTriangle :isVisible="areTriangesVisible" />
    </Background>

</template>

<style scoped>
.fake-blt,
.fake-trt {
    --size: 20rem;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: none;
}

.fake-blt {
    float: left;
    bottom: 0;
    left: 0;
    shape-outside: polygon(0 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 100%, 0 100%);

}

.fake-trt {
    float: right;
    top: 0;
    right: 0;
    shape-outside: polygon(0 0, 100% 100%, 100% 0);
    clip-path: polygon(0 0, 100% 100%, 100% 0);
}

/* Example of letter spreading */
.spread-text {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    width: 100%;
    text-transform: uppercase;
    font-size: 2rem;
    color: var(--neon-pink);
    margin: 1rem 0;
}

/* Split each letter into its own element for grid */
.spread-text>span {
    display: inline-block;
}

@media screen and (max-width: 600px) {

    .fake-blt,
    .fake-trt {
        display: none;
    }

    .zano {
        margin-top: -6rem;
    }
}
</style>