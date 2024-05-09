<template>
  <ul class="max-w-screen-lg m-auto my-12">
    <li class="inline-block mr-4" v-for="link in navLinks" :key="link.name">
      <RouterLink
        :class="[
          'py-4 px-3',
          {
            'border-b-[#55c58d] border-solid border-b-2 text-[#55c58d]': link.active,
          },
        ]"
        :to="link.url"
      >
        {{ link.text }}
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const navLinks = [
  {
    name: 'all',
    text: 'All',
    url: '#',
    active: true,
  },
  {
    name: 'paid',
    text: 'Paid',
    url: '#',
  },
  {
    name: 'unpaid',
    text: 'Unpaid',
    url: '#',
  },
  {
    name: 'overdue',
    text: 'Overdue',
    url: '#',
  },
];
</script>
