<template>
    <div class="note">
      <div class="node-icon"><span class="iconfont" style="font-size: 40px">&#xe6fd;</span></div>
      <div class="node-text">当前文档的最新内容尚未更新，可进入编辑页面继续编辑或进行更新，更新后内容在阅读页可见.
        &nbsp;<span style="font-weight: bolder">{{editor}}</span>&nbsp;最后更改于
        <span style="font-size: 12px;color: #8C8C8C">{{editTime}}</span></div>
    </div>
</template>

<script>
    export default {
        name: "TanNote",
        props:{
          editor:{ type:String , default:'林探飞' },
          editTime:{ type:String , default:'2020-02-09 15:45' }
        }
    }
</script>

<style scoped lang="stylus">
.note
  max-width 752px
  border-radius 4px
  padding 16px 20px
  background-color #fafafa
  display flex
  .node-icon
    color #c3c3c3
    width 40px
    height 50px
    flex none
    margin-right 20px
  .node-text
    text-align left
    color #595959
    font-size 14px
    line-height 25px

</style>
