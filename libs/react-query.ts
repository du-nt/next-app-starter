import { QueryClient } from '@tanstack/react-query'
import { MutationFnVariables } from '@types'
import Utils from '@utils'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const apiDomain = 'https://api-dev.nidt-network.com'

let refreshTokenRequest: null | Promise<any> = null

const defaultHeaders = {
  'Content-Type': 'application/json'
}

const instance = axios.create({
  baseURL: apiDomain,
  headers: defaultHeaders
})

const requestFunction = (variables: MutationFnVariables) => {
  const { url, data, method, params, headers = defaultHeaders } = variables

  if (method === 'GET') {
    return instance(url, {
      method: 'GET',
      params,
      headers
    }).then((response) => response.data.data)
  }

  return instance(url, {
    method,
    headers,
    params,
    data
  }).then((response) => response.data)
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }: any) => {
        const [url, options] = queryKey

        return requestFunction({
          url,
          ...options,
          method: options?.method || 'GET'
        })
      },
      refetchOnWindowFocus: false,
      retry: false
    },
    mutations: {
      mutationFn: async (variables: any) =>
        requestFunction({ ...variables, method: variables.method || 'POST' })
    }
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

export default queryClient
