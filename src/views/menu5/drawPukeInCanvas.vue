<template>
  <div class="draw-puke" ref="parent">
    <!--$event包含有当前点击的是哪个元素，event.target可以拿到-->

    <!--:ref="canvas.ref"动态绑定ref，需要用this.$refs[]获取，得到的是一个数组，需要获取第一个-->
    <canvas v-for="(canvas, index) in pukes"
            :key="index"
            class="puke"
            width="1080px"
            :ref="canvas.ref"
            @click="show($event, canvas)"
            height="1760px">
    </canvas>
  </div>
</template>

<script>
  export default {
    data () {
      let pukes = []
      let types = ['♠', '♥', '♦', '♣']
      let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
      values.forEach(value => {
        types.forEach(type => {
          let puke = {}
          puke.type = type
          puke.value = value
          puke.ref = puke.value + puke.type
          pukes.push(puke)
        })
      })
      return {
        pukes: pukes
      }
    },
    computed: {

    },
    methods: {
      show (event, item) {
        let canvas = event.target
        let cxt = canvas.getContext('2d')
        console.log(cxt)
      }
    },
    mounted () {
      console.log('draw puke in canvas mounted')
      this.pukes.forEach(item => {
        let refs = this.$refs[item.ref]
        let canvas = refs[0]
        let cxt = canvas.getContext('2d')
        cxt.textAlign = 'left'
        cxt.textBaseline = 'top'
        cxt.font = '120px Arial'
        let x1 = 50
        let y1 = 50
        let x2 = 50
        let y2 = 150
        if (item.value === 'A') {
          x2 = 55
        }
        if (item.value === '10') {
          x2 = 80
        }
        if (item.value === 'Q') {
          x2 = 60
        }

        cxt.strokeStyle = '#ff0000'
        cxt.fillStyle = '#ff0000'
        if (item.type === '♠' || item.type === '♣') {
          cxt.strokeStyle = '#000000'
          cxt.fillStyle = '#000000'
        }

        cxt.fillText(item.value, x1, y1)
        cxt.fillText(item.type, x2, y2)
        cxt.translate(1080, 1760)
        cxt.rotate(180 * Math.PI / 180)
        cxt.fillText(item.value, x1, y1)
        cxt.fillText(item.type, x2, y2)
        cxt.restore()
      })
    }
  }
</script>

<style lang="less" scoped>
  .draw-puke {
    width: 100%;
    .puke {
      margin: 2px;
      border: 1px solid grey;
      width: 270px;
      height: 440px;
      display: inline-block;
      position: relative;

    }
  }
</style>
