import { Drawer, Toolbar } from '@mui/material'

import SidebarMenu from '@/components/atoms/SidebarMenu'
import TemporaryDrawer from '@/components/molecules/TemporaryDrawer'
import Const from '@/constants/common'
import useSidebar from '@/hooks/useSidebar'

export default function Sidebar() {
  const { lgMatched, tabletOnlyMatched, isPermanentDrawerCollapsed } =
    useSidebar()

  return (
    <>
      {tabletOnlyMatched && <TemporaryDrawer />}

      <Drawer
        variant="permanent"
        sx={{
          width:
            isPermanentDrawerCollapsed || !lgMatched
              ? Const.MINI_DRAWER_WIDTH
              : Const.DRAWER_WIDTH,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width:
              isPermanentDrawerCollapsed || !lgMatched
                ? Const.MINI_DRAWER_WIDTH
                : Const.DRAWER_WIDTH,
            boxSizing: 'border-box'
          }
        }}
      >
        <Toolbar />
        <SidebarMenu isCollapsed={!lgMatched || isPermanentDrawerCollapsed} />
      </Drawer>
    </>
  )
}
