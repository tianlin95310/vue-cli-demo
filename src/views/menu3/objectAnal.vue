<template>
  <div>
    <h2>ES6...运算符的法</h2>
    <div><button @click="test1">定义变量是使用</button></div>

    <div><button @click="test2">最为形参传递</button></div>

    <div><button @click="test3">取json的key</button></div>

    <div><button @click="test4">作为运算符</button></div>
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
      fun4 (a) {
        console.log('fun4', a)
      },
      test4 () {
        let a = [1, 2, 3]
        // 作为数组输出
        console.log(a)
        // 单个匹配输出
        console.log(...a)

        let b = {
          key: 'key',
          value: 'value'
        }
        // 用在对象上实现对象的克隆
        console.log('---b---', b)
        let bb = {...b}
        console.log('---bb---', bb)
        b.key = 'change'
        console.log('---b---', b)
        console.log('---bb---', bb)
        this.fun4({...b})

        let c = 'tianlin'
        console.log([...c])
      },
      test3 () {
        let data = {
          name: 'asasdas',
          age: 23,
          list: [14, 56]
        }
        let {name, age, list: score} = data
        console.log(name, age, score)
      },
      fun1 ([a, b, c]) {
        console.log(a, b, c)
      },
      fun2 (...args) {
        console.log(args)
      },
      test2 () {
        let a = [1, 2, 3]
        this.fun1([1])
        this.fun1(a)
        this.fun2(a)
      },
      test1 () {
        let [a, ...b] = [1, 2, 3, 4]
        console.log(a, b)
        // 后面的2,3,4会被解析成数组b
      }
    }
  }
</script>

<style lang="less" scoped>

  div > div {
    margin-top: 10px;
  }
</style>
