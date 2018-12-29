<template>
  <div class="tl-index-view" :style="{width: vWidth}">
    <div v-for="(item, index) in items"
         :key="index"
         @click="onIndexClick(item)"
         :style="{
           color: vColor,
           height: (100 / items.length) + '%',
           lineHeight: '1.5em'
         }"
         class="index-item">
      {{item}}</div>
  </div>
</template>
<script>
  export default {
    name: 'tl-index-view',
    props: {
      vColor: {
        type: String,
        default: 'grey'
      },
      vWidth: {
        type: String,
        default: '40px'
      }
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
        this.$emit('onIndexClick', item)
      }
    },
    created () {
      console.log('---tl-index-view created---', this.vWidth)
    }
  }
</script>

<style lang="less" scoped>
  .tl-index-view {
    height: 100%;
    background: rgba(0, 0, 0, 0.13);
    .index-item {
      text-align: center;
      text-decoration: solid;
      cursor: pointer;
    }
    .index-item:hover {
      background: var(--primiryColor)!important;
      color: white!important;
    }
  }
</style>
