import { onMounted, computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';
import { getPayments } from '../services/getPayment';

export const useGetPayments = () => {
  const router = useRouter();
  const route = useRoute();
  const isRouterReady = ref(false);

  const pageQuery = computed(() => route.query.page || '');
  const perPageQuery = computed(() => route.query.per_page || '');
  const stateQuery = computed(() => route.query.state || '');

  onMounted(async () => {
    await router.isReady();
    isRouterReady.value = true;
  });

  const { data, error, isPending, isError, refetch, isRefetching, isLoading } = useQuery({
    queryKey: ['payments', pageQuery, perPageQuery, stateQuery],
    queryFn: () =>
      getPayments({
        page: `${pageQuery.value}`,
        per_page: `${perPageQuery.value}`,
        state: `${stateQuery.value}`,
      }),

    enabled: isRouterReady,
  });

  return {
    data,
    isRefetching,
    isPending,
    isLoading,
    refetch,
    error,
    isError,
  };
};
