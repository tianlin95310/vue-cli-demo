<template>
  <div class="menu11">

    <h3>测试子组件更改父组件的data数据</h3>

    <bind-child v-bind:value="value1">
    </bind-child>

    <not-bind-child v-bind:value="value2">
    </not-bind-child>

    <button @click="show" class="bt">查看</button>
  </div>
</template>

<script>
  import notBindChild from '../../components/no_bind_child.vue'
  import bindChild from '@/components/bind_child'

  export default {
    components: {
      'not-bind-child': notBindChild,
      'bind-child': bindChild
    },
    methods: {
      show () {
        alert(this.value1.value + ',' + this.value2.value)
      }
    },
    data () {
      return {
        value1: {value: 'value1'},
        value2: {value: 'value2'}
      }
    }
  }
</script>

<style>

  * {
    margin: 0 auto;
  }

  menu11 {
    width: 100%;
  }
  h3 {
    text-align: center;
  }

  .bt {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
</style>
