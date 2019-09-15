<template>
    <div>
        <!-- banner -->
        <mt-swipe :auto="4000">
            <!-- <mt-swipe-item v-for="item in bannerList" :key="item.pk"><img :src="item.fields.img"></mt-swipe-item>  -->
            <mt-swipe-item v-for="item in bannerList" :key="item.img"><img :src="item.img"></mt-swipe-item>  
        </mt-swipe>
        <!-- <img src="../data/1.png"> -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-image"></span>
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-videocam"></span>
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import bL from '../../json/bannerData.json'

export default {
    data(){
        return {
            bannerList: [
                ] // 保存轮播图的数组
        }
    },
    created() {
        // this.getBanner();    // 真实访问接口数据调用函数
        this.getBannerList();   // 本地数据 JSON 形式导入
    },
    methods: {
        getBanner() {
            this.$http.get('http://127.0.0.1:8000/my/api').then(result => {
                console.log(result.body)
                this.bannerList = result.body;
            })
        },
        getBannerList() {
            this.bannerList = bL.list
        }
    }
}
</script>

<style lang="scss">
    .mint-swipe{
        height: 200px;
        
        .mint-swipe-item{
            // &:nth-child(1){
            //     background-color: red;
            // }
            // &:nth-child(2){
            //     background-color: cyan;
            // }
            // &:nth-child(3){
            //     background-color: yellow;
            // }
            img{
                width: 100%;
                height: 100%;
            }
        }
        
    }
    
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-right: 0px solid #eee;
        border-bottom: 0px solid #eee;
        background-color: rgb(250,250,250);
        .mui-media-body {
            font-size: 13px;
    }
    }
</style>