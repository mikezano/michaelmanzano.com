<template>
    <!-- <div id="app-background-container">
        <div id="app-background"></div>
    </div> -->
    <div id="animated-grid-container">
        <div id="animated-grid"></div>
    </div>

</template>

<style>
#app {
    font-family: "Audiowide";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #0892d0;
    background: linear-gradient(to bottom, black 100px, var(--electric-blue-light));
}



#animated-grid-container {
    position: absolute;
    perspective: 1000px;
    perspective-origin: top;
}

#animated-grid {
    margin-top: 20rem;
    border-top: 0.3rem solid var(--electric-blue);
    width: 100vw;
    height: calc(100vh - 10rem);
    transform-origin: 0 0;
    transform-style: preserve-3d;
    transform: rotateX(90deg);
    background: linear-gradient(90deg,
            transparent 0%,
            var(--electric-blue) 4%,
            var(--electric-blue) 5%,
            var(--electric-blue) 6%,
            transparent 10%),
        linear-gradient(180deg,
            transparent 0%,
            var(--electric-blue) 4%,
            var(--electric-blue) 5%,
            var(--electric-blue) 6%,
            transparent 10%),
        black;
    background-repeat: repeat, repeat;
    background-position: 0 0, 50px 50px;
    background-size: 50px 50px, 50px 50px;
    animation: move 20s linear infinite;
}

@keyframes move {
    100% {
        background-position: 0 400px, 50px 350px;
    }
}

@media screen and (max-width: 600px) {
    #app-background-container {
        top: 200px;
    }
}
</style>