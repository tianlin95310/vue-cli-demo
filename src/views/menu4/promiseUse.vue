<template>
  <div class="promise-use">

    <button @click="defaultPromise">默认的promise</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        abc: 'asdasd'
      }
    },
    methods: {
      fun () {
        return new Promise(function (resolve, reject) {
          let random = Math.ceil(Math.random() * 3)
          if (random === 1) {
            resolve('111')
          } else if (random === 2) {
            reject('222')
          } else {
            // 没有调用resolve，reject时，函数就结束了，后面的then和catch都不会执行
          }
        })
      },
      defaultPromise () {
        this.fun()
          .then(res => {
            console.log('---defaultPromise then---', JSON.stringify(res))
          })
          .catch(res => {
            console.log('---defaultPromise catch---', JSON.stringify(res))
          })
      }
    }
  }
</script>

<style lang="less" scoped>

  .promise-use {

  }
</style>
