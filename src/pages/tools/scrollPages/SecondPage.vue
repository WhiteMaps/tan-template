<template>
  <div class="page">
    <h3 style="color: #666666">企业信息</h3>
    <div class="header">
      <div class="header-block">
        <p class="header-block-title">核心企业</p>
        <p class="header-block-desc">青岛海尔电器股份有限公司</p>
      </div>

      <div class="header-block">
        <p class="header-block-title">所属行业</p>
        <p class="header-block-desc">家电制造业</p>
      </div>

      <div class="header-block">
        <p class="header-block-title">是否上市</p>
        <p class="header-block-desc">上市公司</p>
      </div>

      <div class="header-block">
        <p class="header-block-title">股票代码</p>
        <p class="header-block-desc">3534545</p>
      </div>
    </div>
    <div class="card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SecondPage"
  }
</script>

<style scoped lang="stylus">
 .page
  margin 20px
  h3
    margin 0 30px 0 30px
    line-height 40px
    border-bottom solid 2px #e6e6e6
  .header
    display flex
    padding 20px 40px 20px 40px
    .header-block
      width 300px
      margin 10px 20px 10px 20px
      .header-block-title
        font-size 13px
        color #cacaca
      .header-block-desc
        font-size 16px
        color #484848
  .card
    margin 0 40px 0 40px

</style>
