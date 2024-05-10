<template>
  <PaymentNav />

  <div class="bg-white rounded-lg overflow-hidden">
    <PaymentList />
  </div>
</template>

<script setup lang="ts">
import PaymentNav from '@/features/payment/components/PaymentNav.vue';
import PaymentList from '@/features/payment/components/PaymentList.vue';
</script>
