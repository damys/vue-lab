<template>
    <div>
        <hr>
        <h1>{{msg}}</h1>
        <h4>{{text1}}</h4>
        <h4>{{text2}}</h4>
        <button @click="onClickMe">Send data to parent</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
        msg:'sub 子组件传值',
        subdata:''
    }
  },

  // 接受父组件值参数的设置，声明一下
  props:['text1', 'text2'],

  // 子传父
  methods:{
      onClickMe(){
        this.$emit('sayHello', {name:'Send data to parent'})
      }
  }
}
</script>

<style scoped>

</style>
