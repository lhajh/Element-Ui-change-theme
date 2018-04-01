<template>
<div>
  <h3>基础用法</h3>
  <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
  <h3>禁用状态</h3>
  <el-input-number v-model="num2" :disabled="true"></el-input-number>
  <h3>尺寸</h3>
  <el-input-number v-model="num4"></el-input-number>
  <el-input-number size="medium" v-model="num5"></el-input-number>
  <el-input-number size="small" v-model="num6"></el-input-number>
  <el-input-number size="mini" v-model="num7"></el-input-number>
  <h3>按钮位置</h3>
  <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
</div>
</template>
<script>
export default {
  data () {
    return {
      num1: 1,
      num2: 1,
      num4: 1,
      num5: 1,
      num6: 1,
      num7: 1,
      num8: 1
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
