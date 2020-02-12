<template>
  <div>
    <input ref="upload-input" class="upload-input" type="file" accept=".xls,.xlsx" @change="uploadFile">
    <el-button type="primary" size="mini" plain :loading="loading" @click="uploadClick">请上传Excel文件</el-button>
    <el-button type="info" size="mini" plain @click="clearData">清空数据</el-button>
  </div>
</template>

<script>
  import XLSX from 'xlsx'
    export default {
      name: "ExcelImportComponent",
      props:{
        beforeUpload:Function, //导入功能
        onSuccess:Function
      },
      data(){
        return{
          loading:false,
          excelInfo:{
            header:null,
            content:null
          }
        }
      },
      methods:{
        uploadClick(){
          this.$refs['upload-input'].click()
        },
        clearData(){
          this.excelInfo.header = []
          this.excelInfo.results = []
          this.onSuccess && this.onSuccess(this.excelInfo)
        },
        uploadFile(e){
          const files = e.target.files;
          const excelFile = files[0];//只能输入一个excel表
          if (!excelFile) return
          this.upload(excelFile)
        },
        upload(excel){
          this.$refs['upload-input'].value = null //置空
          if (!this.beforeUpload){
            this.readerExcel(excel)
            return
          }
          const before = this.beforeUpload(excel)
          if (before){
            this.readerExcel(excel)
          }
        },
        readerExcel(excel){
          this.loading = true
          return new Promise((resolve,reject)=>{
            const reader = new FileReader()
            reader.onload = e =>{
              const data = e.target.result
              const workbook = XLSX.read(data,{type:'array'})
              const firstSheetName = workbook.SheetNames[0]
              const worksheet = workbook.Sheets[firstSheetName]
              const header = this.getHeaderRow(worksheet)
              const results = XLSX.utils.sheet_to_json(worksheet)
              this.generateData({ header, results })
              this.loading = false
              resolve()
            }
            reader.readAsArrayBuffer(excel)
          })
        },
        getHeaderRow(sheet) {
          const headers = []
          const range = XLSX.utils.decode_range(sheet['!ref'])
          let C
          const R = range.s.r
          /* start in the first row */
          for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
            const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
            /* find the cell in the first row */
            let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
            if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
            headers.push(hdr)
          }
          return headers
        },
        generateData({ header, results }) {
          this.excelInfo.header = header
          this.excelInfo.results = results
          this.onSuccess && this.onSuccess(this.excelInfo)
        },

      }
    }
</script>

<style scoped lang="stylus">
  .upload-input
    display: none;
    z-index: -9999;

</style>
