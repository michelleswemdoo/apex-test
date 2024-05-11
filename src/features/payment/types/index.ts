export type User = {
  created_at: string;
  email: string;
  email_verified_at: string;
  id: number;
  last_login_at: string;
  name: string;
  status: string;
  updated_at: string;
};

export type Currency = 'USD' | 'NGN';

export type Payment = {
  amount: number;
  created_at: string;
  currency: Currency;
  id: number;
  payment_expected_at: string;
  payment_made_at: string;
  updated_at: string;
  user: User;
  user_id: number;
};

export type PaymentPagination = {
  url: string | null;
  label: string;
  active: boolean;
};

export type PaymentApiResponse = {
  current_page: number;
  data: Payment[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaymentPagination[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};
