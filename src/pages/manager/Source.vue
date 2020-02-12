<template>
  <div class="collection">
    <div class="container-desc">
      开源资源收集
    </div>
    <table>
      <tr>
        <td>Vue</td>
        <td>
          <el-link href="https://github.com/vuejs/vue" target="_blank" type="primary">GitHub地址 : https://github.com/vuejs/vue</el-link>
          <br/>
          <el-link href="https://cn.vuejs.org/v2/guide/" target="_blank" type="success">官方网站 : https://cn.vuejs.org/v2/guide/</el-link>
        </td>
        <td>一套用于构建用户界面的渐进式框架。</td>
      </tr>
    </table>

    <h3>UI框架</h3>
    <source-ui></source-ui>

    <h3>实用链接</h3>
    <source-url></source-url>
  </div>
</template>

<script>
    import SourceUi from "./Source/SourceUi";
    import SourceUrl from "./Source/SourceUrl";
    export default {
        name: "Source",
      components: {SourceUrl, SourceUi }
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
