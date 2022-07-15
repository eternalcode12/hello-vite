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
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import Prism from 'prismjs';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});
VueMarkdownEditor.use(createEmojiPlugin());
VueMarkdownEditor.use(createLineNumbertPlugin());
VueMarkdownEditor.use(createTodoListPlugin());
VueMarkdownEditor.use(createCopyCodePlugin());

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
