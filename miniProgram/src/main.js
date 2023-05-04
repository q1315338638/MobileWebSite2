import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import '@/common/navigate.js';
import uView from '@/uni_modules/uview-ui'
import page from '@/components/page'; // 引入根组件
Vue.use(uView)
uni.$u.config.unit = 'rpx'

Vue.config.productionTip = false
Vue.component('page', page) // 总组件

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
