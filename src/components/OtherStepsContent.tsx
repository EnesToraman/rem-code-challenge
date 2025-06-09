import React from "react";

interface OtherStepsContentProps {
  activeStepLabel: string;
  isLastStep: boolean;
  onNext: () => void;
}

const OtherStepsContent: React.FC<OtherStepsContentProps> = ({ activeStepLabel, isLastStep, onNext }) => {
  return (
    <div className="flex items-center gap-2">
      {activeStepLabel}
      {!isLastStep && (
        <button
          onClick={onNext}
          className="cursor-pointer px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default OtherStepsContent;
