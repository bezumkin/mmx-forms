// @ts-nocheck
import en from '@vueform/vueform/locales/en'
import bootstrap from '@vueform/vueform/dist/bootstrap'
import axios from 'axios'
// eslint-disable-next-line
import {defineConfig} from '@vueform/vueform'
import {POSITION} from 'vue-toastification'

const customAxios = axios.create({
  baseURL: '/mmx-forms/',
})
customAxios.interceptors.response.use(
  function (config) {
    return config
  },
  function (error) {
    if (error.response && error.response.data && typeof error.response.data === 'string') {
      useToastError(useLexicon(error.response.data))
    }

    return Promise.reject(error.response)
  },
)

export const toastOptions = {
  position: POSITION.TOP_RIGHT,
  maxToasts: 5,
  timeout: 5000,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeButton: false,
  closeOnClick: false,
  draggable: true,
  transition: 'Vue-Toastification__slideBlurred',
}

export const vueFormConfig = defineConfig({
  theme: bootstrap,
  locales: {en},
  locale: 'en',
  axios: customAxios,
  endpoints: {
    submit: {
      url: '/web/forms',
      method: 'post',
    },
    uploadTempFile: {
      url: '/web/forms/file/upload-temp',
      method: 'post',
    },
    removeTempFile: {
      url: '/web/forms/file/remove-temp',
      method: 'post',
    },
    removeFile: {
      url: '/web/forms/file/remove',
      method: 'post',
    },
    attachment: {
      url: '/web/editor/attachment',
      method: 'post',
    },
  },
})
