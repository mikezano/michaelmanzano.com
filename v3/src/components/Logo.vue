<template>
    <div class="logo" v-if="isVisible">ZANO</div>
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

    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.5px #8fdcea;
    /* //-webkit-background-clip: text; */
    /* transform: translateY(10rem); */
}

@keyframes glow {
    0% {
        filter: drop-shadow(0 0 1rem white);
    }

    50% {
        filter: drop-shadow(0 0 2rem white);
    }

    100% {
        filter: drop-shadow(0 0 1rem white);
    }
}
</style>
