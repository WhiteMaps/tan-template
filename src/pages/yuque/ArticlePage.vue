<template>
  <div class="container">
    <div class="article">
      <performance-optimize></performance-optimize>
    </div>
  </div>
</template>
<script>
    import PerformanceOptimize from "./article/PerformanceOptimize";
    export default {
        name: "ArticlePage",
        components: { PerformanceOptimize }
    }
</script>

<style scoped lang="stylus">
.container
  background-color #fafafa
  font-family: Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
.article
  margin 0 auto
  width 840px
  padding 32px
  border-radius 4px
  border 1px solid #e8e8e8
  background-color #fff
  color #3c3c3c
  line-height 24px
  font-variant tabular-nums
.kk

  font-family Chinese Quote, SFMono-Regular, Consolas
  word-wrap: break-word;
</style>
