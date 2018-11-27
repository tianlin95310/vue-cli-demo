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

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: 'testChildModP',
      component: testChildModP
    }, {
      path: 'testJsListAndMap',
      component: testJsListAndMap
    }, {
      path: 'vueLifecycle',
      component: vueLifecycle
    }, {
      path: 'notVModelBind',
      component: notVModelBind
    }, {
      path: 'testFlex',
      component: testFlex
    }, {
      path: 'listOperate',
      component: listOperate
    }, {
      path: 'testTransition',
      component: testTransition
    }, {
      path: 'testAnimation',
      component: testAnimation
    }, {
      path: 'testCssStyle',
      component: testCssStyle
    }, {
      path: 'testSyncAndAsync',
      component: testSyncAndAsync
    }, {
      path: 'asyncAndAwait',
      component: asyncAndAwait
    }, {
      path: 'dateFormat',
      component: dateFormat
    }, {
      path: 'stringDealwith',
      component: stringDealwith
    }, {
      path: 'vueTransition',
      component: vueTransition
    }]
  }]
})
