import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME, LOCALES } from './constants'
import { Locale } from './types'

export const getLocale = () => {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')?.value
  const lang = cookieStore.get(LOCALE_COOKIE_NAME)?.value || DEFAULT_LOCALE

  const isValidLocale = Object.keys(LOCALES).some((cur) => cur === lang)

  const locale = isValidLocale ? lang : DEFAULT_LOCALE
  const longLocale = LOCALES[locale as Locale]

  return { locale, theme, longLocale }
}

export function middleware(request: NextRequest) {
  const { locale, longLocale } = getLocale()

  const requestHeaders = new Headers(request.headers)
  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })

  // Full locale (e.g. `en-US`)
  response.headers.set('x-locale', longLocale)

  // Set header to simulate correct response for `next-intl`
  response.headers.set('X-NEXT-INTL-LOCALE', longLocale)

  // Set cookie to simulate correct response for `next-intl`
  response.cookies.set('NEXT_LOCALE', locale)

  return response
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
