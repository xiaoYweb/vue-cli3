<template>
  <div id="home">
    <!-- <y-icon iconname="shoucang"></y-icon>
    <br>

    <y-input rightIcon="anquan"></y-input>
    <div style="width: 280px;">
      <y-input leftIcon="shoucang"></y-input>
    </div>
    <hr>
    <div style="width: 280px;">
      <y-input leftIcon="shoucang"></y-input>
    </div>
    <y-select v-model="fruit" :options="options"></y-select> -->
    <el-button @click="navTo('element')">welcome</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { $get } from '@/api/request'
import ySelect from '_c/element/select'
  export default {
    components: {ySelect},
    data() {
      return {
        options: [{label: '苹果', value: 'apple'}, {label: '梨', value: 'pear'}],
        fruit: ''
      }
    },
    methods: {
      testget () {
        $get('/general/auth/getUserInfo')
        .then((res) => { console.log('res,', res) })
      },
      navTo (name) {
        this.$router.push({name})
      }
    },

    created () {
      // this.testget()
    }
  }
</script>

<style lang="less">
#home {
  .el-input__prefix, .el-input__suffix{
    display: flex; align-items: center;
  }
  .el-input {
    .el-input__inner {
      padding-left: 30px;
      padding-right: 25px;
    }
  }
}
.wrap {
  width: 200px;
  margin: 10px auto
}
</style>
