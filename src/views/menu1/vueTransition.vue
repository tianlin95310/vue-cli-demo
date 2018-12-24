<template>
  <div class="vue-transition">
    <button v-on:click="show = 2">
      Toggle
    </button>

    <transition name="fade" mode="out-in">
      <p v-if="show == 1">{{value2}}</p>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: 1,
        value1: 'asda',
        value2: 'tianlin'
      }
    }
  }
</script>

<style lang="less" scoped>

  .vue-transition {
    margin-left: 16px;
    button {
      margin-top: 10px;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
