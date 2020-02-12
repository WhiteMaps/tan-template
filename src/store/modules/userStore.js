/* 用于管理用户信息的全局状态 */

const state = {
  token : sessionStorage.getItem('user_token') || '',
  name:''
};

const actions = {
  /*成功登陆后，将用户信息保存在vuex中，*/
  login({ commit,userInfo }){
      var user_info = userInfo; //传入的userInfo需包含token，name
      return new Promise((resolve)=>{
        commit("handleUserInfo",user_info);
        resolve();
      })
  },
};

const mutations = {
  handleUserInfo:(state,user_info)=>{
    state.token = user_info.token;
    state.name = user_info.name;
    sessionStorage.setItem('',user_info.token);/*页面刷新会丢失vuex信息，因此同步保存在session中*/
    sessionStorage.setItem('name',user_info.name)
  }
};

const getter = {
  /*token: state => state.token || 'token',
  name: state => state.name || 'name'*/
  token: state => state.token || sessionStorage.getItem('token'),
  name: state => state.name || sessionStorage.getItem('name')
};


export default  {
  namespaced : true,/*用于store外部页面的引用*/
  state,
  mutations,
  actions,
  getter
}
