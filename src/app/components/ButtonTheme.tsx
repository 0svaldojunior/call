'use client'

import { Moon, Sun } from 'phosphor-react'
import { useTheme } from '../../context'
import { HTMLButton } from '../../types'
import { Button } from './Button'

interface ButtonThemeProps extends HTMLButton {}

export function ButtonTheme({ ...rest }: ButtonThemeProps) {
  const { handleSwitchTheme, theme } = useTheme()

  return (
    <Button onClick={handleSwitchTheme} variant="OutlineNone" width={14} {...rest}>
      {theme ? <Sun size={45} weight='fill'/> : <Moon size={45} weight='fill'/>}
    </Button>
  )
}
