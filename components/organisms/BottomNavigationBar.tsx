import { SyntheticEvent, useState } from 'react'
import Const from '@constants/common'
import { AppBar, BottomNavigation, BottomNavigationAction } from '@mui/material'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function BottomNavigationBar() {
  const t = useTranslations()
  const pathname = usePathname()
  const [value, setValue] = useState(pathname)

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <AppBar
      component="nav"
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, top: 'unset' }}
      elevation={3}
    >
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        {Const.NAVIGATION_BAR_ITEMS.map(
          ({
            path,
            title,
            activeIcon: ActiveIcon,
            inactiveIcon: InactiveIcon
          }) => (
            <BottomNavigationAction
              key={path}
              value={path}
              href={path}
              component={NextLink}
              label={t(title)}
              icon={pathname === path ? <ActiveIcon /> : <InactiveIcon />}
              sx={{
                maxWidth: 'unset',
                '& .MuiBottomNavigationAction-label': {
                  transition: 'none',
                  '&.Mui-selected': {
                    fontSize: '0.75rem'
                  }
                }
              }}
            />
          )
        )}
      </BottomNavigation>
    </AppBar>
  )
}
