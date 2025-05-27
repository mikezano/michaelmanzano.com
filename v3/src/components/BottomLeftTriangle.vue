<template>
    <transition @after-enter="afterEnter" enter-active-class="enter">
        <div class="blt" v-if="isVisible"></div>
    </transition>
</template>

<script setup lang="ts">

defineProps<{
    isVisible: boolean;
    afterEnter: () => void;
}>();

</script>

<style scoped>
@media screen and (max-width: 600px) {
    .blt {
        display: none;
    }
}

.blt {
    --size: 16rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: var(--size);
    height: var(--size);
    background: linear-gradient(45deg, var(--neon-pink), white);
    shape-outside: polygon(0 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 100%, 0 100%);
}

.enter {
    animation: enter var(--duration) var(--motion);
}

@keyframes enter {
    0% {
        transform: translateX(-30rem);
    }

    100% {
        transform: translateX(0);
    }
}
</style>
