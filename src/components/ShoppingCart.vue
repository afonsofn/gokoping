<template>
    <div class="shopping-cart">
        <ShoppingCartIcon />
        <span class="cart-amount">
            {{ shoppingCartStore.totalItemsAmount }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { useShoppingCartStore } from '@/stores/shoppingCart';
import ShoppingCartIcon from '@/components/icons/ShoppingCart.vue';

const shoppingCartStore = useShoppingCartStore();
</script>

<style scoped>
.shopping-cart {
    position: relative;
}

.cart-amount {
    position: absolute;
    top: 18px;
    right: -8px;
    min-width: 18px;
    height: 18px;
    padding: 3px;
    border-radius: 9px;
    background-color: var(--button-color);
    font-size: 12px;
    color: var(--text-color-white);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
