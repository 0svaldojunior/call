import { Roboto_Flex as Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import { ThemeRoot } from './components/ThemeRoot'
import './globals.css'

interface RootLayoutProps {
  children: ReactNode
}

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'Server Components',
  description: 'Server Components Created by Drofens',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <ThemeRoot otherClass={`${roboto.variable} `}>{children}</ThemeRoot>
}
