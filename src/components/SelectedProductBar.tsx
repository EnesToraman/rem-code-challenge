import React from "react";
import type { Product } from "@interfaces/Product";

interface SelectedProductBarProps {
  product: Product | null;
  onNext: () => void;
}

const SelectedProductBar: React.FC<SelectedProductBarProps> = ({ product, onNext }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full px-4 sm:px-8 py-3 sm:py-4 bg-white dark:bg-gray-900 shadow-[0_-6px_16px_rgba(0,0,0,0.14)] transition-transform duration-300 z-50
      ${product ? "translate-y-0" : "translate-y-full"}
      min-h-16 sm:min-h-20
    `}
    >
      {product && (
        <div className="flex flex-row items-center justify-end max-w-[1600px] mx-auto gap-3 sm:gap-6">
          <div className="flex flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <span className="text-base sm:text-xl font-bold text-gray-600 dark:text-gray-100">
              {product.size} Yards
            </span>
            <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-blue-100">
              {product.hire_period_days} days hire
            </span>
            <span className="text-lg sm:text-2xl font-extrabold text-blue-700 dark:text-blue-300">
              £{product.price_before_vat}
            </span>
          </div>
          <button
            onClick={onNext}
            className="cursor-pointer px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition sm:w-auto"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedProductBar;
