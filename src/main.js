import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false//产品说明
fastClick.attach(document.body)//fastClick自带的方法
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
