// @ts-nocheck
import {createApp} from 'vue'
import vueForm from '@vueform/vueform'
import {createMmxToast} from '@vesp/mmx-frontend/toast'
import {setNamespace} from '@vesp/mmx-frontend/namespace'

import {vueFormConfig} from '../common.config'
import App from './web/app.vue'
import './web/scss/index.scss'

setNamespace('mmx-forms')

document.addEventListener('DOMContentLoaded', () => {
  const locale = window.mmxForms.locale || 'en'
  window.mmxForms.forms.forEach((form: Record<string, any>) => {
    createApp(App, {id: form.id, schema: form.schema, locale})
      .use(vueForm, vueFormConfig)
      .use(createMmxToast())
      .mount('#mmx-forms-' + form.id)
  })
})
