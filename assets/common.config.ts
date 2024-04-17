// @ts-nocheck
import de from '@vueform/vueform/locales/de'
import en from '@vueform/vueform/locales/en'
import fr from '@vueform/vueform/locales/fr_CA'
import nl from '@vueform/vueform/locales/nl'
import ru from '@vueform/vueform/locales/ru'
import theme from '@vueform/vueform/themes/bootstrap'
import axiosDefault from 'axios'
// eslint-disable-next-line import/named
import {defineConfig} from '@vueform/vueform'

export const axios = axiosDefault.create({
  baseURL: '/mmx-forms/',
})
axios.CancelToken = axiosDefault.CancelToken
axios.isCancel = axiosDefault.isCancel

axios.interceptors.response.use(
  function (response) {
    return response.config?.isApi ? response.data : response
  },
  function (error) {
    if (error.response && error.response.data && typeof error.response.data === 'string') {
      const message = error.response.data.includes('.') ? useLexicon(error.response.data) : error.response.data
      useToastError(message)
    }

    return Promise.reject(error.response)
  },
)

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
  axios,
  theme,
  locales: {de, en, fr, nl, ru},
  endpoints: {
    uploadTempFile,
    removeTempFile,
    attachment() {
      const msg = useLexicon('errors.file.attachment')
      useToastError(msg)
      throw new Error(msg)
    },
  },
})
