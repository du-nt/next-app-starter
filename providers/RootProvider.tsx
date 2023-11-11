'use client'

import { createContext, useMemo, useState } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'

import queryClient from '@/libs/react-query'
import {
  InitialLoadingContextType,
  RootProviderProps,
  Theme,
  ThemeContextType
} from '@/types'

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const InitialLoadingContext =
  createContext<InitialLoadingContextType | null>(null)

export default function RootProvider({
  children,
  savedTheme
}: RootProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const isDarkTheme = savedTheme === 'dark'
    return isDarkTheme ? 'dark' : 'light'
  })

  const themeValue = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeContext.Provider value={themeValue}>
          {children}
        </ThemeContext.Provider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}
