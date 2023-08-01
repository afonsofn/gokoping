<template>
    <header>
        <section class="nav-section">
            <NavigationMenu />
            <GokopingLogo />
            <div>
                <ShoppingCart />
            </div>
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
import ShoppingCart from '@/components/icons/ShoppingCart.vue';
</script>

<style scoped>
header {
    position: relative;
    height: 34.375rem;
    padding: 2rem 4.375rem;
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

svg:not(.nav-section > svg) {
    height: 28px;
    width: 28px;
}

.title-section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--content-width);
}
.title-section > div {
    font-family: 'Poppins';
    margin-top: 1.1875rem;
}

.title-section a {
    color: var(--text-color-secondary);
}

@media (max-width: 1200px) {
    header {
        height: auto;
        padding: 1.5rem 3rem;
    }

    .title-section {
        position: relative;
        transform: none;
        top: 0;
        left: 0;
        margin-top: 3rem;
        width: auto;
    }
}

@media (max-width: 540px) {
    header {
        padding: 1.5rem;
    }

    svg:not(.nav-section > svg) {
        height: 24px;
        width: 24px;
    }
}
</style>
