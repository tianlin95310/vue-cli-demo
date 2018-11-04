<template>
  <div class="item">
    <!--这里我们不可以直接绑定value，但我们可以绑定value的属性，以此来改变父组件的数据-->
    <input v-model="value.value"/>

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
    }
  }
</script>

<style scoped>

  .item {
    margin-top: 20px;
  }
</style>
