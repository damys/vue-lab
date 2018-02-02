<template>
    <div class="footer">
        <hr/>
        <h1>{{msg}}</h1>
        <input type="text" v-model='text'>
        <div>{{person.name}}</div>
        <button @click="changValue">changValue</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'watch',
      text:'',
      person:{
        name:'tom'
      }
    }
  },
  methods:{
    changValue(){
      this.person.name = 'jack'
    }
  },
  watch:{
    text:function(newV, oldV){
      console.log('text 值改变了newV:' + newV, "oldV:" + oldV)
    },

    person:{
      handler:function(newV, oldV){
        console.log('person 值改变了newV:' + newV, "oldV:" + oldV)
      },
      deep:true
    }
  }
}
</script>

<style scoped>

</style>
