<template>
    <div class="app-container">

        <!-- 顶部 Header 区域 -->
        <mt-header fixed title="世界这么大，我想去看看"></mt-header>
        <!-- 中间的 路由 router-view 区域 -->
		<transition>
        	<router-view></router-view>
		</transition>
        <!-- 底部 Tabbar 区域 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon-extra mui-icon mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}

.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
}
.app-container{
	padding-top: 45px;
	overflow-x: hidden;
	.mint-header {
		background-color:#282828;
		height: 45px;
	}
	.mui-bar-tab .mui-tab-item.mui-active{
		color: orange;
	}
	.mui-bar{
		background-color: rgb(250,250,250);
        -webkit-box-shadow: 0 0 10px rgba(150,150,150,.1);
	}
}
</style>
