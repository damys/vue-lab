<template>
  <div id="app">
<!--     <img src="./assets/logo.png"> -->
    <header-vue></header-vue>
    <for-vue></for-vue>
    <sub-vue text1='text1-111' v-bind:text2='text2'></sub-vue>
    <footer-vue></footer-vue>
    <component-app></component-app>

  </div>
</template>

<script>
// 引用组件
import headerVue from './components/header.vue'
import forVue from './components/for.vue'
import subVue from './components/sub.vue'
import footerVue from './components/footer.vue'
var componentApp = {  template: `<p>我是组件A</p>` }


export default {
  name: 'App',
  data(){
    return {
      text2:'v-bind text2-222'
    }
  },


  // 局部：模板中使用组件
  components: {
    'headerVue':headerVue,
    'forVue':forVue,
    'subVue':subVue,
    'footerVue':footerVue,
    'componentApp':componentApp,
  }

}
</script>


<style>

</style>
