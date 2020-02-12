<template>
  <table>
    <tr style="background-color:#fafafa;color:#8c8c8c">
      <td>名称</td>
      <td >链接</td>
      <td >说明</td>
    </tr>
    <tr>
      <td>360查字体</td>
      <td>
        <el-link href="http://fonts.safe.360.cn/" target="_blank" type="info">http://fonts.safe.360.cn/</el-link>
      </td>
      <td>查询font字体版权</td>
    </tr>
  </table>
</template>

<script>
    export default {
        name: "SourceUrl"
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
