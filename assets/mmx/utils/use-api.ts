import {axios} from '../../common.config'

export function useApi(endpoint: string, options: Record<string, any> = {}): any {
  return axios(endpoint, {...options})
}

export function useGet(endpoint: string, params = {}, options: Record<string, any> = {}) {
  return useApi(endpoint, {...options, params, method: 'GET'})
}

export function usePost(endpoint: string, data = {}, options: Record<string, any> = {}) {
  return useApi(endpoint, {...options, data, method: 'POST'})
}

export function usePut(endpoint: string, data = {}, options: Record<string, any> = {}) {
  return useApi(endpoint, {...options, data, method: 'PUT'})
}

export function usePatch(endpoint: string, data = {}, options: Record<string, any> = {}) {
  return useApi(endpoint, {...options, data, method: 'PATCH'})
}

export function useDelete(endpoint: string, data = {}, options: Record<string, any> = {}) {
  return useApi(endpoint, {...options, query: data, method: 'DELETE'})
}
