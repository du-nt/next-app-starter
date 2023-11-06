'use client'

import { PropsWithChildren } from 'react'
import EmptyLayout from '@components/templates/EmptyLayout'
import useAuth from '@hooks/useAuth'
import { redirect, useSearchParams } from 'next/navigation'

export default function RedirectHomeRoute({ children }: PropsWithChildren) {
  const { profile } = useAuth({ enabled: false })
  const searchParams = useSearchParams()

  const from = searchParams.get('from') || '/'

  if (profile) {
    redirect(from)
  }

  return <EmptyLayout>{children}</EmptyLayout>
}
