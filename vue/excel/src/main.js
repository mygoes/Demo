import Vue from 'vue'
import App from './App.vue'
// 导入 饿了么 ui的库
import ElementUI from 'element-ui';
// 导入 饿了么 的css
import 'element-ui/lib/theme-chalk/index.css';

// 注册 饿了么 ui
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
