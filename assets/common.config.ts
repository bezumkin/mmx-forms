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

function getFormKey(form, error: string) {
  if (!form.formKey) {
    const msg = useLexicon(error)
    useToastError(msg)
    throw new Error(msg)
  }
  return form.formKey
}

async function uploadTempFile(file: File, el) {
  const formKey = getFormKey(el.form$, 'errors.file.upload')
  const form = new FormData()
  form.append('file', file)

  return await usePost('/web/forms/' + formKey + '/files', form, {
    onUploadProgress: (e: ProgressEvent) => {
      el.progress = Math.round((e.loaded * 100) / e.total)
    },
  })
}

async function removeTempFile({tmp}, el) {
  const formKey = getFormKey(el.form$, 'errors.file.delete')
  await useDelete('/web/forms/' + formKey + '/files/' + tmp)
}

export const vueFormConfig = defineConfig({
  theme,
  locales: {en},
  locale: 'en',
  axios,
  endpoints: {
    submit: false,
    uploadTempFile,
    removeTempFile,
    removeFile: false,
    attachment() {
      const msg = useLexicon('errors.file.attachment')
      useToastError(msg)
      throw new Error(msg)
    },
  },
})
