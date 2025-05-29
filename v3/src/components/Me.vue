<template>
    <transition enter-active-class="enter">
        <img v-if="isVisible" id="me" src="../assets/me.png" />
    </transition>
</template>

<script setup lang="ts">
defineProps<{
    isVisible: boolean;
}>();
</script>


<style>
#me {
    margin: 1rem;
    width: 80%;
    position: absolute;
    top: 0;
    right: 0;

    /* faint overlay */
    filter:
        contrast(1.6) saturate(1) hue-rotate(290deg) brightness(1.3) drop-shadow(0 0 8px var(--neon-pink)) drop-shadow(0 0 12px var(--electric-blue));
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    shape-outside: polygon(0 0, 100% 0, 100% 100%);
}

.enter {
    animation: enter var(--duration) var(--motion);
}

@keyframes enter {
    0% {
        transform: translateX(-20rem);
    }

    100% {
        transform: translateX(0);
    }
}
</style>