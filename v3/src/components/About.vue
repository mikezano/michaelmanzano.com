<template>
    <div class="about" v-if="isVisible">
        Hi. I'm Michael Man<span class="highlight-zano">zano</span> and I love the web. For 15 years I've been at all
        layers of the stack investing in current and emerging technologies. With a previous
        background in the video game industry I have an affinity with the visual. Follow me for plenty of links or reach
        out

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
    margin-top: 1.5rem;
}

.highlight-zano {
    color: var(--neon-pink-light);
}
</style>
