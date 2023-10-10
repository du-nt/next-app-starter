import Const from '@constants/common'
import { TokenBundle, ValidationError } from '@types'

const Utils = class Utils {
  static storeTokens = (tokenBundle: TokenBundle) => {
    localStorage.setItem('accessToken', tokenBundle.accessToken)
    localStorage.setItem('refreshToken', tokenBundle.refreshToken)
  }

  static getTokens = () => {
    const refreshToken = localStorage.getItem('refreshToken')
    const accessToken = localStorage.getItem('accessToken')

    return { refreshToken, accessToken }
  }

  static clearTokens = () => {
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('accessToken')
  }

  static getValidatorError = (errorCode: string) => {
    const validatorError: ValidationError = {}

    Const.VALIDATOR_ERRORS.forEach((key) => {
      const parts = key.split('-')
      if (parts.length === 2) {
        const errorCode = parts[0]
        const fieldNames = parts[1].split(',')

        const translationKey = `common.validationError.${key}`

        validatorError[errorCode] = {
          fieldNames,
          translationKey
        }
      }
    })

    const errorFields = validatorError[errorCode]

    return errorFields
  }
}

export default Utils
