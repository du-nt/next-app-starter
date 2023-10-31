'use client'

import { PropsWithChildren } from 'react'
import Spinner from '@components/atoms/Spinner'
import DefaultLayout from '@components/templates/DefaultLayout'
import useAuth from '@hooks/useAuth'

export default function PublicRoute({ children }: PropsWithChildren) {
  const { inittialLoading } = useAuth({ enabled: false })

  if (inittialLoading) return <Spinner />

  return <DefaultLayout>{children}</DefaultLayout>
}
