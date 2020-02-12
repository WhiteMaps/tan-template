<template>
    <div>
      <div class="container-desc">
        1. 提供点击单元格可编辑功能 <br>
        2. 提供表尾合计功能<br>
        3. 提供按顺序增减单表格行数<br>
        4. 点击表格标题，弹窗提示
      </div>
      <div style="margin-top: 20px">
        <el-button size="mini" type="success" plain @click="addHandle">新增</el-button>
      </div>
      <div style="margin-top: 20px">
        <el-table  :data="tableData"
                   show-summary
                   :summary-method="getSummaries"
                   @cell-click="cellEdit"
                   border center
                   style="width: 100%;" size="mini">
          <el-table-column  width="50" label="序号">
            <template slot-scope="{row,$index}">
              <span>{{$index + 1}}</span>
            </template>
          </el-table-column>
<!--          <el-table-column prop="id" label="ID"  width="80"></el-table-column>-->
          <el-table-column prop="name" width="120">
            <template slot="header">
              <span>品类 </span>
              <span class="el-icon-edit"></span>
              <el-tooltip class="item" effect="dark" content="品类的提示" placement="top-start">
                <span class="el-icon-warning-outline"></span>
              </el-tooltip>
            </template>
            <template slot-scope="{row,$index}">
              <el-input v-if="nameEdit[$index]" v-model="row.name" size="mini"></el-input>
              <span v-else>{{ row.name}}</span>
            </template>
          </el-table-column>

          <el-table-column prop="package"   width="150" >
            <template slot="header">
              <span>包装 </span>
              <span class="el-icon-edit"></span>
              <el-popover
                placement="top-start"
                title="说明"
                width="100"
                trigger="hover"
                content="包装的备注描述">
                <span slot="reference" class="el-icon-warning-outline"></span>
              </el-popover>
            </template>
            <template slot-scope="{row,$index}">
              <el-select v-if="packageEdit[$index]" v-model="row.package" placeholder="请选择" size="mini" clearable>
                <el-option v-for="item in packageOptions"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value"
                           :disabled="item.disabled">
                </el-option>
              </el-select>
              <span v-else>{{packageFormat(row.package)}}</span>
            </template>
          </el-table-column>

          <el-table-column prop="weight"   width="80" >
            <template slot="header">
              <span>重量 </span>
              <span class="el-icon-edit"></span>
            </template>
            <template slot-scope="{row,$index}">
              <el-input v-if="weightEdit[$index]" v-model="row.weight" size="mini"></el-input>
              <span v-else>{{ row.weight}}</span>
            </template>
          </el-table-column>

          <el-table-column prop="volume"   width="120" >
            <template slot="header">
              <span>体积 </span>
              <span class="el-icon-edit"></span>
            </template>
            <template slot-scope="{row,$index}">
              <el-input v-if="volumeEdit[$index]" v-model="row.volume" size="mini"></el-input>
              <span v-else>{{ row.volume}}</span>
            </template>
          </el-table-column>

          <el-table-column prop="num"   width="80" >
            <template slot="header">
              <span>件数 </span>
              <span class="el-icon-edit"></span>
            </template>
            <template slot-scope="{row,$index}">
              <el-input v-if="numEdit[$index]" v-model="row.num" size="mini"></el-input>
              <span v-else>{{ row.num}}</span>
            </template>
          </el-table-column>

          <el-table-column prop="pallet"   width="80" >
            <template slot="header">
              <span>托数 </span>
              <span class="el-icon-edit"></span>
            </template>
            <template slot-scope="{row,$index}">
              <el-input v-if="palletEdit[$index]" v-model="row.pallet" size="mini"></el-input>
              <span v-else>{{ row.pallet}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="total" label="合计费用" :formatter="getTotal" width="80" ></el-table-column>
          <el-table-column prop="desc">
            <template slot="header">
              <span>备注 </span>
              <span class="el-icon-edit"></span>
            </template>
            <template slot-scope="{row,$index}">
              <el-input v-if="descEdit[$index]" v-model="row.desc" size="mini"></el-input>
              <span v-else>{{ row.desc}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="60">
            <template slot-scope="{row,$index}">
              <el-button v-if="tableData.length > 1" type="danger" icon="el-icon-delete" size="mini" circle @click="deleteHandle($index)"></el-button>
            </template>
          </el-table-column>

        </el-table>
      </div>
    </div>
</template>

<script>
    export default {
      name: "EditableTable",
      data(){
        return{
          tableData:[
            { id: '1',name: '塑料件',package:'weight',weight:'12',volume:'', num:'',pallet:'',total:'',desc:''},
            { id: '2',name: '玩具',package:'num',weight:'',volume:'', num:'3',pallet:'',total:'',desc:''},
            { id: '3',name: '模具',package:'volume',weight:'',volume:'22', num:'',pallet:'',total:'',desc:''},
            { id: '4',name: '衣服',package:'pallet',weight:'',volume:'', num:'',pallet:'2',total:'',desc:''},
            { id: '5',name: '鞋子',package:'volume',weight:'',volume:'3', num:'',pallet:'',total:'',desc:''}],

          packageOptions:[ {value:'weight',label:'重量'}, {value:'volume',label:'体积'},
                           {value:'num',label:'件数'},    {value:'pallet',label:'托数'},
                           {value:'box',  label:'箱',disabled:true}],
          nameEdit:[],
          packageEdit:[],
          weightEdit:[],
          volumeEdit:[],
          numEdit:[],
          palletEdit:[],
          descEdit:[],
        }
      },

      methods:{
        cellEdit(row,column){
          this.nameEdit = [];this.packageEdit = [];this.weightEdit = [];
          this.volumeEdit = [];this.numEdit = [];this.palletEdit = [];
          this.descEdit = []
          let index = this.tableData.findIndex((item)=>{
            return item.id === row.id
          })
          if (column.property === 'name'){ this.$set(this.nameEdit,index,true) }
          if (column.property === 'package'){ this.$set(this.packageEdit,index,true) }
          if (column.property === 'weight'){ this.$set(this.weightEdit,index,true) }
          if (column.property === 'volume'){ this.$set(this.volumeEdit,index,true) }
          if (column.property === 'num'){ this.$set(this.numEdit,index,true) }
          if (column.property === 'pallet'){ this.$set(this.palletEdit,index,true) }
          if (column.property === 'desc'){ this.$set(this.descEdit,index,true) }
        },
        getSummaries(param){ //合计的返回方法
          const { columns,data } = param;
          const sums = [];
          columns.forEach((column,index)=>{
            if (index === 0){
              sums[index]='总价';return
            }
            if (column.property === 'desc'){
              sums[index] = 'N/A';return
            }
            const values = data.map(item => Number(item[column.property]))
            if (!values.every(value =>isNaN(value))) {
              let sum = values.reduce( (prev,curr)=>{
                const value = Number(curr);
                if (!isNaN(value)){
                  return prev+curr
                } else {
                  return prev
                }
              },0);
              if (column.property === 'weight')  sums[index] =sum.toFixed(2) + '吨';
              if (column.property === 'volume')  sums[index] =sum.toFixed(2) + 'm³';
              if (column.property === 'num')  sums[index] =sum.toFixed(2) + '件';
              if (column.property === 'pallet')  sums[index] =sum.toFixed(2) + '托';
              if (column.property === 'total')  sums[index] =sum.toFixed(2) + '元';

            }else {
              sums[index] = 'N/A'
            }
          });
          return sums
        },
        deleteHandle(index){
          this.$delete(this.tableData,index)
        },
        addHandle(){
          let obj = { id: '11',name: '附加',package:'托数',weight:'',volume:'', num:'',pallet:'',total:'',desc:''}
          this.tableData.push(obj)
        },
        getTotal(row, column, cellValue, index){
          if (row.package === 'weight'){ row.total= Number(row.weight)*20 || 0 ;return row.total }
          if (row.package === 'volume'){ row.total= Number(row.volume)*20 || 0 ;return row.total }
          if (row.package === 'num'){    row.total= Number(row.num)*20 || 0    ;return row.total }
          if (row.package === 'pallet'){ row.total= Number(row.pallet)*20 || 0 ;return row.total }
          if (row.package === 'box') {   row.total= Number(row.box)*20 || 0    ;return row.total }
        },
        packageFormat(packageStr){
          if (packageStr === 'weight') return '重量'
          if (packageStr === 'volume') return '体积'
          if (packageStr === 'num') return '数量'
          if (packageStr === 'pallet') return '托数'
          if (packageStr === 'box') return '箱'
        }
      }
    }
</script>
<style>
  .el-scrollbar__wrap{
    margin-bottom: 0 !important;
  }
</style>
<style scoped lang="stylus">
  @import "../../assets/styles/varibles.styl"
</style>
