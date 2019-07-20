<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      // this.$axios.get('http://127.0.0.1:8081/assets/js/data.json').then(response => {
      //   console.log(response)
      // }, response => {
      //   console.log('error11')
      // })
    }
  }
}
</script>
<style>
@import './assets/css/reset.css';
@import './assets/css/fonts/iconfont.css';
@import './assets/css/frame.css';
@import './assets/css/style.css';
</style>
