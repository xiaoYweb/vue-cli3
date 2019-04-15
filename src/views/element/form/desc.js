
const pwdValidate = function (rule, value, callback) {
  console.log('pwdValidate', rule, value)
  callback ()
}

const rules = { //验证方法
  validator : pwdValidate,//验证函数
  require: true, // 是否必填
  message: 'err信息', //报错信息
  trigger: 'blur', // 触发方式
}

const prop = {

}

//表单验证
const trigger = { //触发方式
  change,
  blur
}

/**
 *  this.$refs[formName].如下方法名
 *  validate          //提交表单全局验证
 *  validateField     //对部分表单字段进行校验的方法 例子 密码 确认密码
 *  resetFields       //重置
 *  clearValidate     // 移除表单项的校验结果 不常用
 *  */

//  :prop="'domains.' + index + '.value'"   domains 为form对象下的属性   value为 数组内 item的属性
// 数组属性绑定  参照 动态增减表单项 示例
//  :rules="{ required: true, message: '域名不能为空', trigger: 'blur' }"   rules 既可以绑定数组 页可以绑定对象  对象 则为一条规则 数组 是一条规则以上

