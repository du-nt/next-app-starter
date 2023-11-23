import { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import cn from '@/libs/cn'

type Props = PropsWithChildren & {
  spinning?: boolean
  className?: string
}

export default function Spinner({ children, className, spinning }: Props) {
  if (children)
    return (
      <Box className={cn('relative', className)}>
        {spinning && (
          <Box
            sx={{ backgroundColor: 'background.paper' }}
            className="absolute top-0 bottom-0 left-0 right-0 opacity-50 z-10 flex justify-center items-center"
          >
            <CircularProgress />
          </Box>
        )}

        {children}
      </Box>
    )

  return (
    <Box
      className={cn(
        'fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50',
        className
      )}
    >
      <CircularProgress />
    </Box>
  )
}
