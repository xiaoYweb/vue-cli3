const y = {//common.js
  store (...r) {//sessionStore
    if (r.length == 1) {
      return JSON.parse(sessionStorage.getItem(r[0]))
    } else if (r.length == 2) {
      sessionStorage.setItem(r[0],JSON.stringify(r[1]))
    } else {
      return false
    }
  },
  getDate () {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    month = month > 9 ? month : ('0' + month)
    let day = date.getDate()
    day = day > 9 ? day : ('0' + day)
    let str =  `${year}-${month}-${day}`
    console.log('date=>',date,year,month,day,str)
    return str
  },
  hasEmpty (obj) {
    return Object.keys(obj).some(key => !(obj[key]))
  },
  copyObj (needcopy,obj) {
    Object.keys(needcopy).map(key => {
      if (obj[key]) needcopy[key] = obj[key]
    })
  },
  clearObj (obj) {
    Object.keys(obj).forEach(key => {
      obj[key] = ''
    })
  },
  whichType (x) {
    let arr = ['String','Number','Boolean','Undefined','Null','Symbol','Array','Object','Function','Date','RegExp']
    return arr.find( item => (Object.prototype.toString.call(x).indexOf(item) > -1) )
  },
  deepClone (origin, target) {
    this.whichType(origin) === 'Object' && ( target = target || {} );
    this.whichType(origin) === 'Array' && ( target = target || [] );
    for (let key in origin) {
      if ( !origin.hasOwnProperty(key) ) return //判读是否为对象自己的属性  排除原型链干扰
      if ( this.whichType(origin[key]) === 'Object' || this.whichType(origin[key]) === 'Array' ) {
        target[key] = this.deepClone(origin[key]);
      } else {
        target[key] = origin[key];
      }
    }
    return target
  },
  formatDateToMonth (date) {
    date = date.substr(0,7)
    let arr = date.split('-')
    return (arr[0] + '年' + arr[1] + '月')
  },
  timeFn (time, fn) {
    return setTimeout (() => {
      fn()
    }, time * 1000)
  },
  checkTime (startTime, endTime) {//允许格式 年 2015 年月 2015-05  年月日 2011-01-01 // 有一个不存在不进行校验
    if (!startTime || !endTime) return true
    startTime += '';
    endTime += '';
    let len = startTime.length;
    if (len > 4) {
      startTime = startTime.split('-').join('')
      endTime = endTime.split('-').join('')
    }
    return endTime >= startTime * 1
  },
  myMap (...r) { // 数组嵌套对象  取对应的key value  (resArr, key1, key2...) 返回new arr
    let res = r.shift()
    return res.map(item => {
      let obj = {}
      r.forEach(key => obj[key] = item[key])
      return obj
    })
  },

}

export default {
  install: vm => {
    vm.prototype.s = y
  }
}
