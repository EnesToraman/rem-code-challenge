import InformativeBox from "@components/InformativeBox";
import ProductList from "@components/ProductList";
import SelectedProductBar from "@components/SelectedProductBar";
import type { Product } from "@interfaces/Product";

interface SelectProductProps {
    handleNextStep: () => void;
    selectedProduct: Product | null;
    setSelectedProduct: (product: Product | null) => void;
}

const SelectProduct: React.FC<SelectProductProps> = ({ selectedProduct, setSelectedProduct, handleNextStep }) => {

    return (
        <>
            <ProductList
                selectedProduct={selectedProduct}
                onSelectProduct={setSelectedProduct}
            />
            <InformativeBox />
            <SelectedProductBar
                product={selectedProduct}
                onNext={handleNextStep}
            />
        </>
    )
}

export default SelectProduct