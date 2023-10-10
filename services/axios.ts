import queryClient from '@libs/react-query'
import Utils from '@utils'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export const apiDomain = 'https://api-dev.nidt-network.com'

let refreshTokenRequest: null | Promise<any> = null

const instance = axios.create({
  baseURL: apiDomain,
  headers: {
    'Content-Type': 'application/json'
  }
})

const refresh = async () => {
  try {
    const { refreshToken } = Utils.getTokens()

    const response = await axios.post(`${apiDomain}v1/auth/token/refresh`, {
      refreshToken
    })
    Utils.storeTokens(response.data.data)

    return response.data.data.accessToken
  } catch (error: any) {
    refreshTokenRequest = null
    Utils.clearTokens()

    if (error?.response?.status === 404) {
      const profileState = queryClient.getQueryState(['api/v1/profile'])

      // user logged in
      if (profileState?.data) {
        const queries = queryClient.getQueryCache().findAll()

        // remove all cached data exclude logged user
        queries.forEach((query) => {
          if (query.queryKey?.[0] && query.queryKey[0] !== 'api/v1/profile') {
            queryClient.removeQueries({ queryKey: query.queryKey, exact: true })
          }
        })

        // refetch profile query to reset data to undefined
        await queryClient.resetQueries({
          queryKey: ['api/v1/profile'],
          exact: true
        })
      }
    }

    return Promise.reject(error)
  }
}

const onRequest: any = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const { accessToken } = Utils.getTokens()

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`
    }
  }
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response
}

const onResponseError = async (error: AxiosError): Promise<any> => {
  if (error.response && error.response.status === 401) {
    refreshTokenRequest = refreshTokenRequest || refresh()

    const newAccessToken = await refreshTokenRequest

    const axiosConfig = {
      ...error.config,
      headers: {
        ...error.config?.headers,
        authorization: `Bearer ${newAccessToken}`
      }
    }

    refreshTokenRequest = null

    return instance(axiosConfig)
  }
  return Promise.reject(error)
}

instance.interceptors.request.use(onRequest, onRequestError)
instance.interceptors.response.use(onResponse, onResponseError)

export default instance
