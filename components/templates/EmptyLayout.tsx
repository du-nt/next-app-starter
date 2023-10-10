import { PropsWithChildren } from 'react'
import { Box } from '@mui/material'

export default function EmptyLayout({ children }: PropsWithChildren) {
  return <Box className="pb-10">{children}</Box>
}
