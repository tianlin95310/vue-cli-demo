<template>
  <div>
    <div><h4 style="display: inline-block;color: red">在js中 1/2 = </h4> {{ value }} </div>

    <div><button @click="random">随机数</button></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        abc: 'asdasd'
      }
    },
    computed: {
      value () {
        return 1 / 2
      }
    },
    methods: {
      random () {
        console.log(Math.ceil(Math.random() * 8888 + 1000))
      }
    },
    created () {
      console.log(this.n)
    }
  }
</script>

<style lang="less" scoped>

  div {
    margin-top: 10px;

  }
</style>
