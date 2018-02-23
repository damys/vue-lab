'use strict'

// 引入自己的vue 文件开始
import Vue from 'vue';
import App from './app.vue';

// 引入第三方包
import VueRouter from 'vue-router';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
//import './static/vendor/mui/dist/css/mui.css';
Vue.use(Mint);

import Axios from 'axios';
Vue.prototype.$ajax = Axios;

import Home from './components/home.vue';

// 重定向，404
import NotFound from './components/notFound.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    routes : [
        // {page:'/', redirect:{name:'home'}},
        {path:'/', redirect:'/home'},
        {name:'home', path:'/home', component:Home},

        // 404
        {path:'*', component:NotFound}
    ]
});

// 实例化Vue
new Vue({
    el:'#app',
    components: {
        App
    },
    router:router,
    render:c=>c(App)
    // template: '<App/>'
})
