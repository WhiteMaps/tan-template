<template>
  <div style="margin-top: 20px">
    <column></column>
  </div>
</template>

<script>
    export default {
      name: "EditableColumn",
      props:{
        isEdit:{ type:Boolean, default:false },
        editString:{ type:String ,default:''},
        labelString:{ type:String ,default:'' },
        propString:{ type:String ,default:'' },
      },
      data(){
        return{

        }
      }

    }
</script>

<style scoped>

</style>
