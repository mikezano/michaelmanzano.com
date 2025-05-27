<template>
    <transition leave-active-class="leave" enter-active-class="enter" @after-enter="onClosed"
        @after-leave="afterOpened">
        <div class="blc" v-if="isVisible"></div>
    </transition>
</template>

<script setup lang="ts">
defineProps<{
    isVisible: boolean
    onClosed: () => void
    afterOpened: () => void
}>()

</script>

<style scoped>
.blc {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 75%;
    height: 100%;
    background-color: orange;
    /* //shape-outside: polygon(0 0, 100% 100%, 0 100%); */
    background: linear-gradient(45deg, var(--electric-blue), var(--electric-blue-light));
    clip-path: polygon(0 0, 32% 0, 100% 100%, 0 100%);
}

.leave {
    animation: leave 0.5s ease-in-out;
}

@keyframes leave {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-20rem);
    }
}

.enter {
    animation: enter 0.5s ease-in-out;
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
