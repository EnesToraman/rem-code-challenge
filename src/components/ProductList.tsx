import { useProducts } from "@hooks/useProducts";
import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";
import type { Product } from "@interfaces/Product";

interface ProductListProps {
  selectedProduct: Product | null;
  onSelectProduct: (product: Product | null) => void;
};

export default function ProductList({
  selectedProduct,
  onSelectProduct
}: ProductListProps) {
  const { data: products, isLoading, error } = useProducts();

  const handleSelect = (product: Product) => {
    if (selectedProduct?.id === product.id) {
      onSelectProduct(null);
    } else {
      onSelectProduct(product);
    }
  };

  if (error) return <div>An error occured: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {isLoading
        ? Array.from({ length: 9 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        : products?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isSelected={selectedProduct?.id === product.id}
              onSelect={() => handleSelect(product)}
            />
          ))}
    </div>
  );
}
