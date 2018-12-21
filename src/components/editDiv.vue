<template>
  <div class="edit-div"
       v-html="innerText"
       :contenteditable="canEdit"
       @focus="isLocked = true"
       @blur="isLocked = false"
       @input="changeText">
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'editDiv',
    props: {
      value: {
        type: String,
        default: ''
      },
      canEdit: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        innerText: this.value,
        isLocked: false
      }
    },
    watch: {
      'value' () {
        if (!this.isLocked || !this.innerText) {
          this.innerText = this.value
        }
      }
    },
    methods: {
      changeText () {
        this.$emit('input', this.$el.innerHTML)
      }
    }
  }
</script>
<style lang="less" scoped>
  .edit-div {
    width: 100%;
    height: 100%;
    overflow: auto;
    word-break: break-all;
    outline: none;
    user-select: text;
    white-space: pre-wrap;
    text-align: left;
    &[contenteditable=true]{
      /*内容可读写，但粘贴内容中的富文本格式（如文本的颜色、大小，图片等）会丢失*/
      user-modify: read-write-plaintext-only;
      &:empty:before {
        content: attr(placeholder);
        display: block;
        color: #ccc;
      }
    }
  }
</style>
