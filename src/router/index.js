import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home'),
      children: [
        // ***************************************************menu1***************************************************
        {
          path: '/testChildModP',
          component: () => import('@/views/menu1/testChildModP')
        },
        {
          path: '/vueLifecycle',
          component: () => import('@/views/menu1/vueLifecycle')
        },
        {
          path: '/vueTransition',
          component: () => import('@/views/menu1/vueTransition')
        },
        {
          path: '/selfVModelEle',
          component: () => import('@/views/menu1/selfVModelEle')
        },
        {
          path: '/selfDirective',
          component: () => import('@/views/menu1/selfDirective')
        },
        {
          path: '/bindArray',
          component: () => import('@/views/menu1/bindArray')
        },
        // ***************************************************menu2***************************************************
        {
          path: '/testTransition',
          component: () => import('@/views/menu2/testTransition')
        },
        {
          path: '/testAnimation',
          component: () => import('@/views/menu2/testAnimation')
        },
        {
          path: '/testCssStyle',
          component: () => import('@/views/menu2/testCssStyle')
        },
        {
          path: '/testFlex',
          component: () => import('@/views/menu2/testFlex')
        },
        // ***************************************************menu3***************************************************
        {
          path: '/testJsListAndMap',
          component: () => import('@/views/menu3/testJsListAndMap')
        },
        {
          path: '/listOperate',
          component: () => import('@/views/menu3/listOperate')
        },
        {
          path: '/func',
          component: () => import('@/views/menu3/func')
        },
        {
          path: '/objectAnal',
          component: () => import('@/views/menu3/objectAnal')
        },
        {
          path: '/particle',
          component: () => import('@/views/menu3/particle')
        },
        // ***************************************************menu4***************************************************
        {
          path: '/testSyncAndAsync',
          component: () => import('@/views/menu4/testSyncAndAsync')
        },
        {
          path: '/asyncAndAwait',
          component: () => import('@/views/menu4/asyncAndAwait')
        },
        {
          path: '/dateFormat',
          component: () => import('@/views/menu4/dateFormat')
        },
        {
          path: '/stringDealwith',
          component: () => import('@/views/menu4/stringDealwith')
        },
        {
          path: '/promiseUse',
          component: () => import('@/views/menu4/promiseUse')
        },
        // ***************************************************menu5***************************************************
        {
          path: '/drawPuke',
          component: () => import('@/views/menu5/drawPuke')
        },
        {
          path: '/drawPukeInCanvas',
          component: () => import('@/views/menu5/drawPukeInCanvas')
        },
        // ***************************************************menu6***************************************************
        {
          path: '/indexView',
          component: () => import('@/views/menu6/indexView')
        },
        {
          path: '/canvasView',
          component: () => import('@/views/menu6/canvasView')
        },
        // ***************************************************menu7数学算法***************************************************
        {
          path: '/Algorithm',
          component: () => import('@/views/menu7/Algorithm')
        }
      ]
    },
    {
      path: '/pukegame1',
      name: 'pukegame1',
      component: () => import('@/views/menu5/pukegame1')
    },
    {
      path: '/pukegame2',
      name: 'pukegame2',
      component: () => import('@/views/menu5/pukegame2')
    },
    {
      path: '/demoTest',
      name: 'demoTest',
      component: () => import('@/views/menu5/demoTest')
    }
  ]
})
