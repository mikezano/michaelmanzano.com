<template>
    <div class="find-me" v-if="isVisible">
        <div class="fine-me__title">Find me here:</div>
        <div class="find-me__links"> <a class="find-me__item" v-for="link in links" :href="link.url"
                :class="{ 'in-front': isInFront }">
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
import soundcloudIcon from '../assets/logos/soundcloud.svg';
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
    {
        url: 'https://soundcloud.com/djzan0',
        name: 'Soundcloud',
        icon: soundcloudIcon
    }
]);

</script>

<style scoped>
.in-front {
    position: relative;
    z-index: 1;
}

.find-me {

    & .find-me__title,
    & .find-me__item {
        text-align: center;
    }

    & .find-me__links {
        margin-top: 1rem;
    }

    & .find-me__title {
        font-size: 2rem;
        color: black;
    }

    & .find-me__item {
        color: white;
        display: inline-flex;
        position: relative;
        text-decoration: none;
        margin-bottom: 1rem;
        margin-left: 2rem;

        & img {
            width: 2rem;
            height: 2rem;
        }


    }

    & .find-me__item span {
        font-size: 1.5rem;
        height: 1rem;
        width: auto;
        margin-left: 0.5rem;
    }

    & .find-me__item:hover {
        background: none;
    }

    & .find-me__item:hover::before {
        transition: all 0.2s ease-in-out;
        border-bottom: 0.3rem solid var(--neon-pink);
        width: 100%;
    }

    & .find-me__item::before {
        content: '';
        position: absolute;
        padding-bottom: 0.2rem;
        height: 2rem;
        width: 0;
        border-bottom: 0.3rem solid white;
    }
}

@media screen and (max-width: 600px) {
    .find-me__title {
        display: none;
    }

    .find-me {
        display: flex;
        flex-direction: column;
    }
}
</style>
