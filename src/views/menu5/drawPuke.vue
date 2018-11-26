<template>
  <div class="draw-puke">
    <div class="puke" v-for="(item, index) in pukes" :key="index" :style="{color: getColor(item.type)}">
      <div class="left-top">
        <div class="value">{{ item.value}}</div>
        <div class="type">
          <span v-if="item.type === '1'">♠</span>
          <span v-else-if="item.type === '2'">♥</span>
          <span v-else-if="item.type === '3'">♦</span>
          <span v-else-if="item.type === '4'">♣</span>
        </div>
      </div>
      <div class="right-bottom">
        <div class="type">
          <span v-if="item.type === '1'">♠</span>
          <span v-else-if="item.type === '2'">♥</span>
          <span v-else-if="item.type === '3'">♦</span>
          <span v-else-if="item.type === '4'">♣</span>
        </div>
        <div class="value">{{ item.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      let pukes = []
      let types = ['1', '2', '3', '4']
      let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
      values.forEach(value => {
        types.forEach(type => {
          let puke = {}
          puke.type = type
          puke.value = value
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
      getColor (type) {
        if (type === '1' || type === '4') {
          return 'black'
        } else {
          return 'red'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .draw-puke {
    width: 100%;
    .puke {
      margin: 2px;
      border: 1px solid gray;
      width: 270px;
      height: 440px;
      display: inline-block;
      position: relative;

      .right-bottom {
        position: absolute;
        bottom: 0;
        width: 100%;

        .value {
          font-size: 35px;
          transform: rotate(180deg);
          margin-right: 16px;
        }

        .type {
          transform: rotate(180deg);
          margin-right: 16px;
          text-align: left;
          font-size: 35px;
        }
      }
      .left-top {

        .value {
          font-size: 35px;
          margin-left: 16px;
        }

        .type {
          font-size: 35px;
          margin-left: 16px;
        }
      }
    }
  }
</style>
