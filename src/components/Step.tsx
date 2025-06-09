import React from 'react'

interface StepProps {
  index: number
  label: string
  isCompleted: boolean
  isClickable: boolean
  onClick: (index: number) => void
}

const Step: React.FC<StepProps> = ({ index, label, isCompleted, isClickable, onClick }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-center transition
        ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed'}
      `}
      onClick={() => {
        if (isClickable) onClick(index)
      }}
    >
      <div
        className={`w-full h-1 rounded mb-3 transition
          ${isCompleted ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'}
          ${isClickable ? 'hover:bg-blue-700' : ''}
        `}
      />
      <div
        className={`text-sm text-center transition
          ${isCompleted ? 'text-blue-700 dark:text-blue-300' : 'text-gray-600 dark:text-gray-100'}
        `}
      >
        {label}
      </div>
    </div>
  )
}

export default Step
