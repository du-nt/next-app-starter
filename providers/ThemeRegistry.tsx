'use client'

import { PropsWithChildren } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { useLocale } from 'next-intl'
import { SnackbarKey, SnackbarProvider } from 'notistack'

import SnackbarCloseButton from '@/components/atoms/SnackbarCloseButton'
import Spinner from '@/components/atoms/Spinner'
import useAuth from '@/hooks/useAuth'
import useThemeContext from '@/hooks/useThemeContext'
import { darkTheme, lightTheme } from '@/libs/theme'

import 'dayjs/locale/ja'

export default function ThemeRegistry({ children }: PropsWithChildren) {
  const { theme } = useThemeContext()
  const locale = useLocale()
  const { inittialLoading } = useAuth({ enabled: true })

  const snackbarAction = (snackbarKey: SnackbarKey) => (
    <SnackbarCloseButton snackbarKey={snackbarKey} />
  )

  if (inittialLoading) return <Spinner />

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <SnackbarProvider
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}
        autoHideDuration={3000}
        disableWindowBlurListener
        preventDuplicate
        action={snackbarAction}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
          {children}
        </LocalizationProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}
