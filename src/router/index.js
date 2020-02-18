import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/platform',
      name: 'platform',
      component: () => import('@/components/platform')
    },
    {
      path: '/base',
      name: 'base',
      component: () => import('@/components/base')
    },
    {
      path: '/association',
      name: 'association',
      component: () => import('@/components/association')
    },
    {
      path: '/information',
      name: 'information',
      component: () => import('@/components/information')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/components/about')
    }
  ]
})
