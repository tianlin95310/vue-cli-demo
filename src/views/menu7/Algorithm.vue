<template>
  <div class="algorithm">

    <div>
    得出笛卡尔积的所有值
      {{ comb() }}
    </div>

    <div>
     以为列表得到树形的数据
      {{ treeData() }}
    </div>

  </div>


</template>
<script>
  import { Cartesian } from './Algorithm'
  import { treeDataTranslate } from './TreeData'
  export default {
    data () {
      return {
        abc: 'asdasd'
      }
    },
    methods: {
      treeData () {

        let array = [
          {
            id: 1,
            parentId: '0'
          },
          {
            id: 2,
            parentId: '0'
          },
          {
            id: 3,
            parentId: '0'
          },
          {
            id: 4,
            parentId: '2'
          }
        ]
        return treeDataTranslate(array)
      },
      comb () {
        let array = [
          ['a', 'b'],
          [1, 2, 3],
          ['x', 'y']
        ]
        return Cartesian(array)
      }
    }
  }
</script>

<style lang="less" scoped>

  .algorithm {
    div {
      white-space: pre;
      word-break: break-all;
    }
  }
</style>
