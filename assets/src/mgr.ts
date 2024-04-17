// @ts-nocheck
import {createApp} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import {createMmx} from '@vesp/mmx-frontend'
import vueForm from '@vueform/vueform'

import {vueFormConfig} from '../common.config'

import App from './mgr/app.vue'
import routes from '~pages'
import './mgr/scss/index.scss'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

document.addEventListener('DOMContentLoaded', () => {
  createApp(App)
    .use(router)
    .use(createMmx({namespace: 'mmx-forms'}))
    .use(vueForm, vueFormConfig)
    .mount('#mmx-forms-root')
})
