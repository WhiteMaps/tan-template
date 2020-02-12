import Vue from 'vue'
import App from './App'
import router from './router' //添加路由管理
import store from './store' //添加全局状态管理
import 'normalize.css/normalize.css' //导入CSS初始化设置
import "./assets/styles/varibles.styl"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

/*引入百度地图*/
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap,{
  ak:'Qyeav6EvDttXfmGkGsE5Z7obpveroFLV'
});



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
