<template>
<div>
  <h3>基础用法</h3>
  <el-tag>标签一</el-tag>
  <el-tag type="success">标签二</el-tag>
  <el-tag type="info">标签三</el-tag>
  <el-tag type="warning">标签四</el-tag>
  <el-tag type="danger">标签五</el-tag>
  <h3>可移除标签</h3>
  <el-tag
    v-for="tag in tags"
    :key="tag.name"
    closable
    :type="tag.type">
    {{tag.name}}
  </el-tag>
  <h3>不同尺寸</h3>
  <el-tag closable>默认标签</el-tag>
  <el-tag size="medium" closable>中等标签</el-tag>
  <el-tag size="small" closable>小型标签</el-tag>
  <el-tag size="mini" closable>超小标签</el-tag>
</div>
</template>

<script>
export default {
  data () {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    }
  }
}
</script>
