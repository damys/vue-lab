<template>
  <div id="app">
<!--     <img src="./assets/logo.png"> -->
    <header-vue></header-vue>
    <for-vue></for-vue>

    <sub-vue text1='text1-111' v-bind:text2='text2' @sayHello="listen"></sub-vue>
    
    <!-- router -->
    <router-vue></router-vue>

    <h4>href="#/list"</h4> 
    <a href="#/list">list</a>
    <a href="#/detail">detail</a>

    <h4>router-link to="/list"</h4>
    <router-link to="/list">list</router-link>
    <router-link to="/detail">detail</router-link>

    <h4>router-link :to="{name:'list'}</h4>
    <router-link :to="{name:'list'}">list</router-link>
    <router-link :to="{name:'detail'}">detail</router-link>

    <h4>router-link :to="{name:'list'}</h4>
    <router-link :to="{name:'detail', query:{id:1, name:'tom'}}">detail</router-link>
    
    <!-- go 转转 -->

    <!-- 路由加载的内容显示区 -->
    <router-view></router-view>

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
import routerVue from './components/router.vue'

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
    'uiVue':uiVue,
    'routerVue':routerVue
  }

}
</script>


<style>

</style>
