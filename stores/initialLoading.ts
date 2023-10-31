import { atom } from 'recoil'

const inittialLoadingState = atom<boolean>({
  key: 'inittialLoadingState',
  default: true
})

export default inittialLoadingState
