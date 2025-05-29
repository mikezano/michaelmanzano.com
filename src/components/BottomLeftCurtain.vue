<template>
    <transition leave-active-class="leave" enter-active-class="enter" @after-enter="afterEnter"
        @after-leave="afterLeave">
        <div class="blc" v-if="isVisible"></div>
    </transition>
</template>

<script setup lang="ts">
defineProps<{
    isVisible: boolean;
    afterEnter: () => void;
    afterLeave: () => void;
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
    background: linear-gradient(45deg, var(--electric-blue), var(--electric-blue-dark));
    clip-path: polygon(0 0, 32% 0, 100% 100%, 0 100%);
}

.leave {
    animation: leave var(--duration) var(--motion);
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
