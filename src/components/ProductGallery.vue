<template>
    <section class="product-gallery">
        <div class="main-product-image">
            <LeftArrow @click="nextImage(-1)" />
            <RightArrow @click="nextImage(1)" />
        </div>

        <ProductCarousel
            :images="carouselImages"
            @on:next-image="nextImage"
        />
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ProductCarousel from '@/components/ProductCarousel.vue';
import RightArrow from '@/components/icons/RightArrow.vue';
import LeftArrow from '@/components/icons/LeftArrow.vue';

const { productImages } = defineProps<{ productImages: string[] }>();

const currentImageIndex = ref(0);

const carouselImages = computed(() => [
    productImages[nextImage(-1, false)],
    productImages[currentImageIndex.value],
    productImages[nextImage(1, false)]
]);
const imageBackgroundUrl = computed(
    () => `url(${productImages[currentImageIndex.value]})`
);

const nextImage = (offset: number, shouldUpdateIndex: boolean = true) => {
    const projectedIndex = currentImageIndex.value + offset;
    const nextIndex =
        (projectedIndex + productImages.length) % productImages.length;

    if (shouldUpdateIndex) currentImageIndex.value = nextIndex;

    return nextIndex;
};
</script>

<style scoped>
.product-gallery {
    flex: 2;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.main-product-image {
    height: 710px;
    width: 700px;
    background-image: v-bind(imageBackgroundUrl);
    background-color: var(--background-color-secondary);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 30px;
    position: relative;
}

.main-product-image > svg {
    position: absolute;
    height: 32px;
    width: 32px;
}

.main-product-image > :first-child {
    top: 50%;
    left: 44px;
    transform: translate(-50%, -50%);
}

.main-product-image > :last-child {
    top: 50%;
    right: 28px;
    transform: translate(0, -50%);
}

@media (max-width: 1863px) {
    .main-product-image {
        width: 100%;
        height: auto;
        aspect-ratio: 1 / 1;
    }
}

@media (max-width: 1530px) {
    .product-gallery {
        flex: 1;
    }
    .main-product-image {
        max-width: 500px;
    }
}

@media (max-width: 1200px) {
    .main-product-image {
        background-size: contain;
        max-width: none;
        max-height: 500px;
    }
    .carousel {
        display: none;
    }
}
</style>
