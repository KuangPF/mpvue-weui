import Vue from 'vue'
import App from './App'
import './css/app.css'
Vue.config.productionTip = false
App.mpType = 'app'

import '../static/weui/weui.css'
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      'pages/index/index',
      'pages/button/button'
    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
}
