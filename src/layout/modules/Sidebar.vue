<!-- 侧边栏 -->
<template>
  <el-scrollbar wrap-class="sidebar-scrollbar">
    <el-menu :default-active="$route.path"
             :collapse="isCollapse"
             :collapse-transition="false"
             :background-color="themeColor.menuBg"
             :text-color="themeColor.menuText"
             :unique-opened="false"
             :active-text-color="themeColor.menuActiveText"
             mode="vertical"
             class="sidebar-menu"
             router>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <template v-for="route in routes">
        <div v-if="route.children && !route.hidden">
          <el-submenu v-if="route.children.length > 1" :index="hasPath(route)" >
            <template slot="title">
              <i :class="route.icon"></i>
              <span slot="title" v-if="!isCollapse">{{route.name}}</span>
            </template>
            <el-menu-item v-for="child in route.children"
                          :index="hasPath(route,child)"
                          :key="child.path"
                          v-show="!child.hidden">
              {{child.name}}
            </el-menu-item>
          </el-submenu>
          <!-- 只有一个子节点，显示处理 -->
          <el-menu-item v-if="route.children.length === 1"
                        :index="hasPath(route,route.children[0])" class="child11">
            <i :class="route.icon"></i>
            <span slot="title" v-if="!isCollapse">{{route.name}}</span>
            <!--<span class="item-title" v-if="isCollapse">{{route.name}}</span>-->
          </el-menu-item>
        </div>
        <div v-if="route.linkType" @click="linkHandle(route.path)">
          <el-menu-item >
            <i :class="route.icon"></i>
            <span slot="title" >{{route.name}}</span>
          </el-menu-item>
        </div>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script>

    export default {
      name: "Sidebar",
      data(){
        return{
          dataList:['1','2','3']
        }
      },
      computed:{
        routes(){
          //console.log(' 跟踪routes：',this.$router.options.routes)
          return this.$router.options.routes;
        },
        /*activeMenu(){
          var route = this.$route;
          var { meta, path } = route;
          if (meta.activeMenu){
            return meta.activeMenu
          }
          return path
        },*/
        isCollapse(){
          return !this.$store.state.appStore.sidebarStatus
        },
        themeColor(){
          return this.$store.state.settingsStore.themeColor
        }
      },
      methods:{
        hasPath(route,childRoute){
          if (childRoute) {
            return route.path+'/'+childRoute.path
          }
          return route.path
        },
        linkHandle(link){
          window.open(link,'_blank') //新开页面打开连接
          /*window.location.href = link; 当前页面打开连接*/
        }
      },
      mounted() {
        /*console.log('跟踪route：',this.$router.options.routes)*/
      }
    }
</script>

<style>
  .el-scrollbar__wrap
  {
    overflow-x: hidden !important;
  }

  .el-menu--popup-right-start {
    margin-left: 20px;
    margin-right: 5px;
  }
</style>

<style scoped lang="stylus">
  @import "../../assets/styles/varibles.styl"
    .sidebar-scrollbar
      height 100%
      overflow-x hidden
      .sidebar-menu
        border-color: transparent;
</style>
