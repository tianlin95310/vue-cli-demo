<template>
  <div>

    <h3>测试Animation动画</h3>
    <div>
      <img src="../../assets/logo.png" class="initImg"/>
    </div>

    <div class="buttons">
      <button>平移</button>
      <button>旋转</button>
      <button>透明度</button>
    </div>

  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }

  .initImg {
    display: block;
    margin: 0 auto;
    width: 100px;
    height: 100px;
  }

  .buttons {
    margin-top: 40px;
    width: 100%;
  }

  .buttons button{

    width: 20%;
  }

</style>
