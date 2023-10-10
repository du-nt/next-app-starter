import { useContext } from 'react'
import { InitialLoadingContext } from '@providers/RootProvider'

export default function useInitialLoadingContext() {
  const context = useContext(InitialLoadingContext)

  if (!context) {
    throw new Error(
      'useInitialLoadingContext must be used within a InitialLoadingContextProvider'
    )
  }

  return context
}
