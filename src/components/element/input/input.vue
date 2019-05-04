<template>
  <el-input
    :value="value"
    :placeholder="placeholder"
    @input="inputHandle"
    :clearable="clearable"
    :type="type"
    :show-password="password"
    :size="size"
    :maxlength="maxlength"
    :style="styles"
    :readonly="readonly"
    @blur="blurHandle"
    :disabled="disabled"
  >
    <!-- <i slot="prefix" class="el-input__icon el-icon-search"></i> -->
    <y-icon :iconname="leftIcon" slot="prefix" v-if="leftIcon"></y-icon>
    <y-icon :iconname="rightIcon" slot="suffix" v-if="rightIcon"></y-icon>
  </el-input>
</template>

<script>
export default {
  data() {
    return {
      limit: {
        numberAllow: val => val.replace(/[^\d]/g, ""), //
        enNum: val => val.replace(/[^\w]/g, ''),
        num1_9: val => val.replace(/^0/g, ''),
      }
    };
  },
  props: {
    value: {
      default: "",
      type: [String, Number]
    },
    clearable: {
      default: false,
      type: Boolean
    },
    readonly: {
      default: false,
      type: Boolean
    },
    password: {
      default: false,
      type: Boolean
    },
    type: {
      //text textarea ...other input type
      default: "text",
      type: String
    },
    placeholder: {
      default: "请输入",
      type: String
    },
    maxlength: {
      default: 200,
      type: Number
    },
    size: {
      //优先级 高于 自定义 宽高 medium small mini
      default: "small",
      type: String
    },
    width: {
      //优先级 高于 自定义 宽高 medium small mini
      default: "",
      type: [Number, String]
    },
    contentType: { // 输入控制
      //配合 data中对象字段对应的 正则方法  method.inputHandle 筛选限制  el-input
      default () {
        return {
          type: ''
        }
      },
      type: Object
    },
    disabled: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      default: '',
      type: String
    },
    rightIcon: {
      default: '',
      type: String
    },
  },
  computed: {
    styles() {
      return {
        width: `${this.width}px`
      };
    }
  },
  methods: {
    inputHandle(val) {
      let {type, n} = this.contentType;
      if (type) {
        if (type == "number") {
          val = this.limit.numberAllow(val);
        } else if (type == "float") {
          val = this.floatHandle({val, n});
        } else if (type == 'en-num') {
            val = this.limit.enNum(val)
        } else if (type == 'num1_9') {
          val = this.limit.numberAllow(val)
          val = this.limit.num1_9(val)
        }
      }
      // console.log('emit', val, typeof(val))
      this.$emit("input", val);
    },
    blurHandle() {
      this.$emit("blur");
    },
    floatHandle({val, n}) {
      n = n ? n : 2
      val = val.replace(/[^(\d|.)]/g, "") // 限制输入 数字 或 .
      let arr = val.split(".")
      let [fir, sec] = arr
      let len = arr.length
      // console.log("arr", arr)
      if (len === 2) { // len === 1 没有小数点  len === 2 一个描述点  ...
        if (!fir && !sec) {// 这种情况只有可能输入了 .  转化成 ['' ''] 输入数字 只可能 len === 1
          val = "0."
        } else if (sec.length < n) {// n=>  小数后几位
          val = fir + "." + sec
        } else {
          val = fir + "." + sec.substring(0, n)// n=>  小数后几位超过部分 截取
        }
      } else if (len > 2) { //len > 2 时间点 是 输入 第2个小数点
        val = fir + "." + sec
      }
      return val;
    }
  }
};
</script>

<style lang="less" scoped>


</style>
