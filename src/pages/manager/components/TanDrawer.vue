<template>
    <div>
      <el-button @click="drawer = true;drawerDirection ='rtl'">右侧打开</el-button>
      <el-button @click="drawer = true;drawerDirection ='ltr'">左侧打开</el-button>
      <el-button @click="drawer = true;drawerDirection ='ttb'">从上打开</el-button>
      <el-button @click="drawer = true;drawerDirection ='btt'">从下打开</el-button>
      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction = "drawerDirection">
      </el-drawer>

    </div>
</template>

<script>
    export default {
        name: "TanDrawer",
        data(){
          return{
            drawer:false,
            drawerDirection: 'rtl',
          }
        }
    }
</script>

<style scoped lang="stylus">

</style>
