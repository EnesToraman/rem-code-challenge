export interface Product {
  id: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  area: string;
  forbidden: boolean;
  hire_period_days: number;
  price_before_vat: number;
  size: number;
  transport_cost: number | null;
  vat: number;
  postcode: string;
};