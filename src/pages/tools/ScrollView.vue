<template>
    <div class="scroll-view">
      <div class="container-desc">
        使用scrollIntoView实现锚点定位及跳转（URL不变化）
        <el-button @click="setView(1)">项目概览</el-button>
        <el-button @click="setView(2)">企业信息</el-button>
        <el-button @click="setView(3)">准入详情</el-button>
        <el-button @click="setView(4)">相关贸易</el-button>
        <el-button @click="setView(5)">贷款记录</el-button>
      </div>
      <div class="section">
        <div :class="[scrollHeight < 135 ? 'section-left':'section-left-fixed']">
          <title-list :title-index="titleIndex" @updateIndex="setView"></title-list>
        </div>
        <div  class="section-right">
          <div id="div1" style="height: 700px;">我是div 1我是div 1我是div 1我是div 1我是div 1我是div 1我是div 1我是div 1我是div 1我是div 1我是div 1我是div 1我是div 1我是div 1我是div 1我是div 1我是div 1</div>
          <div id="div2" style="height: 700px;"><second-page></second-page></div>
          <div id="div3" style="height: 700px;"><third-page></third-page></div>
          <div id="div4" style="height: 700px;">

          </div>
          <div id="div5" style="width: 100%;height: 700px;background-color: #898989">我是div 5</div>
        </div>
      </div>
    </div>
</template>

<script>
import TitleList from "./components/TitleList";
import ThirdPage from "./scrollPages/ThirdPage";
import SecondPage from "./scrollPages/SecondPage";
export default {
  components: {SecondPage, ThirdPage, TitleList},
  data() {
    return{
      scrollHeight:0,
      titleIndex:2
    }
  },
  methods:{
    handleScroll(){
      this.scrollHeight = window.pageYOffset ;
      // console.log('跟踪偏移量Y：',this.scrollHeight);
      if (this.scrollHeight > 132  && this.scrollHeight < 830) this.titleIndex = 1;
      if (this.scrollHeight > 830  && this.scrollHeight < 1530) this.titleIndex = 2;
      if (this.scrollHeight > 1530 && this.scrollHeight < 2130) this.titleIndex = 3;
      if (this.scrollHeight > 2130 && this.scrollHeight < 2830) this.titleIndex = 4;
      if (this.scrollHeight > 2830 && this.scrollHeight < 3530) this.titleIndex = 5;
      if (this.scrollHeight > 3530 && this.scrollHeight < 4230) this.titleIndex = 6;
    },

    //插入 设置高度的方法
    setView(index){
      document.querySelector('#div'+index).scrollIntoView({behavior:"smooth"});
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
}
</script>

<style>
/*  .box {
    width: 200px;
    height: 100px;
  }*/

  .el-scrollbar {
    height: 100%;
  }
  .el-scrollbar__wrap {
    overflow: scroll;
    width: 110%;
    height: 120%;
  }
</style>

<style scoped lang="stylus">
  @import "../../assets/styles/varibles.styl"
.scroll-view
  height 100%
  width 100%
  .section
    margin-top 10px
    overflow hidden
    position relative
    .section-right
      margin-right 182px
    .section-left
      position absolute
      width 180px
      height 100%
      text-align center
      right 0
    .section-left-fixed
      position fixed
      width 180px
      height 100%
      text-align center
      right 10px
      top 0


</style>
