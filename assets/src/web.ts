// @ts-nocheck
import {createApp} from 'vue'
import vueForm from '@vueform/vueform'
import {createMmxToast} from '@vesp/mmx-frontend/toast'
import {setNamespace} from '@vesp/mmx-frontend/namespace'

import {vueFormConfig} from '../common.config'
import App from './web/app.vue'
import './web/scss/index.scss'

setNamespace('mmx-forms')

document.addEventListener('DOMContentLoaded', async () => {
  const locale = window.mmxForms.locale || 'en'
  const context = window.mmxForms.context || 'web'
  try {
    for (const form of window.mmxForms.forms) {
      const schema = await useGet('web/forms/' + form.id)
      createApp(App, {id: form.id, schema, locale, context})
        .use(vueForm, vueFormConfig)
        .use(createMmxToast())
        .mount('#mmx-forms-' + form.id)
    }
  } catch (e) {
    console.error(e)
  }
})
