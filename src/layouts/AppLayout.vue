<template>
  <AppHeader />

  <div class="max-w-screen-lg m-auto my-8 rounded-lg">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
</script>
