<template>
    <div>
        <StarIcon
            v-for="(_, index) in rating"
            :key="index"
        />
    </div>
</template>

<script setup lang="ts">
import StarIcon from '@/components/icons/StarIcon.vue';

defineProps<{ rating: 1 | 2 | 3 | 4 | 5 }>();
</script>

<style scoped>
svg {
    height: 16px;
    width: 16px;
}
</style>
