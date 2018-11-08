<template>
  <div class="draw-puke">
    <input type="range" name="pin" />
    <div class="puke">
      <div class="left-top">
        <div class="value">
        </div>
        <div class="type">
          <span v-if="item.type === '1'">♠</span>
          <span v-else-if="item.type === '2'">♥</span>
          <span v-else-if="item.type === '3'">♦</span>
          <span v-else-if="item.type === '4'">♣</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        item: {
          type: '1',
          value: 'A'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .draw-puke {
    width: 100%;
    .puke {
      border: 1px solid gainsboro;
      width: 360px;
      height: 540px;
      .left-top {

        .value {

        }

        .type {
          margin-left: 10px;
          font-size: 20px;
        }
      }
    }
  }
</style>
