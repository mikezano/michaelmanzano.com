<template>
    <div class="background"></div>
</template>

<script setup lang="ts">


</script>

<style>
/* @import '../styles/colors.scss';  */

.background {
    position: relative;
    width: 40rem;
    height: 20rem;

    background: linear-gradient(var(--neon-pink), var(--electric-blue));
    overflow: hidden;
    box-shadow: 0 0 2rem var(--neon-pink);

    border-radius: 0.4rem;
}

@media screen and (max-width: 600px) {
    .background {
        width: 24rem;
    }
}

.intro {
    animation: intro 0.5s linear;
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
