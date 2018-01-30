<template>
    <div>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'detail'
    }
  },

  // DOM 未生成
  created(){
    console.log(this.$route.query)
  },

  // DOM 已生成,数据已加载到页面上
  mounted(){

  }
}
</script>

<style scoped>

</style>
