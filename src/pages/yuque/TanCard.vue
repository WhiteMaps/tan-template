<template>
    <div class="card">
      <div class="card-star">
        <i :class="isStar ? 'el-icon-star-on':'el-icon-star-off'" @click="starHandle"></i>
      </div>
      <div class="card-icon">

      </div>
      <div class="card-desc">

      </div>
    </div>
</template>

<script>
    export default {
      name: "TanCard",
      props:{
          width:{ type:Number , default:200 },
          height:{ type:Number , default:205 },
          title:{ type:String , default:'' },
          href:{ type:String , default:''}
      },
      data(){
        return{
          isStar:false
        }
      },
      methods: {
        starHandle(){
          this.isStar = !this.isStar;
          var href = document.location;
          var title = document.title;
          console.log('收藏，地址：',document.location.origin,' 名称：',title);
        }
      }
    }
</script>

<style scoped lang="stylus">
.card
  border 1px solid #ebeef5
  border-radius 4px
  transition box-shadow .3s
  width 225px
  height 205px
  &:hover
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  .card-collect
    width 100%
    height 30px
  .card-star
    padding 10px
    text-align right
    color #cacaca
    font-family 20px


</style>
