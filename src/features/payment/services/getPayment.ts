import { axiosInstance } from '@/config/axios';
import type { PaymentApiResponse } from '../types';

type GetPaymentQueryParams = {
  page?: string;
  per_page?: string;
};

export const getPayments = async (
  params: GetPaymentQueryParams = {},
): Promise<PaymentApiResponse | undefined> => {
  try {
    const response = await axiosInstance.get<PaymentApiResponse>('/transactions', {
      params,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return undefined;
  }
};
