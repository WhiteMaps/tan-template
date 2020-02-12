<template>
    <div class="app-wrapper" :class="hideSidebar">
      <sidebar class="sidebar-container"></sidebar>
      <div class="main-container">
          <nav-bar></nav-bar>
          <app-main></app-main>
      </div>
    </div>
</template>

<script>
    import Sidebar from "./modules/Sidebar";
    import NavBar from "./modules/Navbar";
    import AppMain from "./modules/AppMain";

    export default {
      name: "Layout",
      components: {AppMain, NavBar ,Sidebar},
      data(){
        return{

        }
      },
      methods:{

      },
      computed:{
        device() {
          return this.$store.state.appStore.device;
        },
        sidebarStatus() {
          return this.$store.state.appStore.sidebarStatus;
        },
        fixedHeader(){
          return false ;//锁定头部
          /*this.$store.state.settings.fixedHeader;*/
        },
        hideSidebar() {
          return {
            hiddenClass: !this.sidebarStatus,
            mobile: this.device === 'mobile' //没用到
          }
        }
      },

    }
</script>

<style lang="stylus">
  .hiddenClass
    .el-submenu__icon-arrow
      display none;
    .sidebar-container
      width 76px !important;
      transition width 0.28s;
    .main-container
      margin-left 76px !important;
      transition width 0.28s;
</style>

<style scoped lang="stylus">
  @import "../assets/styles/varibles.styl"
  .app-wrapper
    clearFix()
    height 100%
    width 100%
    .sidebar-container
      width 210px
      height 100%
      background-color menuBg
      position: fixed;
      font-size 0
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
      overflow: hidden;
    .main-container
      transition: margin-left .28s;
      margin-left 210px
      position relative;
</style>
