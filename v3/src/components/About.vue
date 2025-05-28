<template>
    <div class="about" v-if="isVisible">
        Hi. I'm Michael Man<span class="highlight-zano">zano</span> and I love the web. For 15 years I've been at all
        layers of the stack investing in current and emerging technologies. With a previous
        background in the video game industry I have an affinity for the visual.
        Follow me on any of my social links for more.

    </div>
</template>


<script setup lang="ts">

defineProps<{
    isVisible: boolean;
}>()
</script>

<style scoped>
.about {
    color: white;
    margin-top: 1.2rem;
    font-size: 1rem;


    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

.highlight-zano {
    color: var(--neon-pink-light);
}
</style>
