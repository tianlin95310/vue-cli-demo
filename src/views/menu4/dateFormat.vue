<template>
  <div>
    <div>
      {{date1}}
    </div>

    <br/>
    <div>
      {{date2}}
    </div>

    <br/>
    <div>
      {{date3}}
    </div>

    <br/>
    <div>
      {{date4}}
    </div>

  </div>
</template>

<script>
  // 两种方式导入js代码
  require('../../utils/DateExtend')
  import dateFormat from '../../utils/DateFormat'
  export default {
    computed: {
      date1 () {
        // 必须要有分隔符，才能识别字符串时间
        let date = new Date('20171020')
        return date.format('yyyy-MM-dd')
      },
      date2 () {
        let date = new Date(1534262400000)
        return dateFormat.format(date, 'yyyy-MM-dd HH:mm:ss')
      },
      date3 () {
        let date = new Date('1534262400000')
        return dateFormat.format(date, 'yyyy-MM-dd HH:mm:ss')
      },
      date4 () {
        let date = new Date(parseInt('1534262400000'))
        return dateFormat.format(date, 'yyyy-MM-dd HH:mm:ss')
      }
    }
  }
</script>

<style>

</style>
