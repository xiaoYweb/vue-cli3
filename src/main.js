import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store/index.js'

Vue.config.productionTip = false

import '@/assets/less/init.less'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 全局调用
import bus from './lib/bus'
Vue.prototype.$bus = bus

import Reg from '@/lib/reg'
Vue.prototype.reg = new Reg

//-----自定义 插件 ----------
import y from '@/lib/y'
Vue.use(y)

import pdf from '@/components/preview/pdf'
Vue.use(pdf)
import office from '@/components/preview/office'
Vue.use(office)
import image from '@/components/preview/image'
Vue.use(image)
// ---- icon-font -------
import '@/assets/font/iconfont.css'
import yIcon from '_c/iconfont'
Vue.component('y-icon',yIcon)
import yInput from '_c/element/input'
Vue.component('y-input',yInput)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
