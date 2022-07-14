import { createApp } from 'vue-demi'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.css'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/assets/css/tailwindcss.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VIcon from './components/VIcon.vue'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('VIcon', VIcon)
app.use(createPinia())
app.use(router).mount('#app')
