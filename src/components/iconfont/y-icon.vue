<template>
  <i :class="icon" :style="iconStyle"></i>
</template>

<script>
  export default {
    props: {
      iconname: {
        type: String,
        default: '',
      },
      size: {
        type: [String, Number],
        default: 20
      },
      color: {
        type: String,
        default: '#fcf'
      },

    },
    computed: {
      icon () {
        return [
          'iconfont',
          `icon-${this.iconname}`,
        ]
      },
      iconStyle () {
        return {
          fontSize: `${this.size}px`,
          color: this.color,
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
