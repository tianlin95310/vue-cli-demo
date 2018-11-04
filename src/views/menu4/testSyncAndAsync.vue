<template>
  <div>

    <div>
      <button @click="funa">测试同步回调</button>
    </div>
    <br/>

  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    created () {
      // 同步的回调,单线程执行
      this.funa(this.callback)
    },
    methods: {
      funa (callback) {
        console.log('11111111111111')
        callback()
        console.log('333333333333333')
      },
      callback () {
        console.log('2222222222222')
      }
    }
  }
</script>

<style scoped>

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }

  .initImg {
    display: block;
    margin: 0 auto;
    width: 100px;
    height: 100px;
  }

  .buttons {
    margin-top: 40px;
    width: 100%;
  }

  .buttons button{

    width: 20%;
  }

</style>
