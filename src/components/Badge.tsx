import React from 'react'

interface BadgeProps {
  allowed: boolean
  label: string
}

const Badge: React.FC<BadgeProps> = ({ allowed, label }) => {
  return (
    <span
      className={`flex items-center gap-1 px-2 py-1 text-xs rounded 
        ${allowed
          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
        }`}
    >
      {allowed ? '✓' : '✕'} {label}
    </span>
  )
}

export default Badge
