// @ts-nocheck
import {createApp} from 'vue'
import vueForm from '@vueform/vueform'
import Toast from 'vue-toastification'

import {toastOptions, vueFormConfig} from '../common.config'
import App from './web/app.vue'
import './web/scss/index.scss'

document.addEventListener('DOMContentLoaded', () => {
  window.mmxForms.forms.forEach((form: Record<string, any>) => {
    createApp(App, {id: form.id, schema: form.schema})
      .use(vueForm, vueFormConfig)
      .use(Toast, toastOptions)
      .mount('#mmx-forms-' + form.id)
  })
})
