<template>
  <div class="root">
    <h2>测试css的属性</h2>
    <div class="parent">
      <p class="test">我在父块的右下角</p>
    </div>

    <div class="test-before">
      我的div
    </div>

    <div>
      <div style="width: 39%;background: red;display: inline-block">asdas</div>
      <div style="width: 70%;background: blue;display: inline-block">asdasd</div>
    </div>

    <!--width: 50% 各种50%却换行的问题，是因为两个字div出现了空白间隙-->
    <!--原理：多出来的其实是换行符，所以将字体设置为0，那么换行符就是0px不会显示了。但是如果将HTML标签写成一行的话，就没有换行符了。-->
    <div style="width: 100%;font-size: 0">
      <div style="width: 50%;background: red;display: inline-block;font-size: 12px">asdas</div>
      <div style="width: 50%;background: blue;display: inline-block;font-size: 12px">asdasd</div>
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
