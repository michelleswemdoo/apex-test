<template>
  <div class="w-full max-w-[228px] inline-block m-2">
    <label class="flex flex-col gap-2">
      <span class="text-left text-[#111827] font-bold block"><slot></slot></span>
      <select
        v-model="modal"
        class="w-full bg-[#FAFAFA] focus:ring-[#EEEFF2] rounded-xl p-4 text-[#A0AEC0] placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#EEEFF2] focus:border"
      >
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{ options: Array<string> }>();

const modal = defineModel();
</script>
