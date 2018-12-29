<template>
  <div id="app">
    <router-view>

    </router-view>
  </div>
</template>

<script>
  import device from './utils/device'
  export default {
    name: 'app',
    beforeCreate: function () {
      console.log('app beforeCreate', device.IsPC())
    },
    created () {
      console.log('app created')
    },
    beforeMount () {
      console.log('app beforeMount')
    },
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内
    mounted () {
      let isPc = device.IsPC()
      if (isPc) {
        let width = document.body.clientWidth
        let size = width / (1280 / 14) + 'px'
        document.getElementById('app').style.fontSize = size
        console.log('app mounted', width, size)
      } else {
        let width = document.body.clientWidth
        let size = width / (320 / 14) + 'px'
        document.getElementById('app').style.fontSize = size
        console.log('app mounted', width, size)
      }
      this.$nextTick(function () {
        console.log('app mounted $nextTick --- ' + this.$el)
      })
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
    beforeUpdate () {
      console.log('app beforeUpdate')
    },
    updated () {
      console.log('app updated')
    },
    // keep-alive 组件激活时调用,该钩子在服务器端渲染期间不被调用
    activated () {
      console.log('app activated')
    },
    // keep-alive 组件停用时调用。该钩子在服务器端渲染期间不被调用。
    deactivated () {
      console.log('app deactivated')
    },
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy () {
      console.log('app beforeDestroy')
    },
    destroyed () {
      console.log('app destroyed')
    },
    errorCaptured () {
      console.log('app errorCaptured')
      return false
    }
  }
</script>

<style>
@import "./assets/css/theme.css";
@import "./assets/css/common.css";
  /**
  默认去掉所有元素的内外间距
  box-sizing兼容性问题
  **/

  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
  }

  /**
  根元素的样式
  */
  #app {
    font-size: 14px;
    font-family: "Microsoft YaHei";
  }

  /**
  控制body的属性加在这边
  -webkit-font-smoothing: 抗锯齿
   */
  body {
    width: 100%;
    height: 100%;
    background-color: white;
    -webkit-font-smoothing: antialiased;
  }
</style>
