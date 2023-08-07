<template>
    <div class="stock-check">
        <GreenCheck />
        <i>In stock</i>
    </div>
</template>

<script setup lang="ts">
import GreenCheck from '@/components/icons/GreenCheck.vue';
</script>

<style scoped>
.stock-check {
    display: flex;
    align-items: center;
    gap: 9px;
    color: var(--text-color-success);
    font-weight: 500;
}
</style>
