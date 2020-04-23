import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入mint组件库
import MintUI from 'mint-ui'
//引入mint样式表
import "mint-ui/lib/style.min.css";

  Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
