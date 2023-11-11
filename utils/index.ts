import { getCookie } from 'cookies-next'

import Const from '@/constants/common'
import { Locale, TokenBundle } from '@/types'

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

  static getToastErrorKeys(locale: string) {
    return Object.keys(
      Const.TRANSLATIONS_OBJ[locale as Locale].common.toastError
    )
  }

  static getValidationErrorKeys(locale: string) {
    return Object.keys(
      Const.TRANSLATIONS_OBJ[locale as Locale].common.validationError
    )
  }

  static getValidationError = (errorCode: string | number, formValues: any) => {
    const locale = getCookie(Const.LOCALE_COOKIE_NAME) || Const.DEFAULT_LOCALE
    const validationErrorKey = this.getValidationErrorKeys(locale).find(
      (key) => key.split('-')[0] === `${errorCode}`
    )

    if (!validationErrorKey) return {}

    const mixedFieldName = validationErrorKey.split('-')[1]

    if (!mixedFieldName) return {}

    const fieldNames = mixedFieldName.split(',')

    const validationTranslationKey = `common.validationError.${validationErrorKey}`
    const validationTranslationValues = fieldNames.reduce(
      (acc, item) => ({ ...acc, [item]: formValues[item] }),
      {}
    )

    return {
      validationTranslationKey,
      fieldNames,
      validationTranslationValues
    }
  }

  static getToastError = (errorCode: string | number, formValues: any) => {
    const locale = getCookie(Const.LOCALE_COOKIE_NAME) || Const.DEFAULT_LOCALE
    const toastErrorKey = this.getToastErrorKeys(locale).find(
      (key) => key.split('-')[0] === `${errorCode}`
    )

    if (!toastErrorKey) return {}

    const translationValuesKeys = toastErrorKey.split('-')[1]
    const toastTranslationKey = `common.toastError.${toastErrorKey}`

    if (!translationValuesKeys)
      return {
        toastTranslationKey
      }

    const toastTranslationValues = translationValuesKeys
      .split(',')
      .reduce((acc, item) => ({ ...acc, [item]: formValues[item] }), {})

    return {
      toastTranslationKey,
      toastTranslationValues
    }
  }
}

export default Utils
