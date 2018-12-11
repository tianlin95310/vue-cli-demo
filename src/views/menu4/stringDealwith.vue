<template>
  <div>
    <div>
      <button @click="testStrOp">测试字符串操作</button>
    </div>
    <div>
      <button @click="strIndex">js字符串截取</button>
    </div>
    <div>
      <button @click="jsEmptyToJson">js空串转json</button>
    </div>
    <div>
      <button @click="strReplace">字符串替换</button>
    </div>

  </div>
</template>
<script>
  export default {
    methods: {
      strReplace () {
        let str = ' 1 2 3 4 '
        console.log('str---' + str.replace(/\s/g, ''))
      },
      jsEmptyToJson () {
        let str = ''
        console.log('--- ' + JSON.stringify(str))
      },
      strIndex () {
        let str = '123.jpg'
        let index = str.lastIndexOf('.')
        let newstr = str.substring(index, str.length)
        console.log('---newstr---' + newstr)
      },
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

  div > div {
    margin-top: 10px;
  }
</style>
