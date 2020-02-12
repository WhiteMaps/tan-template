<template>
  <div>
    <div class="container-desc">
      使用百度地图API，管理地图中的窗口列表：<br>
      选择显示的数据：
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="carList"></el-checkbox>
        <el-checkbox label="houseList"></el-checkbox>
      </el-checkbox-group>
<!--      <div>list:{{checkList}}</div>-->
    </div>
    <baidu-map class="map" :center="locationCenter" :zoom="10" :scroll-wheel-zoom="true">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <div v-for="item in checkList">
          <bm-marker
            v-if="item === 'carList'"
            v-for="(car,index) in carList"
            :position="car.position"
            @click="infoOpen(car)"
            :key="index"
            animation="BMAP_ANIMATION_DROP"
            :icon="{url: '/static/gpsImg/car3.png', size: {width: 50, height: 112}}">
            <bm-info-window :show="car.show" @close="infoClose(car)" :title="car.title" :offset="{width:-7,height:-30}"><!-- 利用offset设置偏移量位置 -->
              <p style="font-size: 12px">司机: {{car.driver}}</p>
              <p style="font-size: 12px">车牌: {{car.number}}</p>
              <p style="font-size: 12px">地址: {{car.add}}</p>
            </bm-info-window>
          </bm-marker>
          <bm-marker
            v-if="item === 'houseList'"
            v-for="(house,index) in houseList"
            :position="house.position"
            @click="infoOpen(house)"
            :key="index"
            animation="BMAP_ANIMATION_DROP"
            :icon="{url: '/static/gpsImg/house3.png', size: {width: 50, height: 112}}">
            <bm-info-window :show="house.show" @close="infoClose(house)" :title="house.title" :offset="{width:-7,height:-30}"><!-- 利用offset设置偏移量位置 -->
              <p style="font-size: 12px"><span style="font-weight: bolder">经营模式</span>: {{house.mode}}</p>
              <p style="font-size: 12px"><span style="font-weight: bolder">主营产品</span>: {{house.product}}</p>
              <p style="font-size: 12px"><span style="font-weight: bolder">主要客户</span>: {{house.customer}}</p>
              <p style="font-size: 12px"><span style="font-weight: bolder">所在地址</span>: {{house.add}}</p>
              <el-button size="mini">前往<span class="iconfont">&#xe63e;</span></el-button>
            </bm-info-window>
          </bm-marker>
        </div>
    </baidu-map>
  </div>
</template>

<script>
  export default {
    name: "GPSMapTrail",
    data(){
      return{
        checkList:[],
        locationCenter:{ lng: 121.5024182, lat: 29.507822 },
        carList:[
          { show:false, position:{ lng:121.890506, lat:29.473008 },
            title:"<span style='font-size:14px;color:#CC5522;font-weight:bold;white-space:nowrap;'>车辆跟踪信息框</span>",
            number:'浙B 123456' ,driver:'肖战' , add:'浙江省宁波市丹城'},
          { show:false, position:{ lng:121.929906, lat:29.208861 },
            title:"<span style='font-size:14px;color:#CC5522;font-weight:bold;white-space:nowrap;'>车辆跟踪信息框</span>",
            number:'浙A Y51232' ,driver:'范闲' , add:'浙江省宁波市石浦'}
        ],
        houseList:[
          { show:false, position:{ lng:121.830506, lat:29.473008 },
            title:"<span style='font-size:14px;color:#3142ff;font-weight:bold;white-space:nowrap;'>浙江天时利有限公司</span>",
            mode:'生产批发', product:'真丝，纤维，亚麻布，涤纶布，腈纶',
            customer:'欧美，南美，非洲北部地区',add:'浙江省宁波市象山县荷塘路231号'},
          { show:false, position:{ lng:121.802906, lat:29.208861 },
            title:"<span style='font-size:14px;color:#3142ff;font-weight:bold;white-space:nowrap;'>宁波松兰山海滨</span>",
            mode:'模具制造', product:'冲压件，金属配件定制，五金批发',
            customer:'国内中西部客户，汽车生产商等',add:'浙江省宁波市象山县石浦后喵街25号'},
        ]
      }
    },
    methods:{
      infoOpen(item){ item.show = true; },
      infoClose(item){  item.show = false; }
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
