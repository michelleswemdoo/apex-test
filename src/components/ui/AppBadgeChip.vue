<template>
  <p class="w-fit px-3 py-1 text-sm rounded-lg capitalize mb-2 flex items-center">
    <CircleChipIcon class="mr-2" />
    <slot />
  </p>
</template>

<script setup lang="ts">
import CircleChipIcon from '@/assets/icons/CircleChipIcon.vue';
</script>
