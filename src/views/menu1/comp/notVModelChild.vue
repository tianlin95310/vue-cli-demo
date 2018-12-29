<template>

  <div class="item">
    <span class="span">{{value.value}}</span>
    <button @click="change" class="bt">改变</button>
  </div>

</template>

<script>
  export default {
    props: ['value'],
    data () {
      return {
      }
    },
    methods: {
      change () {
        // 不要在子组件里面直接改变props里面得属性值，如value，但是我们可以改变他的具体属性，
        // 也就是我们不可以改变变量本身，但是可以改变变量的属性，并且父组件的相应属性也会改变
        // 也就不需要非得通过调用父组件来更新父组件的数据了,当然也可以通过父组件来更改
        this.value.value = this.value.value + 11111111111111111111
      }
    }
  }
</script>

<style scoped>

  .span {
    width: 300px;
    white-space: pre-wrap;
    word-break: normal;
    overflow: hidden;
  }

  .item {
    margin-top: 20px;
  }
  .bt {
    margin: 0 auto;

  }

</style>
