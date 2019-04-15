<template>
  <div class="m-datePicker">
    <div class="m-datePicker-warpper" :class="{'disabled':option.disabled,'focus':isFocus}">
      <el-date-picker class="m-datePicker-item"
                      v-model="value1"
                      :type="option.type" :clearable="false"
                      :placeholder="option.placeholder" :disabled="option.disabled" @focus="setIsFocus(true)"
                      @blur="setIsFocus(false)" @change="changeEnd" :picker-options="pickerOptionsStart" size="mini">
      </el-date-picker>
      <span>至</span>
      <el-date-picker class="m-datePicker-item"
                      v-model="value2"
                      :type="option.type" :clearable="false"
                      :placeholder="option.placeholder" :disabled="option.disabled" @focus="setIsFocus(true)"
                      @blur="setIsFocus(false)" @change="changeStart" :picker-options="pickerOptionsEnd" size="mini">
      </el-date-picker>
      <el-input v-model="inputVal" class="m-datePicker-item-input" v-if="checked" :readonly="true"
                :disabled="option.disabled" ></el-input>
    </div>
    <el-checkbox class="m-datePicker-now" v-model="checked" @change="changeCheckBox" :disabled="option.disabled">至今</el-checkbox>
  </div>
</template>

<script>
  export default {
    name: "m-datePicker",
    props: ['opt', 'start', 'end'],
    data() {
      return {
        value1: this.start,
        value2: this.end,
        checked: this.end === '至今' ? true : false,
        inputVal: '至今',
        isFocus: false,   // 样式标志（是否focus）
        pickerOptionsStart: {
          disabledDate: (time) => {
            let val = new Date()
            if (this.value2 != '至今') {
              val = new Date(this.value2)
              val.setMonth(val.getMonth() - 1)
            }
            return time.getTime() > val || time.getTime() > new Date()
          }
        },
        pickerOptionsEnd: {
          disabledDate: (time) => {
            let val = new Date(this.value1)
            val.setMonth(val.getMonth() + 1)
            return time.getTime() < val || time.getTime() > new Date()
          }
        },
      }
    },
    watch: {
      start(newVal, oldVal) {
        this.value1 = newVal
      },
      end(newVal, oldVal) {
        this.value2 = newVal
        this.checked = this.value2 === '至今' ? true : false
      },
    },
    computed: {
      option() {
        let obj = {
          value: '',
          type: 'month',
          placeholder: '请选择',
          disabled: false
        }
        return Object.assign({}, obj, this.opt)
      },
      // checked: {
      //   get() {
      //     return this.end === '至今' ? true : false
      //   },
      //   set(val) {
      //     this.$emit('input', val)
      //   }
      // }
    },
    methods: {
      setIsFocus(val) {
        this.isFocus = val
      }
      ,
      changeStart() {
        let val = new Date()
        if (this.value2 != '至今') {
          val = new Date(this.value2)
          val.setMonth(val.getMonth() - 1)
        }
        this.pickerOptionsStart = Object.assign({}, this.pickerOptionsStart, {
          disabledDate: (time) => {
            return time.getTime() > val || time.getTime() > new Date()
          }
        })
        this.value2 += ''
        this.$emit('chaEnd', this.value2)
      }
      ,
      changeEnd() {
        let val = new Date(this.value1)
        val.setMonth(val.getMonth() + 1)
        this.pickerOptionsEnd = Object.assign({}, this.pickerOptionsEnd, {
          disabledDate: (time) => {
            return time.getTime() < val || time.getTime() > new Date()
          }
        })
        this.value1 += ''
        this.$emit('chaStart', this.value1)
      }
      ,
      changeCheckBox(e) {
        if (this.checked == false) this.value2 = ''
        this.$emit('chaEnd', this.checked ? '至今' : '')
      }
      ,
    },
  }
</script>

<style lang="less" scoped>
  .m-datePicker {
    display: flex;
    align-items: center;
    .m-datePicker-warpper {
      display: flex;
      align-items: center;
      /*border-radius: 4px;*/
      position: relative;
      font-size: 12px;
      border: 1px solid #DCDFE6;
      &.disabled {
        color: #C0C4CC;
        background: #f5f7fa;
      }
      &.focus {
        outline: none;
        border-color: #409eff;
      }
      .m-datePicker-item-input {
        position: absolute;
        right: 0;
        top: 0;
        width: 45%;

        line-height: 20px;
        .el-input__inner {
          height: 32px!important;
        }
      }
    }
    .m-datePicker-now {
      margin-left: 10px;
    }
  }

  .el-form-item.is-success .m-datePicker .m-datePicker-warpper {
    border-color: #67C23A;
  }

  .el-form-item.is-error .m-datePicker .m-datePicker-warpper {
    border-color: #F56C6C;
  }
</style>
<style>
  .m-datePicker .m-datePicker-item {
    width: 100% !important;
  }

  .m-datePicker .m-datePicker-item .el-input__inner {
    border: none !important;
  }

  .m-datePicker .m-datePicker-item:first-child .el-input__inner {
    padding: 0 0 0 30px !important;
  }

  .m-datePicker .m-datePicker-item:last-child .el-input__inner {
    padding: 0 10px !important;
  }

  .m-datePicker .m-datePicker-item:last-child .el-input__prefix {
    display: none !important;
  }

  .m-datePicker-item-input .el-input__inner {
    border: none !important; height: 32px!important;
  }
  .el-input__icon{line-height: 12px;}
  /*el-input__icon*/
</style>
