<template>
  <div id="elements">
    <header :style="headerStyle"></header>
    <div id="container">
      <aside class="side-menu" :style="asideStyle">
        <side-menu></side-menu>
      </aside>
      <div class="main">
        <section class="content">
          <router-view></router-view>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import sideMenu from './sidemenu'
  export default {
    name: 'elements',
    components: {sideMenu},
    data () {
      return {
        header: {
          height: 120
        },
        aside: {
          width: 300
        },

      }
    },
    computed: {
      headerStyle () {
        return `min-height: ${this.header.height}px;`
      },
      asideStyle () {
        return `min-width: ${this.aside.width}px;`
      }
    },
  }
</script>

<style lang="less" scoped>
#elements{
  width: 100%; height: 100%; display: flex; flex-direction: column;
  &>header {width: 100%; height: 120px; background: #fcf;}
  #container {
    width: 100%; flex-grow: 1; display: flex;
    &>.side-menu {
      width: 200px;
    }
    &>.main {
      flex-grow: 1; background: #fff; padding: 15px;

      &>.content {
        height: 100%; box-sizing: border-box; box-shadow: 0px 2px 15px rgb(214, 209, 209); border-radius: 10px; padding: 15px; overflow: auto;

        /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
        &::-webkit-scrollbar { width: 6px; height: 16px; background-color: #f5f5f5; }
        /*定义滚动条轨道 内阴影+圆角*/
        &::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.171); border-radius: 10px; background-color: #f5f5f5; }
        /*定义滑块 内阴影+圆角*/
        &::-webkit-scrollbar-thumb { border-radius: 20px; -webkit-box-shadow: inset 0 0 6px rgba(155, 156, 156, 0.959); background-color: rgb(167, 167, 167); }
      }
    }
  }

}

/*
  ::-webkit-scrollbar 滚动条整体部分
  ::-webkit-scrollbar-thumb  滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
  ::-webkit-scrollbar-track  滚动条的轨道（里面装有Thumb）
  ::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
  ::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）
  ::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处
  ::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件

*/

</style>
