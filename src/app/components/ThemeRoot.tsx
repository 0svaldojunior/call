import { ReactNode } from 'react'
import { ThemeProvider } from '../../context'
import { ThemeLayout } from './ThemeLayout'

interface ThemeRootProps {
  children: ReactNode
  otherClass?: string
}

export function ThemeRoot({ children, otherClass }: ThemeRootProps) {
  return (
    <ThemeProvider>
      <html lang="en">
        <ThemeLayout otherClass={otherClass}>{children}</ThemeLayout>
      </html>
    </ThemeProvider>
  )
}
