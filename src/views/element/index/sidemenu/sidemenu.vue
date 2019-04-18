<template>
  <div id="menu">
    <section class="menu-wrap">
      <ul class="menu-list">
        <li class="item" v-for="(item, index) in menuList" :key="'menu-' + index">
          <h4>{{item.typeName}}</h4>
          <ul class="sub-list">
            <li class="sub-item" :class="{'active': index == itemIndex && i == subItemIndex}" v-for="(subItem, i) in item.children" :key="'sub-menu-' + i"
            @click="navTo(index, i)">
              {{subItem.name}}
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    data() {   //
      return {
        menuList: [
          {
            typeName: 'Form',
            children: [
              { name: 'Radio 单选框', navName: '' },
              { name: 'Checkbox 多选框', navName: '' },
              { name: 'Input 输入框', navName: 'input' },
              { name: 'InputNumber 计数器', navName: '' },
              { name: 'Select 选择器', navName: 'select' },
              { name: 'Cascader 级联选择器', navName: '' },
              { name: 'Switch 开关', navName: '' },
              { name: 'Slider 滑块', navName: '' },
              { name: 'TimePicker 时间选择器', navName: '' },
              { name: 'DatePicker 日期选择器', navName: '' },
              { name: 'DateTimePicker 日期时间选择器', navName: '' },
              { name: 'Upload 上传', navName: '' },
              { name: 'Rate 评分', navName: '' },
              { name: 'ColorPicker 颜色选择器', navName: '' },
              { name: 'Transfer 穿梭框', navName: '' },
              { name: 'Form 表单', navName: 'form' },
            ]
          },
          {
            typeName: 'Data',
            children: [
              { name: 'Table 表格', navName: '' },
              { name: 'Tag 标签', navName: '' },
              { name: 'Progress 进度条', navName: '' },
              { name: 'Tree 树形控件', navName: '' },
              { name: 'Pagination 分页', navName: '' },
              { name: 'Badge 标记', navName: '' },
            ]
          },
          {
            typeName: 'Notice',
            children: [
              { name: 'Alert 警告', navName: '' },
              { name: 'Loading 加载', navName: '' },
              { name: 'Message 消息提示', navName: '' },
              { name: 'MessageBox 弹框', navName: '' },
              { name: 'Notification 通知', navName: '' },
            ]
          },
          {
            typeName: 'Navigation',
            children: [
              { name: 'NavMenu 导航菜单', navName: '' },
              { name: 'Tabs 标签页', navName: 'tabs' },
              { name: 'Breadcrumb 面包屑', navName: '' },
              { name: 'Dropdown 下拉菜单', navName: '' },
              { name: 'Steps 步骤条', navName: '' },
            ]
          },
          {
            typeName: 'Others',
            children: [
              { name: 'Dialog 对话框', navName: '' },
              { name: 'Tooltip 文字提示', navName: '' },
              { name: 'Popover 弹出框', navName: '' },
              { name: 'Card 卡片', navName: '' },
              { name: 'Carousel 走马灯', navName: '' },
              { name: 'Collapse 折叠面板', navName: '' },
              { name: 'Timeline 时间线', navName: '' },
            ]
          },
        ],
        itemIndex: 0,
        subItemIndex: 2
      }
    },
    watch: {
      '$route': {//监控路由变化
        handler () {
          let name = this.$route.name
          // console.log('route', name)
          name && this.activeHandle(name)
        },
        immediate: true
      }
    },
    methods: {
      navTo (index, i) { // => url and index i
        let name = this.menuList[index].children[i].navName
        if (name) {
          this.$router.push({name})
          this.navIndex (index, i)
        }
      },
      activeHandle (name) { //   url => name => index i
        let itemIndex, subItemIndex
        this.menuList.find((item,index) => {
          itemIndex = index
          return item.children.find((subItem, i) => {
            subItemIndex = i
            return subItem.navName === name
          })
        })
        this.itemIndex = itemIndex
        this.subItemIndex = subItemIndex
      },
      navIndex (index, i) {
        this.itemIndex = index
        this.subItemIndex = i
      }
    }
  }
</script>

<style lang="less" scoped>
#menu {
  padding: 15px 10px;  height: 100%; box-sizing: border-box;
  .menu-wrap {
    overflow: auto; height: 100%; box-shadow: 0px 2px 15px rgb(214, 209, 209);  border-radius: 10px; padding-bottom: 20px; box-sizing: border-box;
      &>.menu-list {
      background: #fff;
      &>.item {
        h4 {font-weight: normal; color: #999; line-height: 40px;}
        &>.sub-list {
          .sub-item {
            line-height: 40px; text-align: left; font-size: 14px; padding-left: 15px;
            &:hover {color: rgb(11, 144, 253); cursor: pointer;}
          }
          &>.active {color: rgb(165, 127, 255);}
        }
      }
    }

    &::-webkit-scrollbar { width: 6px; height: 16px; background-color: #f5f5f5; display: none;}
    /*定义滚动条轨道 内阴影+圆角*/
    &::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.171); border-radius: 10px; background-color: #f5f5f5; }
    /*定义滑块 内阴影+圆角*/
    &::-webkit-scrollbar-thumb { border-radius: 20px; -webkit-box-shadow: inset 0 0 6px rgba(155, 156, 156, 0.959); background-color: rgb(167, 167, 167); }
  }

}
</style>
