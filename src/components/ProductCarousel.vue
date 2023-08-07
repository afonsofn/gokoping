<template>
    <div class="carousel">
        <div class="carousel-container">
            <div
                v-for="(image, index) in images"
                :key="index"
                @click="emit('on:next-image', index - 1)"
            >
                <img :src="image" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{ images: string[] }>();

const emit = defineEmits<{ (e: 'on:next-image', index: number): void }>();
</script>

<style>
.carousel {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    overflow: hidden;
}

.carousel-container {
    display: flex;
    gap: 10px;
}

img {
    height: 160px;
    width: 160px;
    background-color: var(--background-color-secondary);
    cursor: pointer;
}
</style>
