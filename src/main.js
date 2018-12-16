// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

// *********vue的优化***********
// 1，使用生产生产环境的Vue源文件，经过压缩的
// 2，子组件用一个文件来表示，减少模板字符串的使用

// 取消 Vue 所有的日志与警告。
Vue.config.silent = true
// 开发版, 配置是否允许 vue-devtools 检查代码
Vue.config.devtools = true
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

Vue.config.errorHandler = function (err, vm, info) {
  // 只在 2.2.0+ 可用
  console.log(err)
}

// router.beforeEach(function () {
//   console.log('router beforeEach')
// })

router.afterEach(function () {
  console.log('router afterEach')
})
router.beforeEach(function (from, to, next) {
  console.log('router beforeEach---from---', from.path, '---to---', to.path)
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
