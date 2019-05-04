<template>
  <ul class="show-list">
    <li>
      <el-card shadow="always">
        <div slot="header" class="clearfix" style="text-align: left;">
          <span>title</span>
        </div>
        <div>

        </div>
      </el-card>
    </li>


  </ul>
</template>

<script>
  import ySelect from '_el/select'
  export default {
    components: {ySelect},
    data() {
      return {
        value1: '',
        value2: 'value2',
        value3: '',
        value4: '',
      }
    },
  }
</script>

<style lang="less" scoped>
.show-list {
  display: flex; flex-wrap: wrap;
  &>li {
    width: 300px; margin: 0 20px 20px 0;
  }
}
</style>
