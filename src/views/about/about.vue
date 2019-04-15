<template>
  <div class="about">
    <div class="wrap"><m-input v-model="value1" :contentType="contentType1"></m-input></div>
    <div class="wrap">
      <m-select v-model="value4"></m-select>
    </div>
    <div class="wrap">
      <m-ranking :numerator="value2" :denominator="value3" @numeratorHandle="getvalue2" @denominatorHandle="getvalue3"></m-ranking>
    </div>
    <div class="wrap">
      <m-date-picker v-model="date" :typeInfo="typeInfo"></m-date-picker>
    </div>
    <div class="wrap">
      <el-date-picker
        v-model="value5"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['00:00:00', '23:59:59']">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
import mInput from '@/components/input-items/m-input/m-input.vue'
import mSelect from '@/components/input-items/m-select/m-select.vue'
import mRanking from '@/components/input-items/m-ranking/m-ranking.vue'
import mDatePicker from '@/components/input-items/m-date-picker/m-date-picker.vue'
export default {
  name: 'home',
  components: {mInput, mSelect, mRanking, mDatePicker},
  data () {
    return {
      value1: '',
      contentType1: 'Float',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      date: '',
      typeInfo: {
        type: 'year',
        format: "yyyy",
        valueFormat: "yyyy"
      }

    }
  },
  methods: {
    getvalue2 (val) { this.value2 = val },
    getvalue3 (val) { this.value3 = val },
  }
}
</script>

<style>
.home {
}
.wrap {
  width: 200px;
  margin: 10px auto
}
</style>
