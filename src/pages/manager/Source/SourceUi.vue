<template>
  <table>
    <tr style="background-color:#fafafa;color:#8c8c8c">
      <td>名称</td>
      <td >链接</td>
      <td >说明</td>
    </tr>
    <tr>
      <td>Vue</td>
      <td>
        <el-link href="https://github.com/vuejs/vue" target="_blank" type="primary">GitHub地址 : https://github.com/vuejs/vue</el-link>
        <br/>
        <el-link href="https://cn.vuejs.org/v2/guide/" target="_blank" type="success">官方网站 : https://cn.vuejs.org/v2/guide/</el-link>
      </td>
      <td>一套用于构建用户界面的渐进式框架。</td>
    </tr>

    <tr>
      <td>Element-UI</td>
      <td>
        <el-link href="https://github.com/ElementUI/element-starter" target="_blank" type="primary">GitHub地址 : https://github.com/ElementUI/element-starter</el-link>
        <br/>
        <el-link href="https://element.eleme.cn/#/zh-CN/component/installation" target="_blank" type="success">官方网站 : https://element.eleme.cn/#/zh-CN/component/installation</el-link>
      </td>
      <td>由饿了么团队设计的Vue组件</td>
    </tr>

    <tr>
      <td>Ant Design</td>
      <td>
        <el-link href="https://github.com/vueComponent/ant-design-vue/blob/master/README-zh_CN.md" target="_blank" type="primary">GitHub地址 : https://github.com/vueComponent/ant-design-vue/blob/master/README-zh_CN.md</el-link>
        <br/>
        <el-link href="https://www.antdv.com/docs/vue/introduce-cn/" target="_blank" type="success">官方网站 : https://www.antdv.com/docs/vue/introduce-cn/</el-link>
      </td>
      <td>阿里体系下的UI设计语言</td>
    </tr>

    <tr>
      <td>Vant UI</td>
      <td>
        <el-link href="https://github.com/youzan/vant/blob/dev/README.zh-CN.md" target="_blank" type="primary">GitHub地址 : https://github.com/youzan/vant/blob/dev/README.zh-CN.md</el-link>
        <br/>
        <el-link href="https://youzan.github.io/vant/#/zh-CN/" target="_blank" type="success">官方网站 : https://youzan.github.io/vant/#/zh-CN/</el-link>
      </td>
      <td>有赞的移动Vue组件库。</td>
    </tr>
    <tr>
      <td>mpVue</td>
      <td>
        <el-link href="https://github.com/Meituan-Dianping/mpvue" target="_blank" type="primary">GitHub地址 : https://github.com/Meituan-Dianping/mpvue</el-link>
        <br/>
        <el-link href="http://mpvue.com/" target="_blank" type="success">官方网站 : http://mpvue.com/</el-link>
      </td>
      <td>基于 Vue.js 的小程序开发框架。</td>
    </tr>
  </table>
</template>

<script>
    export default {
        name: "SourceUI"
    }
</script>

<style scoped lang="stylus">
  table
    width 100%
    margin-top 20px
    border 1px solid #e8e8e8
    border-radius 2px
    line-height 30px
    font-size 14px
    text-align center
    border-collapse: collapse;
    tr
      color: #262626
      border-bottom: 1px solid #e8e8e8;
      td:nth-child(1)
        width 15%
      td:nth-child(2)
        text-align left
        padding 10px 0 10px 0
        width 60%
      td:nth-child(3)
        text-align left
        padding-left 10px
        width 25%
</style>
