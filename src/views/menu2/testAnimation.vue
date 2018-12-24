<template>
  <div class="test-animation">
    <h3>测试Animation动画</h3>
    <div>
      <img src="../../assets/logo.png" :class="initImg"/>
    </div>
    <button @click="begin">开始动画</button>

    <div>
      <img src="../../assets/logo.png" class="demo-img" :style="{animation: currentAnim}"/>
    </div>

    <div class="anims">
      <ul>
        <li v-for="(item, index) in anims" :key="index" @click="testAnim(index)">[{{index}}]    {{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        anim: false,
        anims: [
          'showinT',
          'autoShake'
        ],
        index: 0
      }
    },
    computed: {
      currentAnim () {
        let anim = `'${this.anims[this.index]} 3s both'`
        console.log(anim)
        return anim
      },
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
    .anims {
      position: absolute;
      height: 100%;
      background: var(--colorInfo);
      right: 0;
      top: 0;
      ul {
        list-style: none;

        li {
          padding: 8px;
          white-space: pre;

        }
        li:hover {
          background-color: var(--colorAccent);
        }
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
