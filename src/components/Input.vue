<template>
<div class="input">
  <h3>基础用法</h3>
  <el-input v-model="input" placeholder="请输入内容"></el-input>
  <h3>禁用状态</h3>
  <el-input
    placeholder="请输入内容"
    v-model="input1"
    :disabled="true">
  </el-input>
  <h3>可清空</h3>
  <el-input
    placeholder="请输入内容"
    v-model="input10"
    clearable>
  </el-input>
  <h3>带 icon 的输入框</h3>
  <div class="demo-input-suffix">
    属性方式：
    <el-input
      placeholder="请选择日期"
      suffix-icon="el-icon-date"
      v-model="input2">
    </el-input>
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="input21">
    </el-input>
  </div>
  <div class="demo-input-suffix">
    slot 方式：
    <el-input
      placeholder="请选择日期"
      v-model="input22">
      <i slot="suffix" class="el-input__icon el-icon-date"></i>
    </el-input>
    <el-input
      placeholder="请输入内容"
      v-model="input23">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
  </div>
  <h3>文本域</h3>
  <el-input
    type="textarea"
    :rows="2"
    placeholder="请输入内容"
    v-model="textarea">
  </el-input>
  <h3>可自适应文本高度的文本域</h3>
  <el-input
    type="textarea"
    autosize
    placeholder="请输入内容"
    v-model="textarea2">
  </el-input>
  <div style="margin: 20px 0;"></div>
  <el-input
    type="textarea"
    :autosize="{ minRows: 2, maxRows: 4}"
    placeholder="请输入内容"
    v-model="textarea3">
  </el-input>
  <h3>复合型输入框</h3>
  <div>
    <el-input placeholder="请输入内容" v-model="input3">
      <template slot="prepend">Http://</template>
    </el-input>
  </div>
  <div style="margin-top: 15px;">
    <el-input placeholder="请输入内容" v-model="input4">
      <template slot="append">.com</template>
    </el-input>
  </div>
  <div style="margin-top: 15px;">
    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
  <h3>尺寸</h3>
  <div class="demo-input-size">
    <el-input
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
      v-model="input6">
    </el-input>
    <el-input
      size="medium"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
      v-model="input7">
    </el-input>
    <el-input
      size="small"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
      v-model="input8">
    </el-input>
    <el-input
      size="mini"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
      v-model="input9">
    </el-input>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      input1: '',
      input10: '',
      input2: '',
      input21: '',
      input22: '',
      input23: '',
      textarea: '',
      textarea2: '',
      textarea3: '',
      input3: '',
      input4: '',
      input5: '',
      select: '',
      input6: '',
      input7: '',
      input8: '',
      input9: ''
    }
  }
}
</script>

<style lang="less">
.input {
  .el-input {
    width: 180px;
  }
  .el-input-group {
    width: 100%;
  }
}
</style>
