<template>
    <div class="navbar">
      <div class="navbar-collage" @click="toggle">
        <div class="iconfont collage-font">{{toggleIcon?'&#xe639;':'&#xe62d;'}}</div>
      </div>
      <div class="navbar-breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <transition-group name="breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }" key="/">首页</el-breadcrumb-item>
            <template v-if="route.path !== '/dashboard'">
              <el-breadcrumb-item v-for="item in route.matched" :key="item.path">{{item.name}}</el-breadcrumb-item>
            </template>
          </transition-group>
        </el-breadcrumb>
      </div>
    </div>
</template>

<script>
    export default {
      name: "NavBar",
      computed:{
        toggleIcon(){ return this.$store.state.appStore.sidebarStatus },
        route(){ return this.$route }
      },
      methods:{
        toggle(){ this.$store.dispatch('toggleSidebar') },
      }
    }
</script>

<style scoped lang="stylus">
  @import "../../assets/styles/varibles.styl"
.navbar
  height: 56px
  overflow: hidden
  background: #fff
  box-shadow: 0 1px 4px rgba(0,21,41,.08)
  display flex;
  align-items center
  .navbar-collage
    width: 56px
    height: 56px
    display flex
    align-items center
    justify-content center
    .collage-font
      color menuBg
      font-size 25px
      &:hover
        transition: font .3s;
        font-size 35px
        cursor  pointer
</style>
