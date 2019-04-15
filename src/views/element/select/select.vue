<template>
  <ul class="show-list">
    <li>
      <el-card shadow="always">
        <div slot="header" class="clearfix" style="text-align: left;">
          <span slot="header">基础用法 -- {{value1}}</span>
        </div>
        <div>
          <y-select :options="list1" v-model="value1"></y-select>
        </div>
      </el-card>
    </li>
    <li>
      <el-card shadow="always">
        <div slot="header" class="clearfix" style="text-align: left;">
          <span slot="header">有禁用选项 -- {{value2}}</span>
        </div>
        <div>
          <y-select :options="list2" v-model="value2"></y-select>
        </div>
      </el-card>
    </li>
  </ul>
</template>

<script>
import ySelect from "_el/select";
export default {
  components: { ySelect },
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      list1: [
        { label: "label1", value: "value1" },
        { label: "label2", value: "value2", disabled: false },
        { label: "label3", value: "value3" }
      ],
      list2: [
        { label: "label1", value: "value1" },
        { label: "label2", value: "value2", disabled: true },
        { label: "label3", value: "value3" }
      ]
    };
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
