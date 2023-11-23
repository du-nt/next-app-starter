import { Theme, useMediaQuery } from '@mui/material'
import { useRecoilState } from 'recoil'

import sidebarState from '@/stores/sidebar'

export default function useSidebar() {
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarState)

  const lgMatched = useMediaQuery<Theme>((theme) => theme.breakpoints.up('lg'))
  const tabletMatched = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.up('tablet')
  )
  const tabletOnlyMatched = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.between('tablet', 'lg')
  )

  const handleTogglePermanentDrawer = () => {
    setSidebarStatus((prevState) => ({
      ...prevState,
      isPermanentDrawerCollapsed: !prevState.isPermanentDrawerCollapsed
    }))
  }

  const handleToggleTemporaryDrawer = () => {
    setSidebarStatus((prevState) => ({
      ...prevState,
      isTemporaryDrawerCollapse: !prevState.isTemporaryDrawerCollapse
    }))
  }

  const handleCloseTemporaryDrawer = () => {
    if (!sidebarStatus.isTemporaryDrawerCollapse) {
      setSidebarStatus((prevState) => ({
        ...prevState,
        isTemporaryDrawerCollapse: true
      }))
    }
  }

  return {
    ...sidebarStatus,
    lgMatched,
    tabletMatched,
    tabletOnlyMatched,
    handleTogglePermanentDrawer,
    handleToggleTemporaryDrawer,
    handleCloseTemporaryDrawer
  }
}
