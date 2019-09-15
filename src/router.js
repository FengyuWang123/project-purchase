import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/homeContainer.vue'
import MemberContainer from './components/tabbar/memberContainer.vue'
import CartContainer from './components/tabbar/cartContainer.vue'
import SearchContainer from './components/tabbar/searchContainer.vue'



var router = new VueRouter({
    routes: [   // 配置路由规则
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/cart', component: CartContainer },
        { path: '/search', component: SearchContainer },
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类
})

export default router