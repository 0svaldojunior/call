'use client'

import { colors } from '@drofens/tokens'
import { ReactNode } from 'react'
import { HTMLButton } from '../../types/Html'
import { MinWidth } from '../../utils'

interface ButtonProps extends HTMLButton {
  children?: ReactNode
  isOutline?: boolean
  disabled?: boolean
  width?: number
  variant?:
    | 'DEFAULT'
    | 'DANGER'
    | 'WARNING'
    | 'DISABLED'
    | 'OutlineNone'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
}

export function Button({
  children,
  isOutline = false,
  disabled = false,
  width = 10,
  variant = 'DEFAULT',
  ...rest
}: ButtonProps) {
  function setOutline(): string {
    if (variant === 'OutlineNone') {
      return 'text-gray-900 dark:text-gray-50'
    } else if (isOutline) {
      if (variant === 'DISABLED') {
        return '!bg-transparent !text-gray-300'
      } else return '!bg-transparent'
    } else return '!text-gray-50 border-transparent'
  }

  const minWidth = MinWidth(width)

  const outline = setOutline()

  const isDisabled = disabled
    ? 'cursor-not-allowed hover:brightness-100'
    : 'cursor-pointer hover:brightness-125'

  const variants = {
    DEFAULT: 'bg-gray text-gray border-gray',
    DANGER: 'bg-red text-red border-red',
    WARNING: 'bg-orange text-orange border-orange',
    DISABLED: 'bg-gray-300 text-gray-50 border-gray-300',
    OutlineNone: 'bg-transparent border-transparent',
    yellow: 'bg-yellow text-yellow border-yellow',
    green: 'bg-green text-green border-green',
    teal: 'bg-teal text-teal border-teal',
    blue: 'bg-blue text-blue border-blue',
    cyan: 'bg-cyan text-cyan border-cyan',
    purple: 'bg-purple text-purple border-purple',
    pink: 'bg-pink text-pink border-pink',
  }

  return (
    <button
      className={`${variants[variant]} ${isDisabled} ${outline} rounded border-4 border-solid transition duration-[250ms] focus:shadow[0_0_0_2px_${colors.gray[100]}] ${variants[variant]}`}
      {...rest}
    >
      <div
        className={`box-border flex ${minWidth} items-center justify-center gap-2 rounded p-4 text-center text-2xl font-bold`}
      >
        {children}
      </div>
    </button>
  )
}
