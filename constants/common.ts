import en from '@messages/en'
import ja from '@messages/ja'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined'
import HistoryIcon from '@mui/icons-material/History'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import HomeIcon from '@mui/icons-material/Home'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined'

class Const {
  static get DRAWER_WIDTH() {
    return 240
  }

  static get MINI_DRAWER_WIDTH() {
    return 72
  }

  static get PRIMARY_SIDEBAR_MENU() {
    return [
      {
        path: '/',
        title: 'common.sidebar.home',
        inactiveIcon: HomeOutlinedIcon,
        activeIcon: HomeIcon
      },
      {
        path: '/library',
        title: 'common.sidebar.library',
        inactiveIcon: VideoLibraryOutlinedIcon,
        activeIcon: VideoLibraryIcon
      }
    ]
  }

  static get SECONDARY_SIDEBAR_MENU() {
    return [
      {
        path: '/history',
        title: 'common.sidebar.history',
        inactiveIcon: HistoryOutlinedIcon,
        activeIcon: HistoryIcon
      },
      {
        path: '/music',
        title: 'common.sidebar.music',
        inactiveIcon: HeadsetMicOutlinedIcon,
        activeIcon: HeadsetMicIcon
      }
    ]
  }

  static get NAVIGATION_BAR_ITEMS() {
    return [
      {
        path: '/',
        title: 'common.navigationBar.home',
        inactiveIcon: HomeOutlinedIcon,
        activeIcon: HomeIcon
      },
      {
        path: '/explore',
        title: 'common.navigationBar.explore',
        inactiveIcon: RocketLaunchOutlinedIcon,
        activeIcon: RocketLaunchIcon
      },
      {
        path: '/music',
        title: 'common.navigationBar.music',
        inactiveIcon: HeadsetMicOutlinedIcon,
        activeIcon: HeadsetMicIcon
      },
      {
        path: '/library',
        title: 'common.navigationBar.library',
        inactiveIcon: VideoLibraryOutlinedIcon,
        activeIcon: VideoLibraryIcon
      }
    ]
  }

  static get LOCALES() {
    return { en: 'en-US', ja: 'ja-JP' }
  }

  static get DEFAULT_LOCALE() {
    return 'ja'
  }

  static get LOCALE_COOKIE_NAME() {
    return 'NEXT_LOCALE'
  }

  static get TOAST_ERRORS() {
    return Object.keys(en.common.toastError)
  }

  static get TRANSLATIONS_OBJ() {
    return { en, ja }
  }

  static get VALIDATOR_ERRORS() {
    return Object.keys(en.common.validationError)
  }
}

export default Const
