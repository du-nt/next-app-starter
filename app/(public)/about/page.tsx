'use client'

import { Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'

export default function AboutPage() {
  useQuery(['api/v1/profile/user-thumbnails'])

  return (
    <Typography variant="h2" className="text-center">
      About page
    </Typography>
  )
}
