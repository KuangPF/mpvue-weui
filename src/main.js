import Vue from 'vue'
import App from './App'
import './css/app.css'
import store from './store';
import '../static/weui/weui.css'
Vue.config.productionTip = false;
App.mpType = 'app';
Vue.prototype.$store = store;
const app = new Vue({
  App
})
app.$mount();
