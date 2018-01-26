<template>
  <div id="app">
<!--     <img src="./assets/logo.png"> -->
    <header-vue></header-vue>
    <for-vue></for-vue>
    <sub-vue text1='text1-111' v-bind:text2='text2' @sayHello="listen"></sub-vue>

    <ui-vue></ui-vue>
    <footer-vue></footer-vue>
    <component-app></component-app>


  </div>
</template>

<script>
//-- 引用组件 -------------------------
var componentApp = {  template: `<p>我是组件A</p>` }
import headerVue from './components/header.vue'
import forVue from './components/for.vue'
import subVue from './components/sub.vue'
import footerVue from './components/footer.vue'
import uiVue from './components/ui.vue'

export default {
  data(){
    return {
      text2:'v-bind text2-222'
    }
  },

  methods:{
    //-- 组件传值：子传父 ----------------------
    // ES6 写法
    listen(...data){
        console.log(data)
        console.log(data[0].name)
    }

    // listen:function(data){
    //     console.log(data)
    // }
  },

  // 局部：模板中使用组件
  components: {
    'componentApp':componentApp,
    'headerVue':headerVue,
    'forVue':forVue,
    'subVue':subVue,
    'footerVue':footerVue,    
    'uiVue':uiVue
  }

}
</script>


<style>

</style>
