// @ts-nocheck
import en from '@vueform/vueform/locales/en'
import theme from '@vueform/vueform/themes/bootstrap'
import axiosDefault from 'axios'
// eslint-disable-next-line
import {defineConfig} from '@vueform/vueform'
import {POSITION} from 'vue-toastification'

export const axios = axiosDefault.create({
  baseURL: '/mmx-forms/',
})
axios.CancelToken = axiosDefault.CancelToken
axios.isCancel = axiosDefault.isCancel

axios.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    if (error.response && error.response.data && typeof error.response.data === 'string') {
      const message = error.response.data.includes('.') ? useLexicon(error.response.data) : error.response.data
      useToastError(message)
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
  theme,
  locales: {en},
  locale: 'en',
  axios,
  endpoints: {
    submit: {
      url: '/web/forms',
      method: 'post',
    },
    uploadTempFile(file: File, {form$}) {
      console.log(file, form$.formKey)
    },
    removeTempFile: {
      url: '/web/files/remove',
      method: 'delete',
    },
    removeFile: {
      url: '/web/files/remove',
      method: 'delete',
    },
    attachment: {
      url: '/web/editor/attachment',
      method: 'post',
    },
  },
})
