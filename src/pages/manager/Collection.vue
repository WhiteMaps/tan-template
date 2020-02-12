<template>
    <div class="collection">收集整理的常用自定义组件
      <table>
        <tr style="background-color:#fafafa;color:#8c8c8c">
          <td>名称</td>
          <td>样式</td>
          <td style="text-align:center">说明</td>
        </tr>
        <tr>
          <td>置顶说明 <br/>tan-note</td>
          <td><tan-note></tan-note></td>
          <td>editor:<span class="remark">[type]</span>String <span class="remark">[default]</span>林探飞<br/>
              editTime:<span class="remark">[type]</span>String <span class="remark">[default]</span>2020-02-09 15:45
          </td>
        </tr>
        <tr>
          <td>抽屉窗口 <br/>tan-Drawer</td>
          <td><tan-drawer></tan-drawer></td>
          <td>引用el-drawer</td>
        </tr>
      </table>
    </div>
</template>

<script>
    import TanNote from "./components/TanNote";
    import TanDrawer from "./components/TanDrawer";
    export default {
        name: "Collection",
        components: {TanDrawer, TanNote}
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
      padding 10px 0 10px 0
      width 60%
    td:nth-child(3)
      text-align left
      padding-left 10px
      width 25%
.remark
  color #25b864

</style>
