<template>
    <div>
      <div class="container-desc">
        使用百度地图API，显示地图轨迹
      </div>

      <baidu-map class="map" :center="centerInfo" :zoom="10" @click="getGPS">
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-polyline :path="carLine" stroke-color="blue" :stroke-opacity="0.5" @lineupdate="updatePolyline"></bm-polyline>
        <bm-marker
          v-for="(car,index) of carList"
          :position="car.position"
          @click="infoOpen(car)"
          :key="index"
          animation="BMAP_ANIMATION_DROP"
          :icon="{url: '/static/gpsImg/car3.png', size: {width: 77, height: 112}}"
          :offset="{width:18,height:5}">
          <bm-info-window :show="car.show" :title="car.title" @close="infoClose(car)" :offset="{width:-20,height:-30}"><!-- 利用offset设置偏移量位置 -->
            <p style="font-size: 12px">司机: {{car.driver}}</p>
            <p style="font-size: 12px">车牌: {{car.number}}</p>
            <p style="font-size: 12px">地址: {{car.add}}</p>
          </bm-info-window>
        </bm-marker>
      </baidu-map>
    </div>
</template>

<script>
    export default {
      name: "GPSTrail",
      data(){
        return{
          centerInfo:{lng: 121.5024182, lat: 29.507822 },
          carLine:[
            {lng: 121.768029 ,lat: 29.229824},
            {lng: 121.482871 ,lat: 29.215702},
            {lng: 121.085238 ,lat: 29.291667},
            {lng: 121.01374 , lat: 29.383019},
            {lng: 120.933252 ,lat: 29.783045},
          ],
          carList:[
            { show:false, position:{ lng:120.933252, lat:29.783045 },
              title:"<span style='font-size:14px;color:#CC5522;font-weight:bold;white-space:nowrap;'>车辆跟踪信息框</span>",
              number:'浙B 123456' ,driver:'肖战' , add:'浙江省宁波市丹城'},
          ],
        }
      },
      methods: {
        updatePolyline(e){
          this.carLine = e.target.getPath();
        },
        getGPS(e){
          let lng = e.point.lng;
          let lat = e.point.lat;
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

<style lang="stylus" scoped>
  @import "../../assets/styles/varibles.styl"
  .map
    margin-top 10px
    width 100%;
    height 500px;
</style>
