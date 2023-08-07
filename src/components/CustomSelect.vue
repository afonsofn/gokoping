<template>
    <div class="select-wrapper">
        <select
            v-model="selectedOption"
            @change="emit('update:value', selectedOption)"
        >
            <option
                v-for="(option, index) in options"
                :value="option"
                :key="index"
            >
                {{ option }}
            </option>
        </select>

        <ChevronDown />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ChevronDown from '@/components/icons/ChevronDown.vue';

const { options } = defineProps<{ options: string[] }>();
const emit = defineEmits<{ (e: 'update:value', value: string): void }>();

const selectedOption = ref<string>('');

onMounted(() => {
    selectedOption.value = options[0];
    emit('update:value', options[0]);
});
</script>

<style scoped>
.select-wrapper {
    position: relative;
}

.select-wrapper > svg {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    pointer-events: none;
}

select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    cursor: pointer;
    width: 160px;
    height: 35px;
    padding: 0 14px;
    background-color: var(--background-color-input);
    border: none;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 600;
}
</style>
