<template>
    <div>
        <i>- Read reviews({{ twoCharacterFormatter(reviews) }})</i>
        <span>|</span>
        <i>Write review</i>
    </div>
</template>

<script setup lang="ts">
import { twoCharacterFormatter } from '@/utils';

defineProps<{ reviews: number }>();
</script>

<style scoped>
div {
    font-size: 12px;
    font-weight: 500;
    display: flex;
    gap: 3.2px;
}

div > :first-child,
span {
    color: var(--text-color-secondary);
}
</style>
