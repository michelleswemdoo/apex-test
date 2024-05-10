<template>
  <div v-if="data" class="px-6 py-4 flex justify-between items-center">
    <p>Total Transactions: {{ data.total || 0 }}</p>

    <div class="flex gap-1">
      <!-- Prev button -->
      <button
        v-if="data.prev_page_url"
        @click="goToPage(currentPage - 1)"
        class="px-3 py-1 text-gray-500 bg-white hover:bg-blue-200 disabled:bg-blue-300 rounded-lg"
      >
        Prev
      </button>

      <!-- First page -->
      <button
        class="px-3 py-1 rounded-lg"
        :class="{ 'bg-[#e7f7ef] text-[#0daf60]': currentPage === 1 }"
        @click="goToPage(1)"
      >
        1
      </button>

      <!-- Conditional leading ellipsis -->
      <span v-if="currentPage > 3 && data.last_page > 5" class="px-3 py-1">...</span>

      <!-- Dynamic middle pages -->
      <button
        v-for="page in middlePages"
        :key="page"
        :class="{ 'bg-[#e7f7ef] text-[#0daf60]': page === currentPage }"
        @click="goToPage(page)"
        class="px-3 py-1 rounded-lg"
      >
        {{ page }}
      </button>

      <!-- Conditional trailing ellipsis -->
      <span v-if="currentPage < data.last_page - 2 && data.last_page > 5" class="px-3 py-1"
        >...</span
      >

      <!-- Last page -->
      <button
        v-if="data.last_page > 1"
        :class="{ 'bg-[#e7f7ef] text-[#0daf60]': currentPage === data.last_page }"
        @click="goToPage(data.last_page)"
        class="px-3 py-1 rounded-lg"
      >
        {{ data.last_page }}
      </button>

      <!-- Next button -->
      <button
        v-if="data.next_page_url"
        @click="goToPage(currentPage + 1)"
        class="px-3 py-1 text-gray-500 bg-white hover:bg-blue-200 rounded-lg"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useGetPayments } from '../composables/useGetPayments';

const router = useRouter();
const route = useRoute();
const { data } = useGetPayments();

const currentPage = ref(1);

watchEffect(() => {
  currentPage.value = parseInt(route.query.page as string) || 1;
});

const middlePages = computed(() => {
  const pages: number[] = [];

  if (!data.value) return pages;
  let start = Math.max(currentPage.value - 2, 2);
  let end = Math.min(currentPage.value + 2, data.value.last_page - 1);

  for (let i = start; i <= end; i++) pages.push(i);
  return pages;
});

const goToPage = (pageNumber: number) => {
  router.push({ path: router.currentRoute.value.path, query: { page: pageNumber } });
};
</script>
