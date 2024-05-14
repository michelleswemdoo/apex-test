<template>
  <div class="w-full max-w-[228px] inline-block m-2">
    <label class="flex flex-col gap-2">
      <span class="text-left text-[#111827] font-bold block"><slot></slot></span>
      <input
        v-model="modal"
        :type="type"
        :placeholder="placeholder"
        class="w-full bg-[#FAFAFA] focus:ring-[#EEEFF2] rounded-xl p-4 text-[#A0AEC0] placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#EEEFF2] focus:border"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  placeholder: string;
  type: 'submit' | 'text' | 'number';
}>();
const modal = defineModel<string | number>();
</script>
