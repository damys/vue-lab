<template>
  <div id="app">
    <!-- 
      可以通知注册三个全局组件，
      一次行为，一个坑
      一次行为，多个坑
      多视图: 可以通知三个router view 来布局
      router-view 默认name = default
      outer-view 可以嵌套多个自己： 路由包含子路由
    -->
    <!-- <header-vue></header-vue> -->

    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="#/router">route</a></li>
      <li><a href="#/content">content</a></li>
      <li><a href="#/music">Music</a></li>
      <li><a href="#/music/music1">Music1</a></li>
      <li><a href="#/music/music2">Music2</a></li>
    </ul>
    


    <router-link :to="{name:'music'}">Music</router-link>
    <router-link :to="{name:'music_music1'}">Music1</router-link>
    <router-link :to="{name:'music_music2'}">Music2</router-link>


    <router-view name='header'></router-view>
    <router-view></router-view>
    <router-view name='footer'></router-view>
  </div>
</template>

<script>
//-- 引用组件 -------------------------
// import contentVue from './components/content.vue'

export default {
  data(){
    return {
    }
  },

  methods:{
    //-- 组件传值：子传父 ----------------------
    // ES6 写法
    listen(...data){
        console.log(data)
        console.log(data[0].name)
    }
  },

  // 局部：模板中使用组件
  components: {
    // 'contentVue':contentVue
  }
}
</script>
