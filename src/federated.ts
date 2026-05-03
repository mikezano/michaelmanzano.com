import { createPinia } from 'pinia'
import { createApp, type App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import AppComponent from './App.vue'
import { routes } from './router'

export function mount(el: HTMLElement, base = '/'): App {
  const router = createRouter({
    history: createWebHistory(base),
    routes,
  })
  const app = createApp(AppComponent)
  app.use(createPinia())
  app.use(router)
  app.mount(el)
  return app
}

export function unmount(app: App) {
  app.unmount()
}
