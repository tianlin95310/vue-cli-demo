<template>
  <div class="test-flex">
    <div class="left1">
      <div class="top">
        asdasd
      </div>
      <div class="bottom">
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        abc: 'asdasd'
      }
    }
  }
</script>

<style lang="less" scoped>
  .test-flex {
    width: 100%;
    height: 100vh;
    background-color: var(--colorWarn);
    /*想让flex竖直方向占满需要使用height: 100vh;*/
    .left1 {
      position: relative;
      width: 300px;
      display: flex;
      height: 100%;
      flex-direction: column;
      background-color: var(--colorInfo);
      .top {
        flex: 1;
      }
      .bottom {
        background: yellow;
        height: 100px;
      }
    }

  }
</style>
