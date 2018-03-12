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
      'pages/icons/icons',
      'pages/index/index',
      'pages/button/button',
      'pages/list/list',
      'pages/input/input',
      'pages/slider/slider',
      'pages/uploader/uploader',

      'pages/article/article',
      'pages/badge/badge',
      'pages/flex/flex',
      'pages/footer/footer',
      'pages/gallery/gallery',
      'pages/grid/grid'
    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
}
