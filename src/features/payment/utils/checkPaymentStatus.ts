import { type Payment } from '../types';

type PaymentStatus = 'Paid' | 'Overdue' | 'Unpaid';

export const checkPaymentStatus = (payment: Payment): PaymentStatus => {
  const currentDate = new Date();
  const expectedDate = new Date(payment.payment_expected_at);
  const paymentDate = payment.payment_made_at ? new Date(payment.payment_made_at) : null;

  if (paymentDate && paymentDate <= expectedDate) {
    return 'Paid';
  } else if (!paymentDate && currentDate > expectedDate) {
    return 'Overdue';
  } else {
    return 'Unpaid';
  }
};
