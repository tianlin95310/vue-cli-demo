<template>
  <div class="root">
    <h2>测试css的属性</h2>
    <div class="parent">
      <p class="test">我在父块的右下角</p>
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
      vertical-align: top;
    }
    /*::after不在dom上，不能相应时间*/
    .test-before::after {
      content: '\2715';
      position: absolute;
      cursor: pointer;
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
    font-size: 0.7rem;

    .test {
      position: absolute;
      right: 0;
      bottom: 0;
      display: block;
    }

  }

</style>
