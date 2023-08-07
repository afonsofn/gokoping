<template>
    <div class="size-picker">
        <span>Size</span>

        <CustomSelect
            @update:value="(size) => emit('update:modelValue', size)"
            :options="sizes"
        />
    </div>
</template>

<script setup lang="ts">
import CustomSelect from '@/components/CustomSelect.vue';

defineProps<{ modelValue?: string; sizes: string[] }>();

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();
</script>

<style scoped>
.size-picker {
    display: flex;
    align-items: center;
    gap: 19px;
    margin-left: 16px;
    font-weight: 500;
    width: auto;
}

@media (max-width: 1200px) {
    .size-picker {
        margin-left: 0;
        margin-top: 35px;
    }
}
</style>
