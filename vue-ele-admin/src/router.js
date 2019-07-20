import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      mate: { title: '系统首页' }
    },
    {
      path: '/',
      mate: { title: '自述文件' },
      component: () => import('./components/home.vue'),
      children: [
        {
          path: '/dashboard',
          meta: { title: '系统首页' },
          component: () => import('./views/dashboard.vue')
        },
        {
          path: '/icon',
          meta: { title: '自定义图标' },
          component: () => import('./views/icon.vue')
        },
        {
          path: '/collapse',
          meta: { title: 'Collapse' },
          component: () => import('./views/collapse.vue')
        },
        {
          path: '/tooltip',
          meta: { title: 'Tooltip' },
          component: () => import('./views/tooltip.vue')
        },
        {
          path: '/dialog',
          meta: { title: 'Dialog' },
          component: () => import('./views/dialog.vue')
        },
        {
          path: '/carousel',
          meta: { title: 'Carousel' },
          component: () => import('./views/carousel.vue')
        },
        {
          path: '/upload',
          meta: { title: 'Upload' },
          component: () => import('./views/upload.vue')
        },
        {
          path: '/form',
          meta: { title: 'Form' },
          component: () => import('./views/form.vue')
        },
        {
          path: '/table',
          meta: { title: 'Table' },
          component: () => import('./views/table.vue')
        },
        {
          path: '/tabs',
          meta: { title: 'Tabs' },
          component: () => import('./views/tabs.vue')
        },
        {
          path: '/403',
          meta: { title: '403' },
          component: () => import('./views/403.vue')
        },
        {
          path: '/404',
          meta: { title: '404' },
          component: () => import('./views/404.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: '登录' },
      component: () => import('./views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: { title: '注册' },
      component: () => import('./views/register.vue')
    },
    {
      path: '*',
      name: '404',
      meta: { title: '404' },
      redirect: '/404'
    }
  ]
})
