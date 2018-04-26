import Vue from 'vue'
import Router from 'vue-router'

import Body from 'compon/Body'
import Button from 'compon/Button'
import Radio from 'compon/Radio'
import Checkbox from 'compon/Checkbox'
import Input from 'compon/Input'
import InputNumber from 'compon/InputNumber'
import Select from 'compon/Select'
import Cascader from 'compon/Cascader'
import Switch from 'compon/Switch'
import Slider from 'compon/Slider'
import TimePicker from 'compon/TimePicker'
import DatePicker from 'compon/DatePicker'
import Upload from 'compon/Upload'
import Transfer from 'compon/Transfer'
import Form from 'compon/Form'
import Table from 'compon/Table'
import Tag from 'compon/Tag'
import Progress from 'compon/Progress'
import Tree from 'compon/Tree'
import Pagination from 'compon/Pagination'
import Badge from 'compon/Badge'
import Alert from 'compon/Alert'
import Message from 'compon/Message'
import MessageBox from 'compon/MessageBox'
import Notification from 'compon/Notification'
import NavMenu from 'compon/NavMenu'
import Tabs from 'compon/Tabs'
import Breadcrumb from 'compon/Breadcrumb'
import Dropdown from 'compon/Dropdown'
import Steps from 'compon/Steps'
import Dialog from 'compon/Dialog'
import Popover from 'compon/Popover'
import Card from 'compon/Card'
import Carousel from 'compon/Carousel'
import Collapse from 'compon/Collapse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Body,
      redirect: '/Button',
      children: [
        {
          path: '/Button',
          name: 'Button',
          component: Button
        },
        {
          path: '/Radio',
          name: 'Radio',
          component: Radio
        },
        {
          path: '/Checkbox',
          name: 'Checkbox',
          component: Checkbox
        },
        {
          path: '/Input',
          name: 'Input',
          component: Input
        },
        {
          path: '/InputNumber',
          name: 'InputNumber',
          component: InputNumber
        },
        {
          path: '/Select',
          name: 'Select',
          component: Select
        },
        {
          path: '/Cascader',
          name: 'Cascader',
          component: Cascader
        },
        {
          path: '/Switch',
          name: 'Switch',
          component: Switch
        },
        {
          path: '/Slider',
          name: 'Slider',
          component: Slider
        },
        {
          path: '/TimePicker',
          name: 'TimePicker',
          component: TimePicker
        },
        {
          path: '/DatePicker',
          name: 'DatePicker',
          component: DatePicker
        },
        {
          path: '/Upload',
          name: 'Upload',
          component: Upload
        },
        {
          path: '/Transfer',
          name: 'Transfer',
          component: Transfer
        },
        {
          path: '/Form',
          name: 'Form',
          component: Form
        },
        {
          path: '/Table',
          name: 'Table',
          component: Table
        },
        {
          path: '/Tag',
          name: 'Tag',
          component: Tag
        },
        {
          path: '/Progress',
          name: 'Progress',
          component: Progress
        },
        {
          path: '/Tree',
          name: 'Tree',
          component: Tree
        },
        {
          path: '/Pagination',
          name: 'Pagination',
          component: Pagination
        },
        {
          path: '/Badge',
          name: 'Badge',
          component: Badge
        },
        {
          path: '/Alert',
          name: 'Alert',
          component: Alert
        },
        {
          path: '/Message',
          name: 'Message',
          component: Message
        },
        {
          path: '/MessageBox',
          name: 'MessageBox',
          component: MessageBox
        },
        {
          path: '/Notification',
          name: 'Notification',
          component: Notification
        },
        {
          path: '/NavMenu',
          name: 'NavMenu',
          component: NavMenu
        },
        {
          path: '/Tabs',
          name: 'Tabs',
          component: Tabs
        },
        {
          path: '/Breadcrumb',
          name: 'Breadcrumb',
          component: Breadcrumb
        },
        {
          path: '/Dropdown',
          name: 'Dropdown',
          component: Dropdown
        },
        {
          path: '/Steps',
          name: 'Steps',
          component: Steps
        },
        {
          path: '/Dialog',
          name: 'Dialog',
          component: Dialog
        },
        {
          path: '/Popover',
          name: 'Popover',
          component: Popover
        },
        {
          path: '/Card',
          name: 'Card',
          component: Card
        },
        {
          path: '/Carousel',
          name: 'Carousel',
          component: Carousel
        },
        {
          path: '/Collapse',
          name: 'Collapse',
          component: Collapse
        }
      ]
    }
  ]
})
