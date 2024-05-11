<template>
  <div class="bg-white rounded-lg border-solid border-y">
    <table class="w-full">
      <thead>
        <tr>
          <th
            class="text-left font-normal text-sm text-gray-500 py-3 px-6 bg-white rounded-lg border-solid border-y-2"
            v-for="(header, index) in tableHeaders"
            :key="index"
          >
            {{ header }}
          </th>
        </tr>
      </thead>

      <tbody>
        <!-- Loading skeleton -->
        <template v-if="isPending || isLoading">
          <tr v-for="index in 10" :key="index">
            <td :colspan="tableHeaders.length">
              <PaymentTableRowLoadingSkeleton />
            </td>
          </tr>
        </template>

        <div class="m-6" v-else-if="isError">Unable to load payments: {{ error }}</div>

        <tr v-else class="border-b border-solid" v-for="payment in data?.data" :key="payment.id">
          <PaymentTableRow :payment="payment" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import PaymentTableRow from '@/features/payment/components/PaymentTableRow.vue';

import { useGetPayments } from '../composables/useGetPayments';
import PaymentTableRowLoadingSkeleton from './PaymentTableRowLoadingSkeleton.vue';

const tableHeaders = ['', 'Name', 'User status', 'Payment Status', 'Amount', ''];

const { data, error, isError, isLoading, isPending } = useGetPayments();
</script>
