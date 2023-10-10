'use client'

import { MouseEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import Spinner from '@components/atoms/Spinner'
import { yupResolver } from '@hookform/resolvers/yup'
import useAuth from '@hooks/useAuth'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Validators from '@utils/validators'
import NextLink from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const searchParams = useSearchParams()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setFocus
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(Validators.registerSchema)
  })
  const { isLoading } = useAuth({ setError, setFocus })

  const from = searchParams.get('from')

  const handleShowPassword = () => {
    setShowPassword((show) => !show)
  }

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((show) => !show)
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const onSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <Container maxWidth="xs">
      <Spinner spinning={isLoading}>
        <Box className="flex justify-center flex-col items-center mt-16">
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
        </Box>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register('firstName')}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                autoComplete="new-firstName"
                error={!!errors.firstName}
                helperText={
                  errors.firstName ? errors.firstName.message : undefined
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register('lastName')}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                autoComplete="new-lastName"
                error={!!errors.lastName}
                helperText={
                  errors.lastName ? errors.lastName.message : undefined
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register('email')}
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="new-email"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : undefined}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register('password')}
                required
                fullWidth
                label="Password"
                id="password"
                autoComplete="new-password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                error={!!errors.password}
                helperText={
                  errors.password ? errors.password.message : undefined
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register('confirmPassword')}
                required
                fullWidth
                label="Confirm Password"
                id="confirm-password"
                autoComplete="new-confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                error={!!errors.confirmPassword}
                helperText={
                  errors.confirmPassword
                    ? errors.confirmPassword.message
                    : undefined
                }
              />
            </Grid>
          </Grid>
          <Button
            size="large"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                href={{
                  pathname: '/login',
                  query: from ? { from } : undefined
                }}
                component={NextLink}
                variant="body2"
              >
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Spinner>
    </Container>
  )
}
