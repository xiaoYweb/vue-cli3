<template>
  <div class="home">
    home
  </div>
</template>

<script>
// @ is an alias to /src
import { $get } from '@/api/request'
  export default {
    methods: {
      testget () {
        $get('/general/auth/getUserInfo')
        .then((res) => { console.log('res,', res) })
      }
    },
    created () {
      // this.testget()
    }
  }
</script>

<style scoped>
.home {
}
.wrap {
  width: 200px;
  margin: 10px auto
}
</style>
