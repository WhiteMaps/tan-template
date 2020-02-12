<!--  工具页面：回到顶部  和 限定条件锁定header -->

<template>
  <div>
    <div class="container-desc">
      使用top-fixed-component组件实现头部锁定功能，暴露属性有：
      <el-table :data="info" size="mini">
        <el-table-column prop="name" label="属性名称"></el-table-column>
        <el-table-column prop="desc" label="说明"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="default" label="默认值"></el-table-column>
      </el-table>
    </div>
    <top-fixed-component :show-height="260">我是锁定的内容</top-fixed-component>
    <div style="margin-top:20px;background-color: #9b9b9b;height: 2000px;width: 100%"></div>
  </div>
</template>

<script>
    import TopFixedComponent from "./components/TopFixedComponent";
    export default {
      name: "TopFixed",
      components: { TopFixedComponent },
      data(){
        return{
          isShow:true,
          info:[
            { name:'firstShow', desc:'初始状态是否显示本组件',type:'Boolean',default:'false' },
            { name:'positionHeight', desc:'组件锁定时，距离顶部的高度',type:'Number',default:'0' },
            { name:'showHeight', desc:'下降指定高度显示本组件',type:'Number',default:'100' }
          ]

        }
      },
      methods:{
        handleShow(){
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          this.isShow = scrollTop > 100;
        }
      },
      mounted() {
        window.addEventListener('scroll',this.handleShow)
      },
      destroyed() {
        window.removeEventListener('scroll', this.handleShow)
      }
    }
</script>

<style scoped lang="stylus">
  @import "../../assets/styles/varibles.styl"
</style>
