<template>
  <div>
    aaaa
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'aaaaaaa'
      }
    },
    methods: {
      methodA () {
        console.log('methodA')
      }
    },
    computed: {
      route () {
        return this.$route
      }
    },
    watch: {
      $route: {
        handler () {
          console.log('watch route', this.$route)
        },
        immediate: true
      }
    },
    created () {
      console.log('created')
    }
  }
</script>

<style lang="less" scoped>

</style>
