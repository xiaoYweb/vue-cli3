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
import { menuList } from '@/global'
  export default {
    data() {   //
      return {
        menuList,
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
