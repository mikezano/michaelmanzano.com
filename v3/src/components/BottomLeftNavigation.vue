<template>
    <transition enter-active-class="enter" @after-enter="afterEnter" leave-active-class="leave">
        <div class="bln" v-if="isVisible">
            <div class="bln__triangle"></div>
            <p class="bln__find-me" @click="navigate('FindMe')">Find Me</p>
            <p class="bln__etc" @click="navigate('About')">About</p>
        </div>
    </transition>
</template>

<script setup lang="ts">

const props = defineProps<{
    isVisible: boolean;
    afterEnter: () => void;
    onClick: (page: string) => void;
}>();

const navigate = (page: string) => {
    props.onClick(page);
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
    .bln {
        display: none;
    }
}

.bln {
    --bln-size: 16rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: var(--bln-size);
    height: var(--bln-size);
    text-align: left;
    color: white;
    shape-outside: polygon(0 0, 100% 100%, 0 100%);
    /* //background: linear-gradient(45deg, $blueD2, $blueL1);
    //clip-path: polygon(0 0, 32% 0, 100% 100%, 0 100%);
    //shape-outside: polygon(0 0, 100% 100%, 0 100%);
    //clip-path: polygon(0 0, 100% 100%, 0 100%); */

    & .bln__triangle {
        /* //background: linear-gradient(black, white); */
        shape-outside: polygon(0 0, 100% 0, 100% 100%);
        /* //clip-path: polygon(0 0, 100% 0, 100% 100%); */
        width: var(--bln-size);
        height: var(--bln-size);
        float: right;
    }

    & .bln__find-me {
        margin-top: 7rem;
        margin-bottom: 1rem;
    }

    & .bln__find-me,
    & .bln__etc {
        text-align: right;
        font-size: 1.3rem;
        /* //position: relative;
        //width: auto; */
        transition: all 0.2s ease-in-out;


    }

    & .bln__find-me:hover,
    & .bln__etc:hover {
        color: var(--electric-blue-dark);
        cursor: pointer;
        transform: translateY(-0.1rem);
        text-shadow: 0.2rem 0.2rem 0.2rem var(--neon-pink);
    }
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
