import { SidebarStatus } from '@types'
import { atom } from 'recoil'

const sidebarState = atom<SidebarStatus>({
  key: 'sidebarState',
  default: {
    isPermanentDrawerCollapsed: false,
    isTemporaryDrawerCollapse: true
  }
})

export default sidebarState
