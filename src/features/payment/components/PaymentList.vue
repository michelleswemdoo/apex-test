<template>
  <div class="bg-white rounded-lg border-solid border-y-2">
    <table class="w-full">
      <thead>
        <tr>
          <th
            class="text-left font-normal text-gray-500 py-3 px-6 bg-white rounded-lg border-solid border-y-2"
            v-for="(header, index) in tableHeaders"
            :key="index"
          >
            {{ header }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr class="border-b-2 border-solid" v-for="payment in data?.data" :key="payment.id">
          <PaymentTableRow :payment="payment" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import PaymentTableRow from '@/features/payment/components/PaymentTableRow.vue';

import { useGetPayments } from '../composables/useGetPayments';

const tableHeaders = ['Name', 'User status', 'Payment Status', 'Amount'];

const { data, isLoading } = useGetPayments();
</script>
