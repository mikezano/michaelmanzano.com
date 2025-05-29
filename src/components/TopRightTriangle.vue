<template>
    <transition enter-active-class="enter">
        <div class="trt" v-if="isVisible">
            <slot />
        </div>

    </transition>

</template>

<script setup lang="ts">
defineProps<{
    isVisible: boolean;
}>();

</script>

<style scoped>
@media screen and (max-width: 600px) {
    .trt {
        display: none;
    }
}

.trt {
    --size: 16rem;
    position: absolute;
    top: 0;
    right: 0;
    width: var(--size);
    height: var(--size);
    background-color: red;
    background: linear-gradient(45deg, white, var(--neon-pink));
    shape-outside: polygon(0 0, 100% 0, 100% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    overflow: hidden;
}

.enter {
    animation: enter var(--duration) var(--motion);
}

@keyframes enter {
    0% {
        transform: translateX(30rem);
    }

    100% {
        transform: translateX(0);
    }
}
</style>