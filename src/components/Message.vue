<template>
<div>
  <h3>基本用法</h3>
  <el-button :plain="true" @click="open">打开消息提示</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
  <h3>不同状态</h3>
  <el-button :plain="true" @click="open2">成功</el-button>
  <el-button :plain="true" @click="open3">警告</el-button>
  <el-button :plain="true" @click="open">消息</el-button>
  <el-button :plain="true" @click="open4">错误</el-button>
</div>
</template>

<script>
export default {
  methods: {
    open () {
      this.$message('这是一条消息提示')
    },

    openVn () {
      const h = this.$createElement
      this.$message({
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ])
      })
    },

    open2 () {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },

    open3 () {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },

    open4 () {
      this.$message.error('错了哦，这是一条错误消息')
    }
  }
}
</script>
