<template>
    <div>
      <el-tag
        :key="tag"
        v-for="tag in tagList"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
        effect="plain">
        {{tag}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="tagInputVisible"
        v-model="tagInputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput" :disabled="tagList.length > 4">{{tagList.length > 4 ? '最多添加5个新标签':'+ 新标签'}}</el-button>
    </div>
</template>

<script>
    export default {
      name: "TagInput",
      props:{
        onInputTag:Function
      },
      data(){
        return{
          tagList: [],
          tagInputVisible: false,
          tagInputValue: ''
        }
      },
      methods: {
        handleClose(tag) {
          this.tagList.splice(this.tagList.indexOf(tag), 1);
        },

        showInput() {
          this.tagInputVisible = true;
          this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
          });
        },

        handleInputConfirm() {
          let inputValue = this.tagInputValue;
          if (inputValue) {
            if (this.tagList.includes(inputValue)){
              this.$message.warning('请勿输入重复的标签信息！')
            }else {
              this.tagList.push(inputValue);
              this.onInputTag && this.onInputTag(this.tagList) //向父组件上传tagList
            }

          }
          this.tagInputVisible = false;
          this.tagInputValue = '';
        }
      }
    }
</script>

<style >
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
