<template>
  <div>
    <h2>集合的常见操作</h2>
    <div>
      <button @click="sort">测试排序{{ sort() }}</button>
    </div>

    <div>
      测试删除指定位置的元素<button @click="sort">{{ splice() }}</button>
    </div>

    <div>
      不删除任何东西<button @click="sort">{{ spliceNo() }}</button>
    </div>

    <br/>
  </div>
</template>

<script>
  function customCompareASC (propertyName) {
    return function (object1, object2) {
      var value1 = object1[propertyName]
      var value2 = object2[propertyName]
      if (value1 > value2) {
        return 1
      } else if (value1 < value2) {
        return -1
      } else {
        return 0
      }
    }
  }
  export default {
    data () {
      return {}
    },
    computed: {
    },
    methods: {
      spliceNo () {
        let array = [1, 2]
        return array + '------' + array.splice(0, 0)
      },
      splice () {
        let array = [1, 2, 3]
        return array + '------' + array.splice(1, 1)
      },
      sort () {
        let list = [
          {
            name: ''
          },
          {
            name: '12'
          },
          {
            name: 'AB'
          },
          {
            name: 'Cd'
          },
          {
            name: '34'
          },
          {
            name: ''
          }
        ]
        return list.map(item => {
          return item.name
        }) + '-------' + list.sort(customCompareASC('name')).map(item => {
          return item.name
        })
      }
    }
  }
</script>

<style scoped>

  div > div {
    margin-top: 10px;
  }

</style>
