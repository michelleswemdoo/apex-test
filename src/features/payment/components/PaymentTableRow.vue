<template>
  <td class="py-3 px-6">
    <input type="checkbox" class="accent-slate-500" />
  </td>
  <!-- Name  -->
  <td class="py-3 px-6">
    <p class="text-sm font-semibold leading-6 tracking-wide text-left">
      {{ payment.user.name }}
    </p>
    <p class="text-gray-500 text-sm font-medium leading-6 tracking-wide text-left">
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

    <p class="text-sm">
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
      <span class="text-sm">{{ formatDate(payment.payment_made_at) }}</span>
    </template>
  </td>

  <!-- Amount -->
  <td class="py-3 px-6">
    <p class="font-semibold text-sm">
      {{ currentSymbolMap[payment.currency] }}{{ payment.amount }}
    </p>

    <p class="text-sm text-[#88888A]">{{ payment.currency }}</p>
  </td>

  <!-- Ellipsis -->
  <td class="py-3 px-6">
    <button @click="showProfileCard = true"><EllipsisIcon /></button>
    <ProfileCard :showProfileCard="showProfileCard" @closeProfile="showProfileCard = false" />
  </td>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { formatDate } from '@/utils/formateDate';
import type { Currency, Payment } from '@/features/payment/types';
import AppBadgeChip from '@/components/ui/AppBadgeChip.vue';
import { checkPaymentStatus } from '@/features/payment/utils/checkPaymentStatus';
import EllipsisIcon from '@/assets/icons/EllipsisIcon.vue';
import ProfileCard from './ProfileCard.vue';

const currentSymbolMap: Record<Currency, string> = {
  USD: '$',
  NGN: '₦',
};
const showProfileCard = ref(false);

defineProps<{
  payment: Payment;
}>();
</script>
