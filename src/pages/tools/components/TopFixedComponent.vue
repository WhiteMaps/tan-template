<!-- 头部锁定组件,暴露属性
     firstShow：初始状态是否显示本组件
     positionHeight ：组件锁定时，距离顶部的高度
     showHeight:下降指定高度显示本组件    -->
<template>
  <transition name="fixHeader" >
    <div v-show="headerShow" class="header" :style="{top:positionHeight+'px',height: height+'px'}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
    export default {
      name: "TopFixedComponent",
      props:{
        firstShow:{ type: Boolean, default: false },
        positionHeight: { type: Number, default: 0 },
        showHeight:{ type: Number, default: 100 },
        height:{ type: Number, default: 200 }
      },
      data(){
        return{
          headerShow:this.firstShow
        }
      },
      methods:{
        handleShow(){
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          this.headerShow = scrollTop > this.showHeight;
        }
      },
      mounted() {
        window.addEventListener('scroll',this.handleShow)
      },
      destroyed() {
        window.removeEventListener('scroll', this.handleShow)
      }
    }
</script>

<style scoped lang="stylus">
  .header
    position fixed
    z-index 99
    width 100%
    background-color rgba(39, 180, 204, 0.33)
    box-shadow: 0 0 10px #eaeaea;
  .fixHeader-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fixHeader-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

