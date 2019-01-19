<template>
  <div class="demo-test">
    <img class="img1" src="../../images/demo/png1.png"/>
    <img class="img2" src="../../images/demo/png1.png"/>

    <img class="img3" src="../../images/demo/png1.png"/>

    <img class="img4" src="../../images/demo/png1.png"/>

    <div class="input-card">
      <input v-model="user" class="user" placeholder="尊姓大名"/>
      <img class="right-button1" src="../../images/demo/button.png">

      <input v-model.trim="token" class="token" :style="{left: left}" placeholder="江湖密令" type="password"/>
      <img class="right-button2" src="../../images/demo/button.png">

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: '',
        token: ''
      }
    },
    computed: {
      left () {
        let left = 72 + this.token.length * 10 + 'px'
        if (this.token.length >= 10 && this.user) {
          setTimeout(() => {
            this.$router.push('/pukegame1')
          }, 1000)

        }
        return left
      }
    }
  }
</script>

<style lang="less" scoped>

  * {
    user-select: none;
  }
  input::placeholder {
    color: gold;
  }

  @keyframes autoMoveRightNoS {
    0% {transform: translate(0px, 0)}
    50% {transform: translate(700px, 0)}
  }

  @keyframes autoF {
    0% {transform: translate(0px, 0) scale(1)}
    50% {transform: translate(150px, 0px) scale(1.1)}
  }

  @keyframes autoS {
    0% {transform: scale(1.1)}
    50% {transform: scale(1.3)}
  }
  .demo-test {
    position: relative;
    height: 100vh;
    background: rgba(250, 190, 18, 1);

    .input-card {
      position: absolute;
      left: calc(~"50vw - 225px");
      bottom: 30%;
      background-color: rgba(255, 92, 211, 0.5);
      width: 450px;
      height: 250px;
      text-align: center;
      padding: 36px 0 36px 0;
      border-radius: 64px;
      box-shadow: 1px 1px 1px 1px grey;

      .right-button1 {
        position: absolute;
        display: inline-block;
        height: 50px;
        top: 36px;
        right: 72px;
        border-radius: 32px;
        z-index: 9;
        animation: autoS 3.8s linear 0s both infinite;
      }
      .right-button2 {
        position: absolute;
        border-radius: 32px;
        display: inline-block;
        height: 50px;
        bottom: 36px;
        right: 72px;
        z-index: 9;
        animation: autoS 3.8s linear 0s both infinite;
      }
      .user {
        position: absolute;
        left: 72px;
        top: 36px;
        background: url("../../images/demo/input (3).png") no-repeat left;
        background-size: 160px 75px;
        background-position: -35px;
        animation: autoF 5s linear 0s both infinite;
      }
      .token {
        position: absolute;
        left: 72px;
        bottom: 36px;
        position: absolute;
        margin-top: 32px;
        background: url("../../images/demo/input (3).png") no-repeat left;
        background-size: 160px 75px;
        background-position: -35px;
      }
      input {
        z-index: 100;
        display: block;
        margin: 0 auto;
        /*无边框*/
        border: none;
        /*无背景*/
        background: none;
        /*没有获取焦点时的轮廓*/
        outline: none;
        color: white;
        writing-mode: lr-tb;
        font-size: 1.5rem;
        padding: 16px 8px;
        border-radius: 12px 0 0 12px;
      }

    }
    img {
      position: absolute;
      height: 100%;
    }
    .img1 {
      left: 0;
      animation: autoMoveRightNoS 7.5s linear 0s both infinite;
    }
    .img2 {
      right: 0;
      transform: scaleX(-1);
    }
    .img3 {
      bottom: 30%;
      left: 360px;
      z-index: 200;
      height: 42%;
      /*animation: autoF 5s linear 0s both infinite;*/
    }
    .img4 {
      bottom: 30%;
      right: 360px;
      height: 42%;
      z-index: 200;
      transform: scaleX(-1);
    }
  }
</style>
