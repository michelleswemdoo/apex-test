<template>
  <p class="w-fit px-3 py-1.5 rounded-lg capitalize mb-2 flex items-center">
    <span class="mr-2">
      <CircleChipIcon />
    </span>
    <slot />
  </p>
</template>

<script setup lang="ts">
import CircleChipIcon from '@/assets/icons/CircleChipIcon.vue';
</script>
