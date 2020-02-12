<!--标题，作者，发布时间，重要等级？，标签，概要，保存草稿，保存正文-->
<template>
  <div>
    <div class="container-desc">
      本页面是由tinymce-vue提供富文本的编辑功能，能够保证从word粘贴过来以后保留大部分的格式内容。使用npm安装：<br>
      1. npm install tinymce -S<br>
      2. npm install @tinymce/tinymce-vue -S
    </div>
    <el-form class="container-content" size="small" :model="articleInfo">
      <el-row>
        <el-col :span="24">
          <el-form-item label-width="80px" label="标题">
            <el-input placeholder="请输入标题内容" v-model="articleInfo.inputTitle" required></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label-width="80px" label="作者">
            <el-input placeholder="请输入作者姓名" v-model="articleInfo.inputTitle" required></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="80px" label="发布时间">
            <el-date-picker
              v-model="articleInfo.inputTime"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label-width="80px" label="标签">
            <tag-input :onInputTag="getTagList"></tag-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label-width="80px" label="概要内容">
            <el-input type="textarea"  placeholder="请输入概要内容"
                      v-model="articleInfo.inputSummary"
                      maxlength="50"
                      show-word-limit></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <keep-alive>
      <tinymce-editor></tinymce-editor>
    </keep-alive>
  </div>
</template>

<script>
    import TagInput from "./components/TagInput";
    import TinymceEditor from "./components/tinymce/TinymceEditor";

    export default {
      name: "ArticleCreate",
      components: { TinymceEditor, TagInput},
      data(){
        return{
          articleInfo:{
            inputTitle:'',
            inputAuthor:'',
            inputTime:'',
            inputSummary:''
          },
          tagList:[],
          tagInputVisible: false,
          tagInputValue: ''
        }
      },
      methods:{
        getTagList(tagList){
          this.tagList = tagList
        }
      }
    }
</script>

<style scoped lang="stylus">
  @import "../../assets/styles/varibles.styl"
.container-content
  margin-top 30px


</style>
