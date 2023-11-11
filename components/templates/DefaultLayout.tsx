import { PropsWithChildren } from 'react'
import { AppBar, Box, Theme, Toolbar, useMediaQuery } from '@mui/material'

import HideOnScroll from '@/components/atoms/HideOnScroll'
import BottomNavigationBar from '@/components/organisms/BottomNavigationBar'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import Sidebar from '@/components/organisms/Sidebar'
import cn from '@/libs/cn'

export default function DefaultLayout({ children }: PropsWithChildren) {
  const tabletMatched = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down('tablet')
  )

  return (
    <Box>
      {tabletMatched ? (
        <HideOnScroll>
          <AppBar>
            <Header />
          </AppBar>
        </HideOnScroll>
      ) : (
        <AppBar
          component="nav"
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1
          }}
        >
          <Header />
        </AppBar>
      )}

      <Box className="flex">
        {!tabletMatched && <Sidebar />}

        <Box component="main" className="grow">
          <Toolbar />

          <Box
            className={cn('bg-red-100', {
              'pb-10': !tabletMatched
            })}
          >
            {children}
          </Box>

          <AppBar position="static" color="secondary">
            <Toolbar variant="dense">
              <Footer />
            </Toolbar>
          </AppBar>

          {tabletMatched && <Toolbar />}
        </Box>
      </Box>

      {tabletMatched && <BottomNavigationBar />}
    </Box>
  )
}
