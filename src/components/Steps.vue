<template>
<div>
  <h3>基础用法</h3>
  <el-steps :active="active" finish-status="success">
    <el-step title="步骤 1"></el-step>
    <el-step title="步骤 2"></el-step>
    <el-step title="步骤 3"></el-step>
  </el-steps>

  <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  <h3>含状态步骤条</h3>
  <el-steps :space="200" :active="1" finish-status="success">
    <el-step title="已完成"></el-step>
    <el-step title="进行中"></el-step>
    <el-step title="步骤 3"></el-step>
  </el-steps>
  <h3>有描述的步骤条</h3>
  <el-steps :active="1">
    <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
    <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
    <el-step title="步骤 3" description="这段就没那么长了"></el-step>
  </el-steps>
  <h3>带图标的步骤条</h3>
  <el-steps :active="1">
    <el-step title="步骤 1" icon="el-icon-edit"></el-step>
    <el-step title="步骤 2" icon="el-icon-upload"></el-step>
    <el-step title="步骤 3" icon="el-icon-picture"></el-step>
  </el-steps>
  <h3>简洁风格的步骤条</h3>
  <el-steps :active="1" simple>
    <el-step title="步骤 1" icon="el-icon-edit"></el-step>
    <el-step title="步骤 2" icon="el-icon-upload"></el-step>
    <el-step title="步骤 3" icon="el-icon-picture"></el-step>
  </el-steps>

  <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
    <el-step title="步骤 1" ></el-step>
    <el-step title="步骤 2" ></el-step>
    <el-step title="步骤 3" ></el-step>
  </el-steps>
</div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },

  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>
