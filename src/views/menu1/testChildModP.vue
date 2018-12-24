<template>
  <div class="menu11">

    <h3>测试子组件更改父组件的data数据</h3>

    <v-model-child v-bind:value="value1">
    </v-model-child>

    <not-v-model-child v-bind:value="value2">
    </not-v-model-child>

    <div><button @click="show" class="bt">查看</button></div>

  </div>
</template>

<script>
  import notVModelChild from './notVModelChild.vue'
  import vModelChild from './vModelChild.vue'

  export default {
    components: {
      notVModelChild,
      vModelChild
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

<style scoped lang="less">
  .menu11 {
    width: 100%;
    margin-left: 16px;
    .bt {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }

    div {
      margin-top: 16px;
    }
  }

</style>
