// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'

Vue.use(ElementUI)
Vue.use(BaiduMap, {
  ak: 'GrBWEQ8O79yquGlGntXk3uG646Lbivdc'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
