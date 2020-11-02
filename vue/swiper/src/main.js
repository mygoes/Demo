import Vue from 'vue'
import App from './App.vue'
// 导入swiper轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './style/swiper-bundle.css'
import Swiper6, { Autoplay, Pagination } from 'swiper'
Swiper6.use([Autoplay, Pagination]);
// 注册swiper轮播图
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')