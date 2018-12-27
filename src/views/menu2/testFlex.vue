<template>
  <div class="test-flex">
    <div class="left1">
      <div class="top">
        我时候top内容，我占剩下的空间
      </div>
      <div class="bottom">
        我是底部内容，我占100px
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
    height: 100%;
    background-color: var(--primiryColorDark);
    /*想让flex竖直方向占满需要使用height: 100vh;*/
    .left1 {
      position: relative;
      width: 50%;
      display: flex;
      height: 100%;
      flex-direction: column;
      background-color: var(--colorWarn);
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
