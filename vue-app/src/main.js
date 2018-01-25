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

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})
