<template>
  <div>
    <div class="header">
      <span @click="collapse">折叠</span>
    </div>
    <router-view>
    </router-view>
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

<style scoped>

  .header {
    padding-left: 16px;
    height: 40px;
    color: white;
    line-height: 40px;
    background: var(--primiryColorDark);

  }

  .header span {
    cursor: pointer;
  }
</style>
