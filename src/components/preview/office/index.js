import office from './office'//vue 文件 => 实例对象
var $vm
export default {
  install(Vue, options) {
    if (!$vm) {
      const officePlugin = Vue.extend(office)
      $vm = new officePlugin().$mount()// 猜测 =>  实例对象 + 挂载
      document.body.appendChild($vm.$el)//?? 实例对象的 猜测 =>  $el template 包裹的 dom 对象
    }
    Vue.prototype.$showOffice = function (url) {
      $vm.showOffice(url)
    }
  }
}
