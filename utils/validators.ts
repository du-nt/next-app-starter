import * as yup from 'yup'

const Validators = class Validators {
  static get loginSchema() {
    return yup.object({
      email: yup
        .string()
        .email('Email not valid')
        .required('Email is required'),
      password: yup
        .string()
        .min(6, 'Password must be at least 6')
        .max(30, 'Password too long')
        .required('Password is required')
    })
  }

  static get registerSchema() {
    return yup.object({
      firstName: yup
        .string()
        .max(12, 'First name too long')
        .required('First name is required'),
      lastName: yup
        .string()
        .max(12, 'Last name too long')
        .required('Last name is required'),
      email: yup
        .string()
        .email('Email not valid')
        .required('Email is required'),
      password: yup
        .string()
        .min(6, 'Password must be at least 6')
        .max(30, 'Password too long')
        .required('Password is required'),
      confirmPassword: yup
        .string()
        .min(6, 'Confirm password must be at least 6')
        .max(30, 'Confirm password too long')
        .required('Password is required')
        .oneOf([yup.ref('password')], 'Confirm password not match')
    })
  }
}

export default Validators
