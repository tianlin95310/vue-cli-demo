<template>
  <div class="self-model-ele">
    <edit-div v-model="content" :canEdit="true">
    </edit-div>

    <button @click="showData">查看值</button>
  </div>
</template>
<script>
  import editDiv from '@/components/editDiv.vue'
  export default {
    components: {
      editDiv
    },
    data () {
      return {
        content: 'asdasd'
      }
    },
    methods: {
      showData () {
        console.log(this.content)
      }
    }
  }
</script>

<style lang="less" scoped>
.self-model-ele {
  width: 100%;

  div {
    margin-top: 16px;
  }

  button {
    margin-top: 16px;
  }
}
</style>
