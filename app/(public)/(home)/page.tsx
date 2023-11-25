'use client'

import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Link, TextField, TextFieldProps, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { useQuery } from '@tanstack/react-query'
import { Dayjs } from 'dayjs'
import Image from 'next/image'
import NextLink from 'next/link'
import { useTranslations } from 'next-intl'

import ViteIcon from '@/components/icons/ViteIcon'

export default function HomePage() {
  const [datePickerValue, setDatePickerValue] = useState<Dayjs | null>(null)
  const [timePickerValue, setTimePickerValue] = useState<Dayjs | null>(null)

  const t = useTranslations()

  useQuery(['api/v1/events?limit=2&offset=0'])

  const datePickerTextField = (params: TextFieldProps) => (
    <TextField
      {...params}
      inputProps={{
        ...params.inputProps,
        placeholder: t('common.datePickerPlaceholder')
      }}
    />
  )

  const timePickerTextField = (params: TextFieldProps) => (
    <TextField
      {...params}
      inputProps={{
        ...params.inputProps,
        placeholder: t('common.datePickerPlaceholder')
      }}
    />
  )

  return (
    <div className="border shadow-xl border-gray-50 rounded-xl">
      <main>
        <Typography variant="h4" className="text-red-500 text-center">
          Hello Vite + React
        </Typography>

        <nav className="flex items-center gap-4 text-center my-4">
          <Link href="/" component={NextLink}>
            Homepage
          </Link>

          <Link href="/about" component={NextLink}>
            About
          </Link>

          <Link href="/login" component={NextLink}>
            Login
          </Link>

          <Link href="/profile" component={NextLink}>
            Profile(protected)
          </Link>
        </nav>

        <div className="flex gap-3">
          <Image
            width={0}
            height={0}
            src="/vite.svg"
            alt="logo"
            className="w-auto h-auto"
          />
          <div className="h-10 w-10 bg-[url('/vite.svg')] bg-center bg-no-repeat" />
          <ViteIcon />
        </div>

        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
        </Box>

        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
        </Box>

        <Stack spacing={3} className="my-4">
          <DatePicker
            value={datePickerValue}
            onChange={(newValue) => setDatePickerValue(newValue)}
            slots={{
              textField: datePickerTextField
            }}
          />
          <TimePicker
            value={timePickerValue}
            onChange={(newValue) => setTimePickerValue(newValue)}
            slots={{
              textField: timePickerTextField
            }}
          />
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </main>
    </div>
  )
}
