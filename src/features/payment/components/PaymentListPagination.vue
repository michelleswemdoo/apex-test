<template>
  <div v-if="data" class="px-6 py-4 flex justify-between items-center">
    <div>
      <label class="flex items-center">
        <span class="mr-3 text-sm text-[#a0aec0]">Show Result</span>

        <select
          v-model="perPage"
          class="border border-[#d5d5d8] accent-[#d4d4df] p-1 font-semibold cursor-pointer rounded-md"
        >
          <option v-for="option in perPageOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </label>
    </div>

    <div class="flex gap-1">
      <!-- Prev button -->

      <AppButton
        class="text-[#a0aec0]"
        :disabled="data.current_page === 1 || !data.prev_page_url"
        @click="goToPage(currentPage - 1)"
      >
        <ChevronIcon />
      </AppButton>

      <!-- First page -->
      <AppButton
        :class="[
          { 'bg-[#e7f7ef] text-[#0daf60]': currentPage === 1, 'text-[#a0aec0]': currentPage !== 1 },
        ]"
        @click="goToPage(1)"
      >
        1
      </AppButton>

      <!-- Conditional leading ellipsis -->
      <span class="text-[#a0aec0] px-3 py-1" v-if="currentPage > 3 && data.last_page > 5">...</span>

      <!-- Dynamic middle pages -->
      <AppButton
        v-for="page in middlePages"
        :key="page"
        :class="{
          'bg-[#e7f7ef] text-[#0daf60]': page === currentPage,
          'text-[#a0aec0]': page !== currentPage,
        }"
        @click="goToPage(page)"
      >
        {{ page }}
      </AppButton>

      <!-- Conditional trailing ellipsis -->
      <span
        v-if="currentPage < data.last_page - 2 && data.last_page > 5"
        class="text-[#a0aec0] px-3 py-1"
      >
        ...
      </span>

      <!-- Last page -->
      <AppButton
        v-if="data.last_page > 1"
        :class="{
          'bg-[#e7f7ef] text-[#0daf60]': currentPage === data.last_page,
          'text-[#A0AEC0]': currentPage !== data.last_page,
        }"
        @click="goToPage(data.last_page)"
      >
        {{ data.last_page }}
      </AppButton>

      <!-- Next button -->
      <AppButton :disabled="currentPage === data.last_page" @click="goToPage(currentPage + 1)">
        <ChevronIcon class="rotate-180 text-[#A0AEC0]" />
      </AppButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, ref, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useGetPayments } from '../composables/useGetPayments';
import ChevronIcon from '@/assets/icons/ChevronIcon.vue';
import AppButton from '@/components/ui/AppButton.vue';

const router = useRouter();
const route = useRoute();
const { data } = useGetPayments();

const currentPage = ref(1);
const perPageOptions = [6, 12, 20, 50, 100];
const perPage = ref(parseInt(route.query.per_page as string) || perPageOptions[0]);

watchEffect(() => {
  currentPage.value = parseInt(route.query.page as string) || 1;
});

watch(perPage, (newValue) => {
  router.push({ path: route.path, query: { ...route.query, per_page: newValue } });
});

const goToPage = (pageNumber: number) => {
  const path = router.currentRoute.value.path;
  router.push({ path, query: { ...route.query, page: pageNumber } });
};

const middlePages = computed(() => {
  const pages: number[] = [];

  if (!data.value) return pages;
  let start = Math.max(currentPage.value - 2, 2);
  let end = Math.min(currentPage.value + 2, data.value.last_page - 1);

  for (let i = start; i <= end; i++) pages.push(i);
  return pages;
});
</script>
