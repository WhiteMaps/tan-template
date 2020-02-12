import defaultSettings from '../../setting'

const { showSettings, fixedHeader, sidebarLogo,themeColor } = defaultSettings

const state = {
  showSettings : showSettings,
  fixedHeader : fixedHeader,
  sidebarLogo : sidebarLogo,
  themeColor: themeColor
};

const actions = {
  changeSetting({ commit }, data){
    commit('CHANGE_SETTING' , data)
  }
};

const mutations = {
  CHANGE_SETTING : (state,{key ,value})=>{
    if (state.hasOwnProperty(key)){
      state[key]  = value
    }
  }
};

const getter = {
  themeColor: state => state.themeColor
};

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getter
}
