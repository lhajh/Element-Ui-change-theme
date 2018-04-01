<template>
<div>
  <h3>固定时间点</h3>
  <el-time-select
    v-model="value1"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
    placeholder="选择时间">
  </el-time-select>
  <h3>任意时间点</h3>
  <el-time-picker
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </el-time-picker>
  <h3>任意时间范围</h3>
  <el-time-picker
    is-range
    arrow-control
    v-model="value5"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围">
  </el-time-picker>
</div>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      value2: new Date(2016, 9, 10, 18, 40),
      value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
    }
  }
}
</script>
