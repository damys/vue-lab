import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 引用组件
// import headerVue from './components/header.vue'
// import footerVue from './components/footer.vue'
// var componentApp = {
//     template: `<p>我是组件A</p>`
// }

// 声明全局组件
// Vue.component('headerVue', headerVue);
// Vue.component('footerVue', footerVue);
// Vue.component('componentApp', componentApp);

//-- 引入第三方：mint -ui -------------------------
import MintUi from 'mint-ui';   // 引用UI库
import 'mint-ui/lib/style.css'; // 引入样式
Vue.use(MintUi);                // 安装UI插件
// use 组件库：在内部注册了各种全局组件
// use 插件：挂载属性，为了方便this， 可以使用到其功能

//--- 路由 -------------------------------
// 引入组件
import Router from './components/router.vue';
import List from './components/list.vue';
import Detail from './components/detail.vue';
import VueRouter from 'vue-router';

// 重定向，404
import Home from './components/home.vue';
import NotFound from './components/notFound.vue';

//----模块化----------------------------------
// 视图公共1：通过router-view 
import header from './components/header.vue';
import content from './components/content.vue';
import footer from './components/footer.vue';

// 视图公共2：通过全局组件
Vue.component('headerVue', header);
Vue.component('footerVue', footer);

// 业务组件：二个页面切换
import Music from './components/music.vue';
import Music1 from './components/music1.vue';
import Music2 from './components/music2.vue';

//----安装VueRouter插件---------------------------------
Vue.use(VueRouter)
// 创建路由对象并配置路由规则
const router = new VueRouter({
    routes: [
        // 注册公共组件
        {path:'/', components:{
            header:header,
            default:content,
            footer:footer}
        },
        
        {name:'content', path:'/content', component:content},
        // router-list-detail
        {name:'router', path:'/router', component:Router},
        {name:'list', path:'/list', component:List},

        // 字符串path: detail?x=xxx&y=yyy
        {name:'detail', path:'/detail', component:Detail},        
        {name:'detail', path:'/detail:id', component:Detail},
        // {name:'detail', params:{id: index}}  -- /detail/12
        // 重定向
        // {path:'/', redirect:'/list'},
        // {path:'/', redirect:{name:'list'}},
        {name:'home', path:'/home', redirect:'/home'},
        {name:'home', path:'/home', component:Home},        
        
        // 子路由
        {name:'music', path:'/music', component:Music,
        children:[
            //-- 第1种路由访问：#/music1
            // {name:'music1', path:'/music1', component:Music1},
            // {name:'music2', path:'/music2', component:Music2}

            //-- 第2种路由访问（相对）：#music/music1
            // {name:'music1', path:'music1', component:Music1},
            // {name:'music2', path:'music2', component:Music2}

            //-- 第3种路由访问(子路由)：#music/music1
            {name:'music_music1', path:'music1', component:Music1},
            {name:'music_music2', path:'music2', component:Music2}
        ]
        },

        // 404
        {path:'*', component:NotFound}
    ]
});

//----安装Vue-resource， Axios插件---------------------------------
// 带有vue- 开头的插件，安装后可以通过：this.$http 再调用
// 说明：Vue 是所有实例对象的构造函数， vue.prototype.$http
import VueResource from 'vue-resource';
Vue.use(VueResource)

import Axios from 'axios';
Vue.prototype.$axios = Axios;   //原型上挂载一个属性，使用：this.$axios
// Axios.defaults.baseURL = 'http://127.0.0.1';

import VueJsonp from 'vue-jsonp';
import { read } from 'fs';
Vue.use(VueJsonp)

//-- 拦截器---------------------------------
// 一般使用
Axios.defaults.headers = {
    accept:'default'
}
Axios.interceptors.request.use( function(config){
    // 重置header
    config.headers = {
        accept:'interceptors'
    }

    return config;
})

// 加载数据时显示加载提示
Axios.interceptors.request.use( function(config){
    // 请求数据时：显示加载提示
    MintUi.Indicator.open();

    return config;
})
Axios.interceptors.response.use( function(config){
    // 在响应回来后：隐藏加载提示
    MintUi.Indicator.close();

    return config;
})


new Vue({
    el: '#app',
    components: {
        App
    },
    router:router,
    render:c=>c(App)
    // template: '<App/>'
})
