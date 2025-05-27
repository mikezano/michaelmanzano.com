<template>
    <transition leave-active-class="leave" enter-active-class="enter">
        <div class="trc" v-if="isVisible"></div>
    </transition>
</template>

<script setup lang="ts">
defineProps<{
    isVisible: boolean
}>();
</script>

<style scoped>
.trc {
    position: absolute;
    top: 0;
    right: 0;
    width: 75%;
    height: 100%;
    background-color: green;
    background: linear-gradient(45deg, var(--electric-blue), var(--electric-blue-light));
    /* shape-outside: polygon(0 0, 100% 100%, 0 100%); */
    clip-path: polygon(0 0, 100% 0, 100% 100%, 69% 100%);
}

.leave {
    animation: leave var(--duration) var(--motion);
}

@keyframes leave {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(20rem);
    }
}

.enter {
    animation: enter var(--duration) var(--motion);
}

@keyframes enter {
    0% {
        transform: translateX(20rem);
    }

    100% {
        transform: translateX(0);
    }
}
</style>
