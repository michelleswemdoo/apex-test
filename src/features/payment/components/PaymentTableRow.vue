<template>
  <!-- Name  -->
  <td class="py-3 px-6">
    <p class="text-base font-semibold leading-6 tracking-wide text-left">
      {{ payment.user.name }}
    </p>
    <p class="text-gray-500 text-base font-medium leading-6 tracking-wide text-left">
      {{ payment.user.email }}
    </p>
  </td>

  <!-- User Status -->
  <td class="py-3 px-6">
    <AppBadgeChip
      :class="{
        'bg-[#e7f7ef] text-[#0daf60]': payment.user.status === 'active',
        'bg-[#fff0e6] text-[#fe974b]': payment.user.status === 'inactive',
      }"
    >
      {{ payment.user.status }}
    </AppBadgeChip>

    <p>
      Last Login:
      <template v-if="payment.user.last_login_at">
        {{ formatDate(payment.user.last_login_at) }}
      </template>
    </p>
  </td>

  <!-- Payment Status -->
  <td class="py-3 px-6">
    <AppBadgeChip
      :class="{
        'bg-[#f5f0ff] text-[#8c62ff]': checkPaymentStatus(payment) === 'Paid',
        'bg-[#fff0ef] text-[#fe7171]': checkPaymentStatus(payment) === 'Overdue',
        'bg-[#fef7dc] text-[#dcb629]': checkPaymentStatus(payment) === 'Unpaid',
      }"
    >
      {{ checkPaymentStatus(payment) }}
    </AppBadgeChip>
    <template v-if="payment.payment_made_at">
      {{ formatDate(payment.payment_made_at) }}
    </template>
  </td>

  <!-- Amount -->
  <td class="py-3 px-6">
    <p class="font-semibold">${{ payment.amount }}</p>

    <p>{{ payment.currency }}</p>
  </td>
</template>

<script setup lang="ts">
import { formatDate } from '@/utils/formateDate';
import { type Payment } from '@/features/payment/types';
import AppBadgeChip from '@/components/ui/AppBadgeChip.vue';
import { checkPaymentStatus } from '@/features/payment/utils/checkPaymentStatus';

defineProps<{
  payment: Payment;
}>();
</script>
