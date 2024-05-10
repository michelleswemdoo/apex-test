<template>
  <PaymentNav />

  <div class="bg-white rounded-lg overflow-hidden">
    <PaymentList />

    <PaymentListPagination />
  </div>
</template>

<script setup lang="ts">
import PaymentNav from '@/features/payment/components/PaymentNav.vue';
import PaymentList from '@/features/payment/components/PaymentList.vue';
import PaymentListPagination from './PaymentListPagination.vue';
</script>
