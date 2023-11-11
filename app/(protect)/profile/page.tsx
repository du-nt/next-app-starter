'use client'

import { Box, Button, Typography } from '@mui/material'

import useAuth from '@/hooks/useAuth'

export default function ProfilePage() {
  const { logout } = useAuth()

  return (
    <Box>
      <Typography>Profile page</Typography>
      <Button variant="contained" onClick={() => logout()}>
        Logout
      </Button>
    </Box>
  )
}
