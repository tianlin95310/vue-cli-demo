<template>
  <div class="canvas-view">
    <tl-cicle-ratio size="40" unit="%" percent="0.1"/>
  </div>
</template>
<script>
  import TlCicleRatio from '@/components/TlCicleRatio'
  export default {
    components: {
      TlCicleRatio
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
  .canvas-view {
    font-size: 14px;
  }
</style>
