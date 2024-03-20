import {ofetch, type FetchContext, type FetchOptions} from 'ofetch'
import {useToastError} from './use-toast'
import {useLexicon} from './use-lexicon'

const baseURL = '/mmx-forms/'

export function useApi(endpoint: string, options: FetchOptions<any> = {}) {
  return ofetch(endpoint, {
    baseURL,
    onResponseError({response}: FetchContext): void {
      if (response?._data) {
        useToastError(useLexicon(response._data))
      }
    },
    ...options,
  })
}

export function useGet(endpoint: string, params = {}, options: FetchOptions<any> = {}) {
  return useApi(endpoint, {...options, query: params, method: 'GET'})
}

export function usePost(endpoint: string, params = {}, options: FetchOptions<any> = {}) {
  return useApi(endpoint, {...options, body: params, method: 'POST'})
}

export function usePut(endpoint: string, params = {}, options: FetchOptions<any> = {}) {
  return useApi(endpoint, {...options, body: params, method: 'PUT'})
}

export function usePatch(endpoint: string, params = {}, options: FetchOptions<any> = {}) {
  return useApi(endpoint, {...options, body: params, method: 'PATCH'})
}

export function useDelete(endpoint: string, params = {}, options: FetchOptions<any> = {}) {
  return useApi(endpoint, {...options, query: params, method: 'DELETE'})
}
