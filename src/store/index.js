/* 组装模块，并导入这里*/
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import getters from './getters'
import userStore from './modules/userStore'
import appStore from './modules/appStore'
import settingsStore from './modules/settingsStore'

const store = new Vuex.Store({
  modules:{
    userStore,
    appStore,
    settingsStore
  },
  // getters
})
export default store
