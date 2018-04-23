import Vue from 'vue'
import App from './App'

import router from './router'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Layout from './components/Layout'
Vue.component(Layout.name, Layout)

//在应用启动时，可以通过设置 Vue.config.productionTip = false 来关闭生产模式下给出的提示
Vue.config.productionTip = true

import '../static/zh_CN.js'
import Editor from './components/Editor'
Vue.component(Editor.name, Editor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
