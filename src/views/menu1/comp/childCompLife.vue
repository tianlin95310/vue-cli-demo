<template>
  <div class="vue-child">
    <i class="child">i am vue child component</i>
    <button @click="testCompFun">测试函数</button>

    <button @click="callInnerFun">调用函数内部函数</button>

    <button @click="callOuterFun">调用组件内的全局函数</button>

    <div ref="childDiv"></div>
  </div>
</template>

<script>
  function outter () {
    console.log('组件全局函数的this---', this)
  }
  export default {
    data () {
      return {}
    },
    methods: {
      callOuterFun () {
        outter()
      },
      callInnerFun () {
        this.testCompFun()()
      },
      testCompFun () {
        console.log('组件的this---', this)

        setTimeout(() => {
          console.log('组件内的函数的this1---', this)
        })

        let fun = function () {
          console.log('组件内的函数的this2---', this)
        }
        return fun
      }
    },
    beforeCreate: function () {
      console.log('child beforeCreate', this.$refs.childDiv)
    },
    created () {
      console.log('child created', this.$refs.childDiv)
    },
    beforeMount () {
      console.log('child beforeMount', this.$refs.childDiv)
    },
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
    // 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内，测试的this.$refs.childDiv才是有效的
    mounted () {
      console.log('child mounted', this.$refs.childDiv)
      this.$nextTick(function () {
        console.log('child mounted $nextTick', this.$refs.childDiv)
      })
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
    beforeUpdate () {
      console.log('child beforeUpdate')
    },
    updated () {
      console.log('child updated')
    },
    // keep-alive 组件激活时调用,该钩子在服务器端渲染期间不被调用
    activated () {
      console.log('child activated')
    },
    // keep-alive 组件停用时调用。该钩子在服务器端渲染期间不被调用。
    deactivated () {
      console.log('child deactivated')
    },
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy () {
      console.log('child beforeDestroy')
    },
    // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
    destroyed () {
      console.log('child destroyed')
    },
    errorCaptured () {
      console.log('child errorCaptured')
    }
  }
</script>

<style>

  .vue-child {
    margin: 16px;
  }

  .vue-child > button {
    display: block;
    margin-top: 10px;
  }
  .child {
    display: block;

  }
</style>
