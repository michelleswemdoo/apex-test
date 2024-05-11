<template>
  <button :class="buttonClasses" :disabled="disabled" @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { disabled } = defineProps<{
  disabled?: boolean;
  variant?: 'primary' | 'ghost';
}>();

const emit = defineEmits(['click']);

const buttonClasses = computed(() => {
  let baseClasses = 'px-3 py-1 rounded-lg transition ease-in-out duration-150 text-md';

  baseClasses += disabled ? '  cursor-not-allowed' : ' hover:bg-blue-200';

  return baseClasses;
});

const onClick = () => {
  if (!disabled) emit('click');
};
</script>
