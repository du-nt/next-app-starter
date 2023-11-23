import { getRequestConfig } from 'next-intl/server'

import Const from './constants/common'
import { getLocale } from './middleware'
import { Locale } from './types'

export const getTranslations = async () => {
  const { locale, theme } = getLocale()

  const currentTranslationObj = Const.TRANSLATIONS_OBJ[locale as Locale]

  const translations = await Promise.all(
    Object.entries(currentTranslationObj).map(async ([namespace]) => {
      const translation = await import(`./messages/${locale}/${namespace}.json`)
      return { [namespace]: translation.default }
    })
  )

  const messages = Object.assign({}, ...translations)

  return { messages, locale, theme }
}

export default getRequestConfig(getTranslations)
