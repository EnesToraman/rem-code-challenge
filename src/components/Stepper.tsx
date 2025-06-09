import React from 'react'
import Step from './Step'

interface StepData {
  label: string
}

interface StepperProps {
  steps: StepData[]
  activeStepLabel: string
  onStepChange: (stepLabel: string) => void
}

const Stepper: React.FC<StepperProps> = ({ steps, activeStepLabel, onStepChange }) => {
  const activeStepIndex = steps.findIndex(step => step.label === activeStepLabel)

  return (
    <div className="w-full max-w-full overflow-x-auto hide-scrollbar">
      <div className="min-w-max flex gap-2">
        {steps.map((step, index) => {
          const isCompleted = index <= activeStepIndex
          const isClickable = index <= activeStepIndex

          return (
            <Step
              key={step.label}
              index={index}
              label={step.label}
              isCompleted={isCompleted}
              isClickable={isClickable}
              onClick={() => onStepChange(step.label)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Stepper
