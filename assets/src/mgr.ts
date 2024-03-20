// @ts-nocheck
import {createApp} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import {createBootstrap} from 'bootstrap-vue-next'
import vueForm from '@vueform/vueform'
import Toast from 'vue-toastification'

import {toastOptions, vueFormConfig} from '../common.config'

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
    .use(createBootstrap())
    .use(Toast, toastOptions)
    .use(vueForm, vueFormConfig)
    .mount('#mmx-forms-root')
})
