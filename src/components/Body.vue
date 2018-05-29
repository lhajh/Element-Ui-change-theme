<template>
  <div class="body">
    <el-container>
      <el-header height="120px">
        <el-radio-group v-model="themeValue">
          <el-radio label="01fbe4">01fbe4</el-radio>
          <el-radio label="1c223a">1c223a</el-radio>
          <el-radio label="9">备选项</el-radio>
        </el-radio-group>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            router
            :default-active="activeIndex"
            class="el-menu-vertical-demo">
            <el-menu-item-group
              v-for="item in router" :key="item.name"
              :title="item.name">
              <el-menu-item
                v-for="ele in item.child" :key="ele"
                :index="`/${ele}`">{{ele}}</el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { changeTheme } from 'utils'
export default {
  name: 'Body',
  watch: {
    $route (url) {
      this.activeIndex = url.path
    },
    themeValue (data) {
      changeTheme(data)
    }
  },
  components: {},
  props: {},
  data () {
    let url = window.location.hash.substring(1).indexOf('?')
    return {
      themeValue: '',
      router: [
        {name: 'Basic', child: ['Button']},
        {
          name: 'Form',
          child: [
            'Radio',
            'Checkbox',
            'Input',
            'InputNumber',
            'Select',
            'Cascader',
            'Switch',
            'Slider',
            'TimePicker',
            'DatePicker',
            'Upload',
            'Transfer',
            'Form'
          ]
        },
        {
          name: 'Data',
          child: [
            'Table',
            'Tag',
            'Progress',
            'Tree',
            'Pagination',
            'Badge'
          ]
        },
        {
          name: 'Notice',
          child: [
            'Alert',
            'Message',
            'MessageBox',
            'Notification'
          ]
        },
        {
          name: 'Navigation',
          child: [
            'NavMenu',
            'Tabs',
            'Breadcrumb',
            'Dropdown',
            'Steps'
          ]
        },
        {
          name: 'Others',
          child: [
            'Dialog',
            'Popover',
            'Card',
            'Carousel',
            'Collapse'
          ]
        }
      ],
      activeIndex: url === -1 ? window.location.hash.substring(1) : window.location.hash.substring(1, +url + 1)
    }
  },
  methods: {},
  created () {},
  mounted () {
    this.themeValue = localStorage.getItem('themeValue')
  }
}
</script>

<style lang="less">
</style>
