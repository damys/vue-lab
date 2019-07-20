import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 第三方库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Axios from 'axios'

// 第2-2步: 配置代理,解决跨域的问题, 要注释掉全局默认值 buaseUrl
// Vue.prototype.HOST = '/api'

// 拦截器
import qs from 'qs'

// 根据路由设置标题
router.beforeEach((to, from, next) => {
  // 路由发生改变修改页面的title
  if (to.meta.title) {
    document.title = 'Element ' + to.meta.title
  }
  next()
})

Vue.config.productionTip = false

// 使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('username')
  if (!role && to.path !== '/login') {
    next('/login')
  } else if (to.meta.permission) {
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    role === 'admin' ? next() : next('/403')
  } else {
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        confirmButtonText: '确定'
      })
    } else {
      next()
    }
  }
}) // 样式必须引入:默认主题
Vue.use(ElementUI, {
  size: 'small'
})
Vue.prototype.$axios = Axios
// 全局默认值
Axios.defaults.baseURL = '127.0.0.1'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  console.log(config)
  // post 方法时处理
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  console.log(response)
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
