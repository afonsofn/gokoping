<template>
    <div class="color-picker">
        <span>Color</span>

        <div class="colors-wrapper">
            <div
                v-for="(hexCode, index) in colors"
                @click="selectColor(hexCode)"
                :class="{ selected: selectedColor === hexCode }"
                :style="`background-color:${hexCode};`"
                :key="index"
            ></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const { colors } = defineProps<{ modelValue?: string; colors: string[] }>();
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const selectedColor = ref<string>('');

const selectColor = (color: string) => {
    selectedColor.value = color;
    emit('update:modelValue', color);
};

onMounted(() => selectColor(colors[0]));
</script>

<style scoped>
.color-picker {
    display: flex;
    align-items: center;
    gap: 19px;
    font-weight: 500;
}

.colors-wrapper {
    display: flex;
    gap: 10px;
}

.colors-wrapper > div {
    width: 22px;
    height: 22px;
    border: 1px solid var(--border-color);
    cursor: pointer;
}

.colors-wrapper > div.selected {
    border: 2px solid var(--text-color-secondary);
}
</style>
