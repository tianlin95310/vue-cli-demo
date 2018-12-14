<template>
  <div>
    <div>
      <button @click="sort">测试排序</button>
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
      sort () {
        let list = [{
          name: ''
        }, {
          name: '12'
        }, {
          name: 'AB'
        }, {
          name: 'Cd'
        }, {
          name: '34'
        }, {
          name: ''
        }]

        list.forEach(item => {
          console.log(item.name)
        })
        console.log('---------------------------------')
        list = list.sort(customCompareASC('name'))
        list.forEach(item => {
          console.log(item.name)
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
