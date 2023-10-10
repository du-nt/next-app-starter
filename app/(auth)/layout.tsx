'use client'

import { PropsWithChildren } from 'react'
import Spinner from '@components/atoms/Spinner'
import EmptyLayout from '@components/templates/EmptyLayout'
import useAuth from '@hooks/useAuth'
import { redirect, useSearchParams } from 'next/navigation'

export default function RedirectHomeRoute({ children }: PropsWithChildren) {
  const { profile, inittialLoading } = useAuth({ enabled: false })
  const searchParams = useSearchParams()

  const from = searchParams.get('from') || '/'

  if (!inittialLoading && profile) {
    redirect(from)
  }

  if (inittialLoading) return <Spinner />

  return <EmptyLayout>{children}</EmptyLayout>
}
