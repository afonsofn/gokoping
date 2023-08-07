import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { deepEqual } from '@/utils';
import type { ProductPayload } from '@/types';

export const useShoppingCartStore = defineStore('shoppingCart', () => {
    let items = ref<ProductPayload[]>([]);
    let favoriteItems = ref<string[]>([]);

    const addToCart = (item: ProductPayload) => {
        const alreadyAddedIndex = items.value.findIndex(
            (product: ProductPayload) => deepEqual({ ...product }, { ...item })
        );

        if (alreadyAddedIndex !== -1)
            return (items.value[alreadyAddedIndex].quantity =
                items.value[alreadyAddedIndex].quantity + item.quantity);

        items.value.push(item);
    };
    const manageFavoriteItems = (id: string) => {
        favoriteItems.value = favoriteItems.value.includes(id)
            ? favoriteItems.value.filter((item) => item !== id)
            : [...favoriteItems.value, id];
    };

    const totalItemsAmount = computed(() =>
        items.value.reduce((sum, item) => sum + item.quantity, 0)
    );

    return {
        items,
        favoriteItems,
        addToCart,
        manageFavoriteItems,
        totalItemsAmount
    };
});
