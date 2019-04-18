<template>
  <ul class="show-list">
    <li style="width: 500px;">
      <el-card shadow="always" style="height: 330px;">
        <div slot="header" class="clearfix" style="text-align: left;">
          <span slot="header">基础用法</span>
        </div>
        <div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="tab.label" :name="tab.name" v-for="(tab,index) in tabs" :key="index">
              <component :is="tab.componentId"></component>
            </el-tab-pane>
            <!-- <el-tab-pane label="用户管理" name="first" v-for="(tab,index) in tabs" :key="index">用户管理</el-tab-pane> -->
          </el-tabs>
        </div>
      </el-card>
    </li>
  </ul>
</template>

<script>
import ySelect from "_el/select";
import templateA from './templates/templateA'
import templateB from './templates/templateB'
import templateC from './templates/templateC'
export default {
  components: { ySelect },
  data() {
    const  template = {
      A: { template: `<div>this is A</div>` },
      B: { template: `<div>this is B</div>` },
      C: { template: `<div>this is C</div>` },
    }
    return {
      activeName: 'second',
      tabs: [
        // {label: '用户管理', name: 'first', title: '用户管理'},
        // {label: '配置管理', name: 'second', title: '配置管理'},
        // {label: '角色管理', name: 'third', title: '角色管理'},
        // {label: '定时任务补偿', name: 'fourth', title: '定时任务补偿'},
        {label: '用户管理', name: 'first', title: '用户管理', componentId: templateA },
        {label: '用户管理', name: 'second', title: '用户管理', componentId: templateB },
        {label: '用户管理', name: 'third', title: '用户管理', componentId: templateC },
      ],

    }
  },
  methods: {
    handleClick(tab, event) { // tab => instance / event => ev
      console.log(tab);
    }
  }
};
</script>

<style lang="less" scoped>
.show-list {
  display: flex;
  flex-wrap: wrap;
  & > li {
    width: 300px;
    margin: 0 20px 20px 0;
  }
}
</style>
