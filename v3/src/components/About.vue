<template>
    <div class="about" v-if="isVisible">
        I enjoy coding. For 15 years I've been at all
        layers of the stack investing in current and emerging technologies.
        I'm always looking to try new apps, new frameworks and new languages.
        With roots in the video game industry I have
        an affinity for the visual. CSS problem? No problem I say.
        Come say hi on my social links and lets connect.

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
    letter-spacing: 0.02rem;


    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}
</style>
