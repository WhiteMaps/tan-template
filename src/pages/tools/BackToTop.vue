<template>
  <div>
    <div class="container-desc">
      使用Back-To-Top-component组件实现返回顶部功能，暴露属性有：
      <el-table :data="info" size="mini">
        <el-table-column prop="name" label="属性名称"></el-table-column>
        <el-table-column prop="desc" label="说明"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="default" label="默认值"></el-table-column>
      </el-table>
    </div>
    <div class="container-placeholder">
      <div v-for="index in 100">placeholder</div>
    </div>
    <!--如需文字提示，可在外部添加element的<el-tooltip></el-tooltip>元素  -->
    <el-tooltip placement="top" content="tooltip">
      <back-to-top-component :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="50" transition-name="fade"/>
    </el-tooltip>
  </div>
</template>

<script>
  import BackToTopComponent from './components/BackToTopComponent'
    export default {
      name: "BackToTop",
      components:{ BackToTopComponent },
      data(){
        return{
          myBackToTopStyle: {
            right: '50px',
            bottom: '50px',
            width: '40px',
            height: '40px',
            'border-radius': '4px',
            'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
            background: '#e7eaf1'// 按钮的背景颜色 The background color of the button
          },
        info:[
          { name:'visibilityHeight', desc:'滚动指定高度后出现图标',type:'Number',default:'400' },
          { name:'backPosition', desc:'滚动到Y坐标的指定高度',type:'Number',default:'0' },
          { name:'transitionName', desc:'动效名称',type:'String',default:'fade' }
        ]
        }
      }
    }
</script>

<style scoped lang="stylus">
  @import "../../assets/styles/varibles.styl"
  .container-placeholder
    margin-top: 20px;
    background-color #bdbdbd
</style>
