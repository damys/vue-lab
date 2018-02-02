<template>
    <div class="footer">
        <hr/>
        <h1>{{msg}}</h1>
        <input type="text" name="" v-model="price"><br>
        <input type="text" name="" v-model="num"><br>
        <input type="text" name="" v-model="rate"><br>
        <div>{{sum.price}}</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'computed',
      price:0,
      num:0,
      rate:0
    }
  },
  computed:{
    sum(){
      console.log('触发....')
      // 如果当函数内涉及到的this, 相关属性发生改变以后就触发，并返回一个值，可以是对象
      return {
        name:'iphone',
        price: this.price * this.num * (this.rate/100)
      }
    }
  }

}
</script>

<style scoped>

</style>
