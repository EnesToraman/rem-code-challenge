import React from 'react'
import Badge from '@components/Badge'
import smallSkipImage from '@assets/images/small-skip.jpg';
import largeSkipImage from '@assets/images/large-skip.jpg';
import type { Product } from '@interfaces/Product';

interface ProductCardProps {
  product: Product
  isSelected: boolean
  onSelect: (product: Product) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isSelected, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(product)}
      className={`flex flex-col sm:flex-row items-stretch border rounded-2xl p-4 cursor-pointer transition gap-4
    ${isSelected ? 'border-blue-600 bg-blue-50 dark:bg-blue-900' : 'border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'}
  `}
    >
      <div className="flex-shrink-0 w-full sm:w-32 bg-gray-200 rounded-md overflow-hidden">
        <img
          src={product.size >= 20 ? largeSkipImage : smallSkipImage}
          alt={`${product.size} yards product`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xl font-bold text-gray-600 dark:text-gray-100">
            {product.size} Yards
          </span>
          <span className="text-2xl font-extrabold text-blue-500 dark:text-blue-300">
            £{product.price_before_vat}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-blue-100">
            {product.hire_period_days} days hire
          </span>
          <Badge allowed={product.allowed_on_road} label="On Road" />
          <Badge allowed={product.allows_heavy_waste} label="Heavy Waste" />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
