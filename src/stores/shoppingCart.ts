import { ref } from 'vue';
import { defineStore } from 'pinia';

interface CartItem {
    id: number;
    name: string;
    price: number;
}

export const useShoppingCartStore = defineStore('shoppingCart', () => {
    const items = ref<CartItem[]>([]);
    const totalAmount = ref(0);

    const addItem = (item: CartItem) => {
        items.value.push(item);
        totalAmount.value += item.price;
    };
    const removeItem = (item: CartItem) => {
        const removedItem = items.value.find(
            (storedItem) => storedItem.id === item.id
        );

        if (removedItem) {
            totalAmount.value -= removedItem.price;
            items.value = items.value.filter(
                (item) => item.id !== removedItem.id
            );
        }
    };

    return { items, totalAmount, addItem, removeItem };
});
