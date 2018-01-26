// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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

//-- 引入mint -ui -------------------------
import MintUi from 'mint-ui';   // 引用UI库
import 'mint-ui/lib/style.css'; // 引入样式
Vue.use(MintUi);                // 安装UI插件
// use 组件库：在内部注册了各种全局组件
// use 插件：挂载属性，为了方便this， 可以使用到其功能

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})
