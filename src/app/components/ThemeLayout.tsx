'use client'

import { ReactNode } from 'react'
import { useTheme } from '../../context'
import { HTMLBody } from '../../types'

interface ThemeLayoutProps extends HTMLBody {
  children: ReactNode
  otherClass?: string
}

export function ThemeLayout({ children, otherClass, ...rest }: ThemeLayoutProps) {
  const { theme } = useTheme()

  return (
    <body className={`${theme ? 'dark' : ''} ${otherClass} h-screen w-screen`} {...rest}>
      {children}
    </body>
  )
}
