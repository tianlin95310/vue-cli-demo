<template>
  <div class="root">
    <div class="parent">
      <p class="test">测试元素位置</p>
    </div>

    <div class="test-before">
      我的div
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>
<style lang="less">
  .root {
    width: 100%;

    .test-before {
      display: inline-block;
      margin-left: 16px;
      height: 120px;
      width: 120px;
      position: relative;
      line-height: 120px;
      background: lightgrey;
    }
    .test-before::after {
      content: '\2715';
      position: absolute;
      right: -6px;
      line-height: 0px;
    }
  }
  .parent {
    position: relative;
    width: 100px;
    height: 100px;
    display: inline-block;
    background: yellow;

    .test {
      position: absolute;
      left: 0;
      bottom: 30px;
      display: block;
    }

  }



</style>
