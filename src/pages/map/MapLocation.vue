<template>
  <div>
    <div class="container-desc">
     使用百度定图进行定位显示，插件为vue-baidu-map <br>
     参考网址：
      <el-link href="https://dafrok.github.io/vue-baidu-map/#/zh/index" target="_blank">
        https://dafrok.github.io/vue-baidu-map/#/zh/index
      </el-link>
      <br>当前 【经度】为：{{mouseLng}} , 【纬度】为：{{mouseLat}}
    </div>
    <baidu-map class="map" :center="locationCenter" :zoom="10" :scroll-wheel-zoom="true" @click="getInfo">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-marker
        v-for="(item,index) of LocationList"
        :position="item.position"
        @click="infoOpen(item)"
        :key="index"
        animation="BMAP_ANIMATION_DROP"
        :icon="{url: '/static/gpsImg/house3.png', size: {width: 77, height: 112}}">
        <bm-info-window :show="item.show" :title="item.title" @close="infoClose(item)" :offset="{width:-20,height:-30}"><!-- 利用offset设置偏移量位置 -->
          <p style="font-size: 12px">地址: {{ item.contents }}</p>
          <p style="font-size: 12px">电话: {{ item.phone }}</p>
        </bm-info-window>
      </bm-marker>
    </baidu-map>
  </div>
</template>

<script>

  export default {
    name: "AddrMap",
    data () {
      return {
        loading:true,
        mouseLng:0,
        mouseLat:0,
        //houseIcon:require("../../../static/gpsImg/house.png"),
        locationCenter:{ lng: 121.5024182, lat: 29.507822 },
        LocationList:[
          { show:true, position:{ lng:121.890506, lat:29.473008 },
            title:"<span style='font-size:14px;color:#CC5522;font-weight:bold;white-space:nowrap;'>宁波德源会计服务有限公司</span>",
            contents:'浙江省宁波市象山县法院路79号', phone:'0574 - 65715123' },
          { show:false, position:{ lng:121.929906, lat:29.208861 },
            title:"<span style='font-size:14px;color:#CC5522;font-weight:bold;white-space:nowrap;'>宁波德源会计服务有限公司(石浦)</span>",
            contents:'浙江省宁波市象山县石浦镇52号', phone:'0574 - 65715127' }
        ],
      }
    },
    methods: {
      getInfo(e){
        this.mouseLng = e.point.lng;
        this.mouseLat = e.point.lat;
      },
      infoOpen(item){
        item.show = true
      },
      infoClose(item){
        item.show = false
      }
    }
  }
</script>
<style>
  .BMap_cpyCtrl {
    display: none;
  }
  .anchorBL {
    display: none;
  }
</style>
<style lang="stylus" scoped>
  @import "../../assets/styles/varibles.styl"
  .map
    margin 30px auto
    width 100%
    height 720px

</style>
