<!-- Table基础表格 1.导入功能使用  -->
<template>
  <section class="table" v-loading="loading">
    <div class="table-row">
      <p>点击弹出当前列的具体信息</p>
      <el-checkbox v-model="hiddenTag" style="margin: 10px 0">显示"标签"项</el-checkbox>
    </div>
    <!--  列表 -->
    <el-table v-if="!loading"
              :data="dataList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
              ref="multipleTable"
              tooltip-effect="light"
              style="width: 100%"
              @selection-change="handleSelection"
              highlight-current-row > <!-- @row-dblclick="clickRow"-->
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" :index="indexNo" label="序号" sortable width="50" align="center"></el-table-column>
      <el-table-column prop="date" label="日期" sortable width="180" align="center"></el-table-column>
      <el-table-column label="姓名" min-width="120" align="center">
        <template slot-scope="scope">
          <span class="link-type" @click="editDialog(scope.$index, scope.row)">{{ scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱"  width="130" align="center"></el-table-column>
      <el-table-column prop="phone" label="手机"  width="130" align="center"></el-table-column>
      <el-table-column prop="addr" label="地址"  width="160" align="center"></el-table-column>
      <el-table-column  label="标签"  width="150" align="center" v-if="hiddenTag">
        <template slot-scope="scope">
          <el-tag :type="filterTag(scope.row.tag)" effect="plain" size="small">{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>65730351
      <el-table-column label="操作" align="center" min-width="120">
        <template slot-scope="scope">
          <el-button size="mini"  type="primary" plain @click.native.prevent="editDialog(scope.$index, scope.row)" >编辑</el-button>
          <el-button size="mini"  type="danger" plain @click.native.prevent="deleteDialog(scope.$index, scope.row)" >删除</el-button>
        </template>
      </el-table-column>
      <template v-slot:append>
        <!--分页栏显示-->
        <div class="block">
          <div style="color:#20a0ff;font-size:14px;">
            <span style="margin: 10px;">选择文件 {{selectList.length}} 个</span>
            <el-button  type="primary" plain size="mini" @click="excelExport">导出</el-button>
          </div>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10,20,50]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="dataList.length">
          </el-pagination>
        </div>
      </template>
    </el-table>
    <classic-dialog :dialog-visible.sync ="classicVisible" :classic-data="classicData"></classic-dialog>
  </section>
</template>

<script>
  import * as tableData from './js/tableData'
  import ClassicDialog from "./dialog/ClassicDialog";

  const defaultValue = ['date','name','email','phone','addr','tag']
  export default {
    name: "LinkTable",
    components: { ClassicDialog },
    data(){
      return{
        loading:false, //加载
        checkValue:defaultValue,
        currentPage:1, //默认在第一页开始
        pageSize:10,   //默认显示10条数据
        /*totalCount:tableData.dataList.length,  //默认条数为10条*/
        selectList:[], //选择的列表
        showPanel:tableData.showPanel,
        dataList:tableData.dataList,

        classicVisible : false,
        classicData:{title:'',data:{}},

        hiddenTag:true
      }
    },
    watch:{
      checkValue(value){
        this.showPanel = tableData.showPanel.filter(element => value.indexOf(element.title) >= 0)
      }
    },
    methods:{
      //初始化加载数据
      getData(){
        this.loading = true;
        /*ajaxApi.getZhEntity('').then((response) =>{
          this.loading = false;
        })*/
        this.loading=false
      },
      indexNo:function (index) { return (this.currentPage-1)*this.pageSize+index+1; },
      //获取选择的列表内容
      handleSelection(val){ this.selectList = val; },

      dclickRow(row){ console.log('点击的table row：',row) },//双击显示内容
      handleSizeChange(val) { this.pageSize = val; },//修改显示页数

      handleCurrentChange(val) { this.currentPage = val; },//修改当前页
      newDialog(){
        this.classicVisible = true ;
        this.classicData = {title:'新建',data:null}
      },
      //编辑操作
      editDialog(index, row){
        this.classicVisible = true ;
        this.classicData = {title:'编辑',data:row}
        /*console.log('Edit选择的index：',index,' \n选择的row：',row)*/
      },
      //删除操作
      deleteDialog(index, row) {
        //缺少后台处理
        this.$confirm('该队列将被删除, 是否继续?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$delete(this.dataList, index);
          this.$message.success('删除成功!');
        }).catch(() => {
          this.$message.info('已取消删除');
        });
      },
      excelExport(){
        if (this.selectList.length > 0){
          import('@/api/excelApi').then(excel => { //懒加载
            const tableHeader = ['日期','姓名','邮箱','手机','地址','标签']
            const tableTitle = ['date','name','email','phone','addr','tag']
            const selectData = this.selectList
            const data = this.formatJson(tableTitle,selectData)
            excel.export_json_to_excel({
              header: tableHeader, //表头 必填
              data:data, //具体数据 必填
              filename: 'excel-list', //非必填
              autoWidth: true, //非必填
              bookType: 'xlsx' //非必填
            })
          })
        } else {
          this.$message.info('当前没有选择需要导出的列表！')
        }
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
      },
      filterTag(tag){
        if (tag === '员工') return 'info'
        if (tag === '经理') return 'warning'
        if (tag === '大神') return 'danger'
      }
    },
    created() {
      this.getData();
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../assets/styles/varibles.styl"
  .table
    .table-row
      background-color #f2f2f2
      padding 10px
      margin-bottom 10px
    .table-row p{
      margin 0
      font-size 15px
      color #898989
    }
    .block
      display flex;
      margin:10px 0 10px 0
      font-size 14px
      color #20a0ff
      align-items: center;
      justify-content: space-between;
    .link-type
      color: #337ab7;
      cursor: pointer;
      &:hover{
        color: rgb(32, 160, 255);
      }

</style>
