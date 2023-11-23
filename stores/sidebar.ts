import { atom } from 'recoil'

import { SidebarStatus } from '@/types'

const sidebarState = atom<SidebarStatus>({
  key: 'sidebarState',
  default: {
    isPermanentDrawerCollapsed: false,
    isTemporaryDrawerCollapse: true
  }
})

export default sidebarState
