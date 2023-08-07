<template>
    <header>
        <section class="nav-section">
            <NavigationMenu />
            <GokopingLogo />
            <ShoppingCart />
        </section>

        <section class="title-section">
            <h1>Gokoping Shop Detail</h1>

            <div>
                <a href="#">HOME </a>
                <a href="#">/ SHOP </a>
                <span>/ SPRING T-SHIRT COLLECTION</span>
            </div>
        </section>
    </header>
</template>

<script setup lang="ts">
import GokopingLogo from '@/components/icons/GokopingLogo.vue';
import NavigationMenu from '@/components/NavigationMenu.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
</script>

<style scoped>
header {
    position: relative;
    height: 550px;
    padding: 32px 70px;
    background-color: var(--background-color);
}

.nav-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-section > :not(svg) {
    flex-grow: 1;
    flex-basis: 0;
}

.nav-section > :last-child {
    display: flex;
    justify-content: flex-end;
}

.title-section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--content-width);
}
.title-section > div {
    font-weight: 500;
    margin-top: 19px;
}

.title-section a {
    color: var(--text-color-secondary);
}

@media (max-width: 1200px) {
    header {
        height: auto;
        padding: 24px 48px;
    }

    .title-section {
        position: relative;
        transform: none;
        top: 0;
        left: 0;
        margin-top: 48px;
        width: auto;
    }
}

@media (max-width: 540px) {
    header {
        padding: 24px;
    }
}
</style>
