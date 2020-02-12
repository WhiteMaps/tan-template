
const appStore = {
  state :{
    sidebarStatus: sessionStorage.getItem('sidebarStatus') || true,
    device: 'desktop'
  },
  mutations :{
    TOGGLE_SIDEBAR: state => {
      state.sidebarStatus = !state.sidebarStatus;
      sessionStorage.setItem('sidebarStatus',state.sidebarStatus)
    }
  },
  actions :{
    toggleSidebar({commit}) {
      console.log('跟踪toggleSidebar！')
      commit('TOGGLE_SIDEBAR')
    }
  },
  getter :{
    sidebarStatus: state => state.sidebar.sidebarStatus,
    device: state => state.device || 'device'
  }
}
export default appStore

