<template>
  <div class="tl-cicle-ratio">
    <canvas ref="canvas" class="canvas" :width="size + unit" :height="size + unit">

    </canvas>
  </div>
</template>
<script>
  export default {
    props: {
      size: {
        type: Number,
        default: 2
      },
      unit: {
        type: String,
        default: 'rem'
      },
      percent: {
        type: Number,
        default: 0
      }
    },
    computed: {
    },
    data () {
      return {
      }
    },
    mounted () {
      let canvas = this.$refs.canvas
      let cxt = canvas.getContext('2d')
      if (!cxt) {
        return
      }
      let radius = this.size / 2 * 0.9
      let center = this.size / 2
      let lineWidth = this.size / 2 / 5
      cxt.lineWidth = lineWidth

      // draw background
      // stroke，用于绘制边框，fill用于填充
      cxt.beginPath()
      cxt.strokeStyle = '#EBEBEB'
      cxt.arc(center, center, radius, 0, 2*Math.PI)
      cxt.stroke()

      cxt.beginPath()
      cxt.strokeStyle = '#FBD990'
      let end = Math.PI * 2 * this.percent - Math.PI / 2
      cxt.arc(center, center, radius, -Math.PI / 2, end, false)
      cxt.stroke()
    }
  }
</script>

<style lang="less" scoped>
</style>
