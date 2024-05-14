<template>
  <div class="bg-white rounded-lg border-solid border-y">
    <!-- Filters -->
    <div class="py-3 px-6">
      <div
        class="w-min rounded-xl py-[15px] px-[19px] bg-[#FAFAFA] border border-[#EEEFF2] my-4 ml-auto mr-0 flex items-center gap-1"
      >
        <Filter />
        <span class="font-medium text-[#0CAF60] inline-block ml-2">Filter</span>
      </div>

      <div>
        <Input type="text" placeholder="name" v-model="name">Name</Input>
        <Input type="number" placeholder="amount" v-model="amount">Amount</Input>
        <Select v-model="userStatus" :options="UserStatus"> User’s Status </Select>
        <Select v-model="paymentStatus" :options="PaymentStatus"> Payment Status </Select>
      </div>
    </div>
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

        <tr
          v-else
          class="border-b border-solid relative"
          v-for="payment in data?.data"
          :key="payment.id"
        >
          <PaymentTableRow :payment="payment" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Filter from '@/assets/icons/Filter.vue';
import PaymentTableRow from '@/features/payment/components/PaymentTableRow.vue';
import Input from '@/components/ui/Input.vue';

import { useGetPayments } from '../composables/useGetPayments';
import PaymentTableRowLoadingSkeleton from './PaymentTableRowLoadingSkeleton.vue';
import Select from '@/components/ui/Select.vue';
import { useRouter, useRoute } from 'vue-router';

const name = ref('');
const amount = ref(0);
const userStatus = ref('All');
const paymentStatus = ref('All');
const router = useRouter();
const route = useRoute();

const tableHeaders = ['', 'Name', 'User status', 'Payment Status', 'Amount', ''];

watch(paymentStatus, (newValue) => {
  router.push({ path: route.path, query: { ...route.query, state: newValue.toLocaleLowerCase() } });
});

const { data, error, isError, isLoading, isPending } = useGetPayments();

const UserStatus = ['All', 'Active', 'Inactive'];
const PaymentStatus = ['All', 'Paid', 'Unpaid', 'Overdue'];
</script>
