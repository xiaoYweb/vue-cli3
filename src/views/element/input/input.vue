<template>
  <ul class="show-list">
    <li>
      <el-card shadow="always">
         <div slot="header" class="clearfix" style="text-align: left;">
          <span slot="header">纯数字 -- {{number}}</span>
        </div>
        <div>
          <y-input v-model="number" placeholder="纯数字" :clearable="true" :contentType="{type:'number'}"></y-input>
        </div>
      </el-card>
    </li>
    <li>
      <el-card shadow="always">
        <div slot="header" class="clearfix" style="text-align: left;">
          <span>
            金额 - 保留小数位数 - <y-input v-model="contentType.n" :contentType="{type:'number'}" width="50" size="mini" :maxlength="1"></y-input>
          </span>
        </div>
        <div>
          <y-input v-model="float" placeholder="金额" :clearable="true" :contentType="contentType"></y-input>
        </div>
      </el-card>
    </li>
    <li>
      <el-card shadow="always">
         <div slot="header" class="clearfix" style="text-align: left;">
          <span slot="header">基础用法 -- {{value1}}</span>
        </div>
        <div>
          <y-input v-model="value1" placeholder="基础用法"></y-input>
        </div>
      </el-card>
    </li>
    <li>
      <el-card shadow="always">
         <div slot="header" class="clearfix" style="text-align: left;">
          <span slot="header">禁用状态 -- {{value2}}</span>
        </div>
        <div>
          <y-input v-model="value2" placeholder="禁用状态" :disabled="true"></y-input>
        </div>
      </el-card>
    </li>
    <li>
      <el-card shadow="always">
         <div slot="header" class="clearfix" style="text-align: left;">
          <span slot="header">可清空 -- {{value3}}</span>
        </div>
        <div>
          <y-input v-model="value3" placeholder="可清空" :clearable="true"></y-input>
        </div>
      </el-card>
    </li>
    <li>
      <el-card shadow="always">
         <div slot="header" class="clearfix" style="text-align: left;">
          <span>密码框 -- {{password}}</span>
        </div>
        <div>
          <y-input v-model="password" placeholder="密码框" :password="true"></y-input>
        </div>
      </el-card>
    </li>
    <li>
      <el-card shadow="always">
         <div slot="header" class="clearfix" style="text-align: left;">
          <span>密码框 -- {{value4}}</span>
        </div>
        <div>
          <y-input v-model="value4" placeholder="密码框"></y-input>
        </div>
      </el-card>
    </li>
  </ul>
</template>

<script>
  import yInput from '_el/input'
  export default {
    components: {yInput},
    data() {
      return {
        value1: '',
        value2: 'value2',
        value3: '',
        value4: '',
        password: '',
        number: '1',
        float: '',
        contentType: {type:'float', n: 2}
      }
    },
  }
</script>

<style lang="less" scoped>
.show-list {
  display: flex; flex-wrap: wrap;
  &>li {
    width: 290px; margin: 0 20px 20px 0;
  }
}
</style>
