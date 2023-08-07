<template>
    <nav>
        <HamburgerMenu @click="showModal = true" />

        <ul>
            <li><a href="#">SHOP</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>

        <transition>
            <section
                v-if="showModal"
                @click="showModal = false"
            >
                <ul @click.stop>
                    <li>
                        <a
                            href="#"
                            @click="closeModal()"
                            >SHOP</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            @click="closeModal()"
                            >BLOG</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            @click="closeModal()"
                            >CONTACT</a
                        >
                    </li>
                </ul>
            </section>
        </transition>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HamburgerMenu from '@/components/icons/HamburgerMenu.vue';

const showModal = ref(false);

const closeModal = () => (showModal.value = false);
</script>

<style scoped>
nav {
    display: flex;
    gap: 50px;
    align-items: center;
}

nav > ul {
    display: flex;
    gap: 50px;
}

section {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--background-color-modal);
}

section > ul {
    width: 40%;
    height: 100%;
    padding: 32px;
    background-color: var(--background-color);
}

section > ul > li {
    padding: 16px;
    font-size: 24px;
}

a {
    font-weight: 500;
}

@media (max-width: 1200px) {
    nav > ul {
        display: none;
    }

    section > ul {
        width: 50%;
        padding: 24px;
    }
}

@media (max-width: 540px) {
    section > ul {
        width: 60%;
        padding: 16px;
    }

    section > ul > li {
        padding: 12.8px;
        font-size: 20.8px;
    }
}
</style>
