import {RouteLocationRaw, useRouter} from 'vue-router'

export default function (route?: RouteLocationRaw) {
  const router = useRouter()
  if (router) {
    router.push(route || '/')
  }
}
