<template>
    <transition @after-enter="afterEnter" enter-active-class="intro">
        <div class="background" v-if="isVisible">
            <slot />
        </div>
    </transition>
</template>

<script setup lang="ts">
defineProps<{
    isVisible: boolean;
    afterEnter: () => void;
}>();

</script>

<style>
/* @import '../styles/colors.scss';  */

.background {
    position: relative;

    margin: 0 auto;


    width: 40rem;
    height: 20rem;
    /* transform: translateY(10rem); */


    background: linear-gradient(var(--neon-pink-alpha-70), var(--electric-blue-alpha-70));
    overflow: hidden;
    /* box-shadow: 0 0 1rem var(--neon-pink-alpha-70); */

    /* Multiple layered shadows for smoother effect */
    box-shadow:
        0 0 2rem 1rem var(--neon-pink-alpha-20),
        /* Wider spread for outer glow */
        0 0 1rem -0.2rem var(--neon-pink-alpha-50);
    /* Negative spread for tighter inner glow */

    border-radius: 0.4rem;
}

@media screen and (max-width: 600px) {
    .background {
        width: 24rem;
    }
}

.intro {
    animation: intro 1s var(--motion);
}

@keyframes intro {
    0% {
        /* transform: perspective(500px) translateZ(300px); */
        height: 1rem;
        width: 0;
        opacity: 0;
        transform: translateY(0rem);

    }

    20% {
        height: 1rem;
        opacity: 1;
        width: 0;
        transform: translateY(10rem);
    }

    50% {
        height: 1rem;
        width: 40rem;
        transform: translateY(10rem);
    }

    100% {
        height: 20rem;
        width: 40rem;
        transform: translateY(0);

    }
}
</style>
