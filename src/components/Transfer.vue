<template>
<div>
  <h3>基础用法</h3>
  <el-transfer v-model="value1" :data="data"></el-transfer>
  <h3>可自定义</h3>
  <el-transfer
    v-model="value3"
    filterable
    :left-default-checked="[2, 3]"
    :right-default-checked="[1]"
    :render-content="renderFunc"
    :titles="['Source', 'Target']"
    :button-texts="['到左边', '到右边']"
    :format="{
      noChecked: '${total}',
      hasChecked: '${checked}/${total}'
    }"
    @change="handleChange"
    :data="data">
    <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
    <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
  </el-transfer>
</div>
</template>

<script>
export default {
  data () {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      data: generateData(),
      value1: [1, 4],
      value3: [1],
      renderFunc (h, option) {
        return <span>{ option.key } - { option.label }</span>
      }
    }
  },
  methods: {
    handleChange (value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
    }
  }
}
</script>
