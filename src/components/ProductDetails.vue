<template>
    <section class="info-wrapper">
        <h3>{{ productInfo.name }}</h3>

        <div class="review-wrapper">
            <ProductRating :rating="5" />
            <ProductReviews :reviews="12" />
        </div>

        <h2>{{ productPrice }}</h2>

        <p>{{ productInfo.longDescription }}</p>

        <HorizontalDivider />

        <div class="customization-wrapper">
            <ColorPicker
                v-model="productPayload.color"
                :colors="productColors"
            />
            <SizePicker
                v-model="productPayload.size"
                :sizes="productSizes"
            />
        </div>

        <div class="availability-wrapper">
            <QuantitySelector v-model="productPayload.quantity" />
            <StockCheck />
        </div>

        <HorizontalDivider />

        <table>
            <tr>
                <th>SKU</th>
                <td>M107-B</td>
            </tr>
            <tr>
                <th>CATEGORY</th>
                <td>Women/ T-Shirt</td>
            </tr>
        </table>

        <div class="buttons-wrapper">
            <button @click="addToCart()">ADD TO CART</button>
            <button
                @click="
                    shoppingCartStore.manageFavoriteItems(productInfo.storeID)
                "
                class="secondary"
            >
                <HeartIcon
                    :class="{
                        favorite: shoppingCartStore.favoriteItems.includes(
                            productInfo.storeID
                        )
                    }"
                />
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useShoppingCartStore } from '@/stores/shoppingCart';
import ProductRating from '@/components/ProductRating.vue';
import ProductReviews from '@/components/ProductReviews.vue';
import ColorPicker from '@/components/ColorPicker.vue';
import SizePicker from '@/components/SizePicker.vue';
import StockCheck from '@/components/StockCheck.vue';
import QuantitySelector from '@/components/QuantitySelector.vue';
import HorizontalDivider from '@/components/HorizontalDivider.vue';
import HeartIcon from '@/components/icons/HeartIcon.vue';
import type {
    ProductInterface,
    ProductColors,
    ProductSizes,
    ProductPayload
} from '@/types';

const { productInfo } = defineProps<{ productInfo: ProductInterface }>();

const shoppingCartStore = useShoppingCartStore();

const productPayload = ref<ProductPayload>({
    id: '',
    color: '',
    size: '',
    quantity: 0,
    price: 0
});

const productSizes = ref<string[]>(
    productInfo.sizeCodes.map((size: ProductSizes) => size.value)
);
const productColors = ref<string[]>(
    productInfo.otherVariants.map((color: ProductColors) => color.hexCode)
);
const productPrice = ref(
    productInfo.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
);

const addToCart = () => {
    const shouldAddToCart = Object.values(productPayload.value).filter(
        (value) => !value
    ).length;

    if (!shouldAddToCart)
        shoppingCartStore.addToCart({ ...productPayload.value });
};

onMounted(() => {
    productPayload.value.price = productInfo.price;
    productPayload.value.id = productInfo.storeID;
});
</script>

<style scoped>
.info-wrapper {
    flex: 1;
}

.info-wrapper > h3 {
    margin-bottom: 16px;
}

.info-wrapper > h2 {
    margin: 24px 0;
}

.info-wrapper > p {
    color: var(--text-color-secondary);
}

.review-wrapper {
    display: flex;
    gap: 3.2px;
}

.customization-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
}

.availability-wrapper {
    display: flex;
    gap: 30px;
}

th {
    font-weight: 500;
    text-align: start;
    padding-right: 96px;
}

td {
    font-weight: 500;
    color: var(--text-color-secondary);
}

.buttons-wrapper {
    display: flex;
    gap: 18px;
    margin-top: 90px;
}

.favorite {
    fill: var(--button-color);
}

@media (max-width: 1200px) {
    .customization-wrapper {
        flex-direction: column;
    }

    th {
        padding-right: 64px;
    }
}

@media (max-width: 604px) {
    .buttons-wrapper {
        justify-content: center;
    }
}
</style>
