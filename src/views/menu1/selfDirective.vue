<template>
  <div class="self-directive">
    <div v-focus>自定义指令</div>
    <video v-autoplay
           @mousedown="mousedown"
           @mousemove="mousemove"
           :style="{left: left + 'px', top: top + 'px'}"
           @mouseup="mouseup">
      <source src="../../images/videoviewdemo.mp4" type="video/mp4"/>
    </video>
  </div>
</template>
<script>
  export default {
    directives: {
      autoplay: {
        inserted: function (el) {
          console.log('---autoplay inserted---', el, el.style)
          el.play()
        }
      },
      focus: {
        // 指令的定义
        bind: function (el, binding) {
          console.log('---focus bind---', binding)
        },
        update: function (el) {
          console.log('---focus update---', el)
        },
        inserted: function (el) {
          console.log('---focus inserted---', el)
          el.focus()
        },
        unbind: function (el) {
          console.log('---focus unbind---', el)
        },
        componentUpdated: function (el) {
          console.log('---focus componentUpdated---', el)
        }
      }
    },
    methods: {
      mouseup (ev) {
        console.log('mouseup')
        this.isDown = false
      },
      mousemove (ev) {
        if (!this.isDown) {
          return
        }
        let dx = ev.clientX - this.mouseX
        let dy = ev.clientY - this.mouseY
        console.log('mousemove', ev.clientX, this.mouseX)
        console.log('mousemove', dx, dy)
        this.left += dx
        this.top += dy
        this.mouseX = ev.clientX
        this.mouseY = ev.clientY
      },
      mousedown (ev) {
        console.log('mousedown')
        this.mouseX = ev.clientX
        this.mouseY = ev.clientY
        this.isDown = true
      }
    },
    data () {
      return {
        left: '',
        top: '',
        mouseX: 0,
        mouseY: 0,
        isDown: false
      }
    }
  }
</script>

<style lang="less" scoped>
  .self-directive {

    video {
      position: relative;
      width: 25%;
    }
  }
</style>
