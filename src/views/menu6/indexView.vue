<template>
  <div class="index-view">
    <tl-rating score="3" size="1.8em"></tl-rating>
    <div v-for="(item, index) in items" class="div-item" :ref="item">{{item}}</div>
    <tl-index-view class="index"
                   @onIndexClick="onIndexClick"
                   vWidth="30px"
                   vColor="#41B883">

    </tl-index-view>
  </div>
</template>
<script>
  import TlIndexView from '../../components/TLIndexView.vue'
  import TlRating from '../../components/TlRating.vue'
  export default {
    components: {
      TlIndexView,
      TlRating
    },
    data () {
      return {
        items: [
          '*',
          'A', 'B', 'C', 'D', 'E', 'F', 'G',
          'H', 'I', 'J', 'K', 'L', 'M', 'N',
          'O', 'P', 'Q', 'R', 'W', 'T',
          'U', 'V', 'W', 'X', 'Y', 'Z',
          '#'
        ]
      }
    },
    methods: {
      onIndexClick (item) {
        console.log('---onIndexClick---', item)
//        window.scrollTo({
//          top: 1000,
//          behavior: 'smooth'
//        })
        this.$refs[item][0].scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .index-view {
    width: 100%;
    height: 100%;
    .div-item {
      height: 300px;
      font-size: 4rem;
      text-align: center;
    }
    .index {
      position: fixed;
      right: 17px;
      top: 40px;
      height: calc(~"100% - 40px");
    }
  }
</style>
