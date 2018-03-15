import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  /* config: {

    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#000000',
    navigationBarTitleText: '自定义标题',
    navigationBarTextStyle: 'black'

  } */
}
