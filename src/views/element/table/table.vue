<template>
  <ul class="show-list">
    <li style="width: 800px;">
      <el-card shadow="always">
        <div slot="header" class="clearfix" style="text-align: left;">
          <span slot="header">基础用法</span>
        </div>
        <div>
          <el-table :data="tableData" style="width: 100%" stripe height="150">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
      </el-card>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
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
    width: 600px;
    margin: 0 20px 20px 0;
  }
}
</style>
