// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import VueScroller from 'vue-scroller'
import {ToastPlugin } from 'vux'
import axios from './config/http'
import 'static/css/lib/font/stylesheet.css';
import 'static/css/lib/font/iconfont.css';
import 'static/css/lib/font1/iconfont.css';
FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$ajax = axios

Vue.use(ToastPlugin)
Vue.use(VueScroller)
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
