import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/normalize.less'
import '@/assets/styles/common.less'

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
