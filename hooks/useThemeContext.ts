import { useContext } from 'react'

import { ThemeContext } from '@/providers/RootProvider'

export default function useThemeContext() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider'
    )
  }

  return context
}
