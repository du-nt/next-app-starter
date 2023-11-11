'use client'

import { PropsWithChildren } from 'react'

import DefaultLayout from '@/components/templates/DefaultLayout'

export default function PublicRoute({ children }: PropsWithChildren) {
  return <DefaultLayout>{children}</DefaultLayout>
}
