<template>
    <div class="quantity-selector">
        <span @click="updateQuantity(false)">-</span>
        {{ twoCharacterFormatter(quantity) }}
        <span @click="updateQuantity(true)">+</span>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { twoCharacterFormatter } from '@/utils';

defineProps<{ modelValue?: number }>();

const emit = defineEmits<{ (e: 'update:modelValue', value: number): void }>();

const quantity = ref(1);

const updateQuantity = (increase: boolean) => {
    if (increase) {
        quantity.value++;
    } else if (quantity.value > 1) {
        quantity.value--;
    }

    emit('update:modelValue', quantity.value);
};

onMounted(() => emit('update:modelValue', quantity.value));
</script>

<style scoped>
.quantity-selector {
    width: 100px;
    height: 35px;
    background-color: var(--background-color-input);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.quantity-selector > span {
    color: var(--text-color-secondary);
    font-weight: 600;
    cursor: pointer;
    padding: 0 12px;
    display: flex;
    align-items: center;
    align-self: stretch;
}
</style>
