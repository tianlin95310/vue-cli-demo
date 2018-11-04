<template>
  <div>
    <div>
      <button @click="testStrOp">测试字符串操作</button>
    </div>

    <br/>
  </div>
</template>
<script>
  export default {
    methods: {
      testReg () {
        let s = '00012'
        console.log(s.replace(/\b(0+)/gi, ''))
      },
      testStrOp () {
        let str = '1__'
        console.log('---拆分---' + str.split('_'))
        console.log('---拆分后的长度---' + str.split('_').length)
      }
    }
  }
</script>
<style scoped="scope">

</style>
