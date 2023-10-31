import Const from '@constants/common'
import { Locale } from '@types'
import { cookies } from 'next/headers'
import { getRequestConfig } from 'next-intl/server'

export const getLocale = () => {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')?.value
  const lang =
    cookieStore.get(Const.LOCALE_COOKIE_NAME)?.value || Const.DEFAULT_LOCALE

  const isValidLocale = Object.keys(Const.LOCALES).some((cur) => cur === lang)

  const locale = isValidLocale ? lang : Const.DEFAULT_LOCALE
  const longLocale = Const.LOCALES[locale as Locale]

  return { locale, theme, longLocale }
}

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
