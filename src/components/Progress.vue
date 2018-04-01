<template>
<div>
  <h3>线形进度条 — 百分比外显</h3>
  <el-progress :percentage="0"></el-progress>
  <el-progress :percentage="70"></el-progress>
  <el-progress :percentage="100" status="success"></el-progress>
  <el-progress :percentage="50" status="exception"></el-progress>
  <h3>线形进度条 — 百分比内显</h3>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
  <h3>环形进度条</h3>
  <el-progress type="circle" :percentage="0"></el-progress>
  <el-progress type="circle" :percentage="25"></el-progress>
  <el-progress type="circle" :percentage="100" status="success"></el-progress>
  <el-progress type="circle" :percentage="50" status="exception"></el-progress>
</div>
</template>

<style>
  .el-progress {
    margin-bottom: 15px;
  }
</style>
