'use client'

import useAuth from '@hooks/useAuth'
import { Box, Button, Typography } from '@mui/material'

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
