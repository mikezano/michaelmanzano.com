<template>
    <div id="animated-grid-container">
        <div id="animated-grid"></div>
    </div>
</template>

<style>
#animated-grid-container {
    position: absolute;
    perspective: 1000px;
    perspective-origin: top;
}

#animated-grid {
    margin-top: 20rem;
    border-top: 0.3rem solid var(--electric-blue);
    width: 100vw;
    height: calc(100vh - 20rem);
    transform-origin: 0 0;
    transform-style: preserve-3d;
    transform: rotateX(90deg);
    background: linear-gradient(90deg,
            transparent 0%,
            var(--electric-blue-dark) 4%,
            var(--electric-blue-light) 5%,
            var(--electric-blue-dark) 6%,
            transparent 10%),
        linear-gradient(180deg,
            transparent 0%,
            var(--electric-blue-dark) 4%,
            var(--electric-blue-light) 5%,
            var(--electric-blue-dark) 6%,
            transparent 10%),
        black;
    background-repeat: repeat, repeat;
    background-position: 0 0, 50px 50px;
    background-size: 50px 50px, 50px 50px;
    animation: move 100s linear infinite;
}

@keyframes move {
    100% {
        background-position: -400px 0px, -350px 50px;
    }
}

@media screen and (max-width: 600px) {
    #app-background-container {
        top: 200px;
    }
}
</style>