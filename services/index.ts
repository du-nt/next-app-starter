import { APIParams } from '@types'
import { AxiosResponse } from 'axios'

import axios from './axios'

const defaultHeaders = {
  'Content-Type': 'application/json'
}

class Services {
  static get = async <T>(
    url: string,
    params?: APIParams,
    headers = defaultHeaders
  ) =>
    axios<any, AxiosResponse<{ data: T }>>(url, {
      method: 'GET',
      params,
      headers
    }).then((response) => response.data.data)

  static post = async <T>(
    url: string,
    data: T,
    params?: APIParams,
    headers = defaultHeaders
  ) =>
    axios(url, {
      method: 'POST',
      headers,
      params,
      data
    }).then((response) => response.data)

  static patch = async <T>(
    url: string,
    data: T,
    params?: APIParams,
    headers = defaultHeaders
  ) =>
    axios(url, {
      method: 'PATCH',
      headers,
      params,
      data
    }).then((response) => response.data)

  static put = async <T>(
    url: string,
    data: T,
    params?: APIParams,
    headers = defaultHeaders
  ) =>
    axios(url, {
      method: 'PUT',
      headers,
      params,
      data
    }).then((response) => response.data)

  static delete = async <T>(
    url: string,
    data: T,
    params?: APIParams,
    headers = defaultHeaders
  ) =>
    axios(url, {
      method: 'DELETE',
      headers,
      params,
      data
    }).then((response) => response.data)
}

export default Services
