import Services from '@services'
import { QueryClient } from '@tanstack/react-query'
import { Method, MutationFnVariables } from '@types'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }: any) => {
        const [key] = queryKey
        const params = queryKey[1]?.params
        const headers = queryKey[1]?.headers
        const method: Method = queryKey[1]?.method || 'get'
        const data = queryKey[1]?.data

        const request =
          method === 'get'
            ? Services.get(key, params, headers)
            : Services[method](key, data, params, headers)

        return request
      },
      refetchOnWindowFocus: false,
      retry: false
    },
    mutations: {
      mutationFn: async (variables) => {
        const {
          url,
          data,
          method = 'post',
          params,
          headers
        } = variables as MutationFnVariables

        const request =
          method === 'get'
            ? Services.get(url, params, headers)
            : Services[method](url, data, params, headers)

        return request
      }
    }
  }
})

export default queryClient
