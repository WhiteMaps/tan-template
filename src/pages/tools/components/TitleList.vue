<template>
    <div class="titleList">
      <div @click="setTitle(1)" :class="{'active':titleIndex === 1}"><span class="iconfont">{{titleIndex === 1?'&#xe649;':'&#xe657;'}}</span><span class="titleList-title">项目概览</span></div>
      <div @click="setTitle(2)" :class="{'active':titleIndex === 2}"><span class="iconfont">{{titleIndex === 2?'&#xe602;':'&#xe657;'}}</span><span class="titleList-title">企业信息</span></div>
      <div @click="setTitle(3)" :class="{'active':titleIndex === 3}"><span class="iconfont">{{titleIndex === 3?'&#xe60d;':'&#xe657;'}}</span><span class="titleList-title">准入详情</span></div>
      <div @click="setTitle(4)" :class="{'active':titleIndex === 4}"><span class="iconfont">{{titleIndex === 4?'&#xe647;':'&#xe657;'}}</span><span class="titleList-title">相关贸易</span></div>
      <div @click="setTitle(5)" :class="{'active':titleIndex === 5}"><span class="iconfont">{{titleIndex === 5?'&#xe6d8;':'&#xe657;'}}</span><span class="titleList-title">贷款记录</span></div>
      <!--<div class="titleLine"> | </div>-->
      <!--<div @click="setTitle(6)" :class="{'active':titleIndex === 6}"><span class="iconfont">&#xe63f;</span><span class="titleList-title">信息披露</span></div>
      <div class="titleLine"> | </div>
      <div @click="setTitle(7)" :class="{'active':titleIndex === 7}"><span class="iconfont">&#xeb43;</span><span class="titleList-title">资质审核</span></div>
      <div class="titleLine"> | </div>
      <div @click="setTitle(8)" :class="{'active':titleIndex === 8}"><span class="iconfont">&#xe65b;</span><span class="titleList-title">评判标准</span></div>
      <div class="titleLine"> | </div>
      <div @click="setTitle(9)" :class="{'active':titleIndex === 9}"><span class="iconfont">&#xe610;</span><span class="titleList-title">审核意见</span></div>-->
    </div>
</template>

<script>
    export default {
      name: "TitleList",
      props:{
        titleIndex:{ type:Number, default:1 }
      },
      methods:{
        setTitle(index){
          //this.$emit('update:titleIndex',index);
          this.$emit('updateIndex',index)
        }
      }
    }
</script>

<style scoped lang="stylus">
  @import "../../../assets/styles/varibles.styl"
  .titleList
    font-size 13px
    padding-top 30px
    color: #a3a3a3
    .titleList-title
      margin-left 10px
    .titleLine
      margin: 10px 0 10px
      font-size: 12px
      text-align left
      padding-left 27px
    .active
      color red
      font-size 14px
    div
      margin 20px auto 20px auto
</style>
