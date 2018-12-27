<template>
  <div class="main-content">
    <div class="header">
      <img :class="isShow ? 'menu-show' : 'menu'" src="../assets/svg/ic_collapse.svg" @click="collapse">
      <img class="right-button" src="../assets/svg/test_svg.svg" title="别打扰我，让我转会">
    </div>

    <div class="content">
      <keep-alive>
        <router-view>
        </router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      collapse () {
        this.isShow = !this.isShow
        this.$emit('collapse', this.isShow)
      }
    }
  }
</script>

<style lang="less" scoped>

  @keyframes rotateAll {
    0% {transform: rotate(deg)}
    100% {transform: rotate(360deg)}
  }
  .main-content {
    .header {
      padding-left: 16px;
      height: 40px;
      color: white;
      line-height: 40px;
      background: var(--primiryColor);
      .menu {
        margin: 8px 0;
        width: 24px;
        height: 24px;
        cursor: pointer;
        transform: rotate(-90deg);
        transition: 0.5s all;
      }
      .menu-show {
        margin: 8px 0;
        width: 24px;
        height: 24px;
        cursor: pointer;
        transform: rotate(-180deg);
        transition: 0.5s all;
      }

      .right-button {
        margin: 8px 16px;
        width: 24px;
        height: 24px;
        float: right;
        /*linear匀速，可防止出现停顿的问题*/
        animation: rotateAll 1s linear 0s both infinite;
      }
      .right-button:hover {
        margin: 8px 16px;
        width: 24px;
        height: 24px;
        float: right;
        animation: none
        /*linear匀速，可防止出现停顿的问题*/
        // animation: rotateAll 1s linear 0s both infinite;
      }
    }
    .content {
      width: 100%;
      overflow-x: hidden;
      position: relative;
      /*因为calc跟less的有冲突，所以写成这样*/
      height: calc(~"100% - 40px");
    }
  }

</style>
