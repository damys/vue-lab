<template>
    <div>
        <!-- 头部内容 -->
        <mt-header title="header"></mt-header>

        <!-- 中间内容区 -->
        <router-view></router-view>

        <!-- 底部内容 -->
        <mt-tabbar>
            <mt-tab-item id="外卖">
                外卖
            </mt-tab-item>
            <mt-tab-item id="订单">
                订单
            </mt-tab-item>
            <mt-tab-item id="发现">
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                我的
            </mt-tab-item>
        </mt-tabbar>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg:'app-vue'
            }
        }
    }
</script>
<style>
    *{margin: 0; padding: 0}
</style>
