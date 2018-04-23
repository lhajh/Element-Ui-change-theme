<template>
  <div class="body">
    <el-container>
      <el-header height="120px">Header</el-header>
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
export default {
  name: 'Body',
  watch: {
    $route (url) {
      this.activeIndex = url.path
    }
  },
  components: {},
  props: {},
  data () {
    let url = window.location.hash.substring(1).indexOf('?')
    return {
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
            'Transfer'
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
  }
}
</script>

<style lang="less">
  .body {
    height: 100%;
    .el-header {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 120px;
    }
    .el-container {
      height: 100%;
      .el-container {
        height: ~"-moz-calc(100% - 120px)";
        height: ~"-webkit-calc(100% - 120px)";
        height: ~"calc(100% - 120px)";
      }
    }
    .el-aside {
      background-color: #D3DCE6;
      color: #333;
    }
    .el-main {
      background-color: #E9EEF3;
      color: #333;
    }
  }
  .block {
    line-height: 35px;
  }
</style>
