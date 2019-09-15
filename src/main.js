// 入口文件

import Vue from 'vue'   // 导入 vue 包

import VueRouter from 'vue-router'  // 导入路由的包
Vue.use(VueRouter)  // 使用路由

import app from './App.vue' // 导入 App.vue 组件

import { Header, Swipe, SwipeItem } from 'mint-ui' // 按需导入 mint-ui 组件
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

import './lib/mui/css/mui.min.css' // 导入 MUI 包
import './lib/mui/css/icons-extra.css' // 导入 icon-extra 包

import router from './router.js'    // 导入自己的路由配置文件

// 创建一个实例对象
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})