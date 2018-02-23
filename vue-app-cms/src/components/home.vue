<template>
    <div>
        <h1>{{msg}}</h1>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg:'home'
        }
    }
}
</script>

<style>
    .mint-swipe{ max-height: 187px;}
</style>
    