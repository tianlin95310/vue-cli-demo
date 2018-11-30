import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/views/home'

import testChildModP from '@/views/menu1/testChildModP'
import vueLifecycle from '@/views/menu1/vueLifecycle'
import vueTransition from '@/views/menu1/vueTransition'
const notVModelBind = () => import('@/views/menu1/notVModelBind')

import testTransition from '@/views/menu2/testTransition'
import testAnimation from '@/views/menu2/testAnimation'
import testCssStyle from '@/views/menu2/testCssStyle'
const testFlex = () => import('@/views/menu2/testFlex')

import testJsListAndMap from '@/views/menu3/testJsListAndMap'
import listOperate from '@/views/menu3/listOperate'

import asyncAndAwait from '@/views/menu4/asyncAndAwait'
import dateFormat from '@/views/menu4/dateFormat'
import stringDealwith from '@/views/menu4/stringDealwith'
import testSyncAndAsync from '@/views/menu4/testSyncAndAsync'

const drawPuke = () => import('@/views/menu5/drawPuke')
const drawPukeInCanvas = () => import('@/views/menu5/drawPukeInCanvas')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/func',
          component: () => import('@/views/menu3/func')
        },
        {
          path: '/testChildModP',
          component: testChildModP
        },
        {
          path: '/testJsListAndMap',
          component: testJsListAndMap
        },
        {
          path: '/vueLifecycle',
          component: vueLifecycle
        },
        {
          path: '/listOperate',
          component: listOperate
        },
        {
          path: '/testTransition',
          component: testTransition
        },
        {
          path: '/testAnimation',
          component: testAnimation
        },
        {
          path: '/testCssStyle',
          component: testCssStyle
        },
        {
          path: '/testSyncAndAsync',
          component: testSyncAndAsync
        },
        {
          path: '/asyncAndAwait',
          component: asyncAndAwait
        },
        {
          path: '/dateFormat',
          component: dateFormat
        },
        {
          path: '/stringDealwith',
          component: stringDealwith
        },
        {
          path: '/vueTransition',
          component: vueTransition
        },
        {
          path: '/drawPuke',
          component: drawPuke
        },
        {
          path: '/drawPukeInCanvas',
          component: drawPukeInCanvas
        }
      ]
    },
    {
      path: '/pukegame1',
      name: 'pukegame1',
      component: () => import('@/views/menu5/pukegame1')
    }
  ]
})
