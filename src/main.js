// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'assets/reset.css'
import 'assets/custom.css'

import { changeTheme } from 'utils'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 加载用户主题
if (localStorage.getItem('themeValue')) {
  changeTheme(localStorage.getItem('themeValue'))
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
