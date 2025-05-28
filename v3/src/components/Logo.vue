<template>
    <div class="logo" :class="{ 'show': isVisible }">ZANO</div>
</template>


<script setup lang="ts">

defineProps<{
    isVisible: boolean;
}>();
</script>

<style scoped>
.logo {
    color: white;
    text-align: center;
    font-family: 'Audiowide';
    font-size: 5rem;
    animation: glow 3s ease-in infinite;
    opacity: 0;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.5px var(--neon-pink-light);
    /* //-webkit-background-clip: text; */
    /* transform: translateY(10rem); */
    transition: opacity var(--duration) var(--motion);
}

.logo.show {
    opacity: 1;
}

@keyframes glow {
    0% {
        filter: drop-shadow(0 0 1rem var(--neon-pink-light));
    }

    50% {
        filter: drop-shadow(0 0 4rem white);
    }

    100% {
        filter: drop-shadow(0 0 1rem var(--neon-pink-light));
    }
}
</style>
