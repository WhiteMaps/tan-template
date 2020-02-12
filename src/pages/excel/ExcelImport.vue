<template>
  <div>
    <excel-upload-component :on-success="successHandle" :before-upload="beforeUpload"></excel-upload-component>
    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :prop="item" :label="item" :key="item"/>
    </el-table>
  </div>
</template>

<script>
    import ExcelUploadComponent from "./Components/ExcelUploadComponent";
    export default {
      name: "ExcelImport",
      components: { ExcelUploadComponent },
      data(){
        return{
          tableData: [],
          tableHeader: []
        }
      },
      methods:{
        beforeUpload(file) {
          const isLt1M = file.size / 1024 / 1024 < 1
          if (isLt1M) {
            return true
          }
          this.$message.warning('上传的文件请勿超过 1M 大小！')
          return false
        },
        successHandle({ results, header }) {
          this.tableData = results
          this.tableHeader = header
        }
      }
    }
</script>

<style scoped>

</style>
