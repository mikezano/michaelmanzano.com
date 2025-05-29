<template>
    <div class="find-me" v-if="isVisible">
        <div class="title">Hola, I'm Michael Man<span class="zano-highlight">zano</span>, let's connect:</div>
        <div class="links">
            <a class="link" target="_blank" v-for="link in links" :href="link.url" :class="{ 'in-front': isInFront }">
                <img v-if="link.icon" :src="link.icon" :alt="link.name" />
                <span>{{ link.name }}</span>
            </a>
        </div>
    </div>

</template>


<script setup lang="ts">
import { ref } from 'vue';
import bandcampIcon from '../assets/logos/bandcamp.svg';
import blueSkyIcon from '../assets/logos/bluesky.svg';
import codepenIcon from '../assets/logos/codepen.svg';
import instagramIcon from '../assets/logos/instagram.svg';
import linkedinIcon from '../assets/logos/linkedin.svg';
import zan0Icon from '../assets/logos/zan0.svg';

interface Link {
    url: string;
    name: string;
    icon?: string;
}
defineProps<{
    isVisible: boolean;
    isInFront: boolean;
}>();

const links = ref<Link[]>([
    {
        url: 'https://www.linkedin.com/in/michael-manzano-16024097/',
        name: 'Linked In',
        icon: linkedinIcon
    }, {
        url: 'https://zan0.dev/',
        name: 'zan0.dev',
        icon: zan0Icon
    }, {
        url: 'https://codepen.io/_zan0/',
        name: 'Code Pen',
        icon: codepenIcon
    },
    {
        url: 'https://bsky.app/profile/mikezano.bsky.social',
        name: 'Blue Sky',
        icon: blueSkyIcon
    },
    {
        url: 'https://www.instagram.com/mikezan0/',
        name: 'Instagram',
        icon: instagramIcon
    },
    {
        url: 'https://zan0.bandcamp.com/',
        name: 'Bandcamp',
        icon: bandcampIcon
    },
    // {
    //     url: 'https://soundcloud.com/djzan0',
    //     name: 'Soundcloud',
    //     icon: soundcloudIcon
    // }
]);

</script>

<style scoped>
.find-me {

    & .zano-highlight {
        color: var(--electric-blue-light);
    }

    & .title {
        color: white;
        margin-top: 0.4rem;
        font-size: 0.9rem;
        letter-spacing: 0.009rem;
    }

    & .links {
        margin-top: 1rem;
    }

    & .link {
        color: white;
        display: inline-flex;
        text-decoration: none;
        align-items: center;
        gap: .4rem;
        font-size: 1.2rem;
        width: 10rem;
        margin-left: 3rem;
    }

    & .link.in-front {
        position: relative;
        z-index: 10;
    }

    & .link:hover {
        background: none;
    }

    & .link img {
        width: 2rem;
        height: 2rem;
    }

    & .link::before {
        content: '';
        position: absolute;
        padding-bottom: 2.2rem;
        height: 2rem;
        width: 0;
        border-bottom: 0.3rem solid white;
    }

    & .link:hover::before {
        transition: all 0.2s ease-in-out;
        border-bottom: 0.2rem solid var(--neon-pink);
        width: 100%;
    }
}

@media screen and (max-width: 600px) {
    .find-me .title {
        display: none;
    }

    .find-me {
        display: flex;
        flex-direction: column;
    }
}
</style>
