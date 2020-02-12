/*获取全局状态的get方法*/
const getters = {
  sidebar: state => state.app.sidebar,
  device : state => state.app.device,
  token : state => state.userStore.token,
  name : state => state.userStore.name,
}
export default getters;
