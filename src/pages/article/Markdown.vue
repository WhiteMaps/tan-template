<template>
  <div>
    <div class="container-desc">
      Markdown 基于 <el-link href="https://github.com/hinesboy/mavonEditor" type="primary"> mavonEditor </el-link> 开发
      <br>使用时，安装：npm install mavon-editor --save
    </div>
    <div id="container-editor">
      <mavon-editor v-model="content"></mavon-editor>
    </div>
  </div>
</template>

<script>
    import { mavonEditor }from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
      name: "Markdown",
      components:{ mavonEditor },
      data(){
        return{
          content:''
        }
      },
      methods:{  },
      mounted() {   }
    }
</script>

<style scoped lang="stylus">
  @import "../../assets/styles/varibles.styl"
#container-editor
  margin-top: 20px;
  height: 580px;
</style>
