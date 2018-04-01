<template>
<div>
  <h3>基础用法</h3>
  <el-switch
    v-model="value2">
  </el-switch>
  <h3>文字描述</h3>
  <el-switch
    v-model="value3"
    active-text="按月付费"
    inactive-text="按年付费">
  </el-switch>
  <h3>禁用状态</h3>
  <el-switch
    v-model="value6"
    disabled>
  </el-switch>
  <el-switch
    v-model="value7"
    disabled>
  </el-switch>
</div>
</template>

<script>
export default {
  data () {
    return {
      value1: true,
      value2: true,
      value3: true,
      value6: true,
      value7: false
    }
  }
}
</script>
