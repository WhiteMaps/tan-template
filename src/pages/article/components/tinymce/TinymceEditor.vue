<!-- 使用tinymce-vue 作为富文本组件，无法保存内容，使用路由守卫修补BUG -->
<template>
  <div>
    <editor :init="tinymceInit" v-model="tinymceEdit" ></editor>
  </div>

</template>
<script>
  import tinymce from 'tinymce/tinymce';
  import 'tinymce/themes/silver/theme.min.js';
  import Editor from '@tinymce/tinymce-vue';
  import 'tinymce/plugins/image'// 插入上传图片插件
  import 'tinymce/plugins/media'// 插入视频插件
  import 'tinymce/plugins/table'// 插入表格插件
  import 'tinymce/plugins/lists'// 列表插件
  import 'tinymce/plugins/wordcount'// 字数统计插件
  import 'tinymce/plugins/preview'

  import './langs/zh_CN.js'; //载入中文
  import './skins/ui/oxide/skin.min.css';//载入皮肤
  export default {
    components: { Editor },
    props:{
      editData:{ type:String ,default:'请在此输入内容！' }
    },
    data() {
      return {
        tinymceEdit:this.editData,
        tinymceInit: {
          language: 'zh_CN',　　//使用中文
          height: 300,
          branding: false,    //隐藏tinymce右下角水印
          plugins: 'lists image media table wordcount preview', // 插件
          toolbar: 'undo redo |  fontsizeselect | formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat | preview',// 工具栏
          images_upload_handler:function(blobInfo, success, failure){
            const img = 'data:image/jpeg;base64,' + blobInfo.base64()
            success(img)
          }
        }
      };
    },
    methods:{
      // 上传图片
      uploadImgs(){

      }
    },
    created() {

    },

  };
</script>
