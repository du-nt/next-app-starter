'use client'

import { PropsWithChildren } from 'react'
import { redirect, usePathname } from 'next/navigation'

import DefaultLayout from '@/components/templates/DefaultLayout'
import useAuth from '@/hooks/useAuth'

export default function ProtectRoute({ children }: PropsWithChildren) {
  const { profile } = useAuth({ enabled: false })
  const pathname = usePathname()

  if (!profile) {
    redirect(`/login?from=${pathname}`)
  }

  return <DefaultLayout>{children}</DefaultLayout>
}
