<template>
    <main>
        <section>
            <ProductGallery :productImages="productImages" />

            <ProductDetails :productInfo="productData" />
        </section>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import productData from '@/assets/database';
import ProductGallery from '@/components/ProductGallery.vue';
import ProductDetails from '@/components/ProductDetails.vue';
import type { ProductInterface } from '@/types';

const productInfo = ref<ProductInterface>(productData);
const productImages = ref<string[]>(
    productInfo.value.attachments.map(
        (attachment) => attachment.attachmentAssetPath
    )
);
</script>

<style scoped>
main {
    flex: 1;
    padding: 70px;
}

main > section {
    margin: 0 auto;
    width: var(--content-width);
    display: flex;
    gap: 70px;
    justify-content: space-between;
}

@media (max-width: 1530px) {
    main > section {
        width: auto;
    }
}

@media (max-width: 1200px) {
    main {
        padding: 48px;
    }

    main > section {
        flex-direction: column;
        gap: 0;
    }
}

@media (max-width: 540px) {
    main {
        padding: 24px;
    }
}
</style>
