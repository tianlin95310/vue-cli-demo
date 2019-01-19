<template>
  <div class="test-animation">
    <h2>测试Animation动画，定义一组的transform</h2>
    <div>
      <img src="../../assets/logo.png" :class="initImg"/>
    </div>
    <button @click="begin">开始动画</button>

    <div>
      <!--对于v-bind:style绑定animation的时候，需要将绑定的内容用一个对象包起来-->
      <img src="../../assets/logo.png" class="demo-img" v-bind:style="currentAnim"/>
    </div>

    <ul class="anims">
      <li v-for="(item, index) in anims" :key="index" @click="testAnim(index)">
        [{{index + 1}}] {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        anim: false,
        anims: [
          'fadein',
          'fadeinT',
          'fadeinR',
          'fadeinB',
          'fadeinL',
          'fadeout',
          'fadeoutT',
          'fadeoutR',
          'fadeoutB',
          'fadeoutL',
          'bounce',
          'bouncein',
          'bounceinT',
          'bounceinR',
          'bounceinB',
          'bounceinL',
          'bounceout',
          'bounceoutT',
          'bounceoutR',
          'bounceoutB',
          'bounceoutL',
          'rotatein',
          'rotateinLT',
          'rotateinLB',
          'rotateinRT',
          'rotateinRB',
          'rotateout',
          'rotateoutLT',
          'rotateoutLB',
          'rotateoutRT',
          'rotateoutRB',
          'flip',
          'flipinX',
          'flipinY',
          'flipoutX',
          'flipoutY',
          'flash',
          'shake',
          'swing',
          'wobble',
          'ring',
          'showinT',
          'hideinT',
          'autoShake'
        ],
        currentAnim: {
          animation: 'showinT'
        },
        index: 0,
        zIndex: 1
      }
    },
    computed: {
      initImg () {
        if (this.anim) {
          return 'initImg-active'
        } else {
          return 'initImg'
        }
      }
    },
    methods: {
      testAnim (index) {
        this.index = index
        let ca = `${this.anims[this.index]} 1s both`
        console.log(ca)
        this.currentAnim = {
          animation: ca
        }
        this.zIndex++
      },
      begin () {
        this.anim = !this.anim
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/anim.css";
  @keyframes autoShake {
    0% {
      transform: scale(1)
    }

    70%, 73% {
      transform: scale(0.9) rotate(-1deg)
    }

    77%, 83%, 90%, 97% {
      transform: scale(1.1) rotate(1deg)
    }

    80%, 87%, 93% {
      transform: scale(1.1) rotate(-1deg)
    }

    100% {
      transform: scale(1) rotate(0)
    }
  }

  .test-animation {
    width: 100%;
    height: 100%;
    position: relative;

    h2 {
      margin-top: 0;
    }
    .anims {
      position: fixed;
      height: calc(~"100% - 40px");
      background: var(--colorInfo);
      top: 40px;
      right: 0;
      list-style: none;
      overflow-y: scroll;
      li {
        padding: 8px;
      }
      li:hover {
        background-color: var(--colorAccent);
      }
    }
    h3 {
      text-align: center;
      margin-bottom: 20px;
    }

    .demo-img {
      display: block;
      margin: 0 auto;
      width: 200px;
      height: 200px;
    }
    .initImg {
      display: block;
      margin: 0 auto;
      width: 200px;
      height: 200px;
    }
    .initImg:hover, .initImg-active {
      animation: autoShake 3s both infinite;
      display: block;
      margin: 0 auto;
      width: 200px;
      height: 200px;
    }
  }

</style>
