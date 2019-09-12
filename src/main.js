// 入口文件

import Vue from 'vue'   // 导入 vue 包

import app from './App.vue' // 导入 App.vue 组件

import { Header } from 'mint-ui' // 按需导入 mint-ui 组件
Vue.component(Header.name, Header);

import './lib/mui/css/mui.min.css' // 导入 MUI 包

// 创建一个实例对象
var vm = new Vue({
    el: '#app',
    render: c => c(app)
})