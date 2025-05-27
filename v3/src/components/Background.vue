<template>
    <transition @after-enter="introDone" enter-active-class="intro">
        <div class="background" v-if="isVisible">
            <slot />
        </div>
    </transition>
</template>

<script setup lang="ts">
defineProps<{
    isVisible: boolean;
    introDone: () => void;
}>();

</script>

<style>
/* @import '../styles/colors.scss';  */

.background {
    position: absolute;
    display: flex;
    justify-content: center;
    left: calc(50% - 20rem);
    width: 40rem;
    height: 20rem;
    margin-top: 10rem;

    background: linear-gradient(var(--neon-pink-alpha-70), var(--electric-blue-alpha-70));
    overflow: hidden;
    box-shadow: 0 0 2rem var(--neon-pink-alpha-70);

    border-radius: 0.4rem;
}

@media screen and (max-width: 600px) {
    .background {
        width: 24rem;
    }
}

.intro {
    animation: intro .5s linear;
}

@keyframes intro {
    0% {
        transform: perspective(500px) translateZ(300px);
        height: 1rem;
        width: 0;
        opacity: 0;
    }

    20% {
        height: 1rem;
        opacity: 1;
        width: 0;
    }

    50% {
        height: 1rem;
        width: 40rem;
    }

    100% {
        height: 20rem;
        width: 40rem;
        transform: translateZ(0);
    }
}
</style>
