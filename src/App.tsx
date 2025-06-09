import Stepper from "@components/Stepper";
import SelectProduct from "@components/SelectProduct";
import OtherStepsContent from "@components/OtherStepsContent";
import ThemeToggleButton from "@components/ThemeToggleButton";
import { useEffect, useState } from "react";
import type { Product } from "@interfaces/Product";

const stepLabels = {
  Postcode: "Postcode",
  WasteType: "Waste Type",
  SelectSkip: "Select Skip",
  PermitCheck: "Permit Check",
  ChooseDate: "Choose Date",
  Payment: "Payment"
};

const steps = [
  { label: stepLabels.Postcode },
  { label: stepLabels.WasteType },
  { label: stepLabels.SelectSkip },
  { label: stepLabels.PermitCheck },
  { label: stepLabels.ChooseDate },
  { label: stepLabels.Payment }
];

function App() {
  const [activeStepLabel, setActiveStepLabel] = useState<string>(stepLabels.SelectSkip);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const isLastStep = activeStepLabel === steps[steps.length - 1].label;

  useEffect(() => {
    document.title = `${activeStepLabel} - REM Waste Management`;
  }, [activeStepLabel]);

  const handleNextStep = () => {
    const currentIndex = steps.findIndex(step => step.label === activeStepLabel);
    const nextIndex = currentIndex + 1;

    if (nextIndex < steps.length) {
      setActiveStepLabel(steps[nextIndex].label);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pb-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-[1600px] w-full px-8 py-6">
        <div className="pt-4 pb-6">
          <Stepper
            steps={steps}
            activeStepLabel={activeStepLabel}
            onStepChange={setActiveStepLabel}
          />
        </div>
        {activeStepLabel === stepLabels.SelectSkip ? (
          <SelectProduct
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            handleNextStep={handleNextStep}
          />
        ) : (
          <OtherStepsContent
            activeStepLabel={activeStepLabel}
            isLastStep={isLastStep}
            onNext={handleNextStep}
          />
        )}
        <ThemeToggleButton />
      </div>
    </div>
  );
}

export default App;
