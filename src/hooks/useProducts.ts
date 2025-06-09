import type { Product } from "@interfaces/Product";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@api/apiClient";

const fetchProducts = () => apiClient<Product[]>("/skips/by-location?postcode=NR32&area=Lowestoft");

export function useProducts() {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}
