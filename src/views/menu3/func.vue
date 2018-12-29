<template>
  <div>
    <h2>关于函数的一些操作，对象属性操作是"引用"传递的</h2>
    <div>
      <button @click="change">changeObject</button>
    </div>

    <div>
      <button @click="addList">addList</button>
      <button @click="delList">delList</button>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        person: {},
        people: []

      }
    },
    methods: {
      delList () {
        let index = 0
        let one = this.people[0]
        this.del(this.people, index)
        console.log(JSON.stringify(this.people))
      },
      del (people, index, one) {
        people.splice(index, 1)
      },
      addList () {
        this.add(this.people)
        console.log(JSON.stringify(this.people))
      },
      add (people) {
        people.push({
          name: '123'
        })
      },
      change () {
        this.changePerson(this.person)
        console.log(this.person)
      },
      changePerson (person) {
        person.name = 'haha'
      }
    }
  }
</script>

<style scoped>
  div > div {
    margin-top: 10px;
  }
</style>
