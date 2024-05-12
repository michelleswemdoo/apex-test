<template>
  <div
    v-show="showProfileCard"
    class="bg-white shadow-[0px_5px_15px_0px_#00000033] rounded-md absolute px-1 py-2 w-[154px] top-[70%] right-[4%] z-30"
  >
    <button class="absolute -top-[10px] -right-[10px] inline-block" @click="onClick">
      <Close />
    </button>
    <ul>
      <li
        v-for="option in cardOptions"
        :key="option.option"
        class="border-b border-[#E5EEFE] border-solid last:border-b-0 pb-[6px] last:pb-0 text-[#383A47] last:text-[#D30000]"
      >
        <button
          class="w-full align-middle text-left font-medium text-sm px-2 py-1 leading-[18.9px] hover:rounded-md hover:bg-[#E7F7EF]"
        >
          {{ option.option }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Close from '@/assets/icons/Close.vue';

const cardOptions = [
  {
    option: 'Edit',
    url: '#',
    name: 'Edit',
  },
  {
    option: 'View Profile',
    url: '#',
    name: 'View Profile',
  },
  {
    option: 'Delete',
    url: '#',
    name: 'Delete',
  },
];
const { showProfileCard } = defineProps<{ showProfileCard: boolean }>();

const emit = defineEmits(['closeProfile']);

const onClick = () => {
  emit('closeProfile');
};
</script>
