import { ChangeEvent } from 'react'
import ThemeSwitch from '@components/atoms/ThemeSwitch'
import LanguageSwitcher from '@components/molecules/LanguageSwitcher'
import MobileMenu from '@components/molecules/MobileMenu'
import useAuth from '@hooks/useAuth'
import useSidebar from '@hooks/useSidebar'
import useThemeContext from '@hooks/useThemeContext'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material'
import { setCookie } from 'cookies-next'
import NextLink from 'next/link'

export default function Header() {
  const { theme, setTheme } = useThemeContext()
  const { profile, logout } = useAuth()
  const {
    tabletMatched,
    tabletOnlyMatched,
    handleTogglePermanentDrawer,
    handleToggleTemporaryDrawer
  } = useSidebar()

  const handleToggleDrawer = () => {
    if (tabletOnlyMatched) {
      handleToggleTemporaryDrawer()
      return
    }

    handleTogglePermanentDrawer()
  }

  const handleChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    const newTheme = checked ? 'dark' : 'light'

    setCookie('theme', newTheme)
    setTheme(newTheme)
  }

  const handleLogout = () => {
    if (!profile) return
    logout()
  }

  return (
    <Toolbar className="!px-3 tablet:!px-6">
      {tabletMatched && (
        <IconButton
          onClick={handleToggleDrawer}
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        MUI
      </Typography>

      <Box className="flex items-center">
        <LanguageSwitcher />

        <FormControlLabel
          className="select-none"
          control={
            <ThemeSwitch
              checked={theme === 'dark'}
              onChange={handleChangeTheme}
            />
          }
          label="Mode"
        />

        {tabletMatched ? (
          <>
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' }
            ].map(({ label, href }) => (
              <Button
                key={label}
                component={NextLink}
                href={href}
                sx={{ color: '#fff' }}
              >
                {label}
              </Button>
            ))}

            <Button
              component={profile ? 'div' : NextLink}
              href={profile ? undefined : '/login'}
              sx={{ color: '#fff' }}
              onClick={handleLogout}
            >
              {profile ? 'Logout' : 'Login'}
            </Button>
          </>
        ) : (
          <MobileMenu />
        )}
      </Box>
    </Toolbar>
  )
}
