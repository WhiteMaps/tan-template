<template>
  <el-dialog :visible.sync = "dialogVisible" center
             :before-close="closeDialog">
    <span slot="title">{{classicData.title}}</span>
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" @click="closeDialog">取 消</el-button>
      <el-button type="success" size="mini" @click="closeDialog" v-if="!classicData.data">新建保存</el-button>
      <el-button type="primary" size="mini" @click="closeDialog" v-if="!!classicData.data">编辑保存</el-button>
    </span>
  </el-dialog>
</template>

<script>
    export default {
      name: "ClassicDialog",
      props:{
        dialogVisible:Boolean,
        classicData:Object
      },
      data(){
        return{
        }
      },
      methods:{
        closeDialog(){
          this.$emit('update:dialogVisible', false);
        }
      }
    }
</script>

<style scoped>

</style>
