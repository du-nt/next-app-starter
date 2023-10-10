'use client'

import { PropsWithChildren } from 'react'
import Spinner from '@components/atoms/Spinner'
import DefaultLayout from '@components/templates/DefaultLayout'
import useAuth from '@hooks/useAuth'
import { redirect, usePathname } from 'next/navigation'

export default function ProtectRoute({ children }: PropsWithChildren) {
  const { profile, inittialLoading } = useAuth({ enabled: false })
  const pathname = usePathname()

  if (!inittialLoading && !profile) {
    redirect(`/login?from=${pathname}`)
  }

  if (inittialLoading) return <Spinner />

  return <DefaultLayout>{children}</DefaultLayout>
}
