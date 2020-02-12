<template>
    <div>工具集合
      <div class="tools">
        <tan-card/>

      </div>
    </div>
</template>

<script>
    import TanCard from "./TanCard";
    export default {
        name: "Tools",
        components: {TanCard}
    }
</script>

<style scoped lang="stylus">
  .tools
    margin 20px auto
    width 900px
    overflow hidden
    display flex
    padding 20px

</style>
