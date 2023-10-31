import Const from '@constants/common'
import { getLocale } from 'i18n'
import { NextRequest, NextResponse } from 'next/server'

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
  response.cookies.set(Const.LOCALE_COOKIE_NAME, locale)

  return response
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
