<template>
    <div>
        <h1>{{msg}}</h1>
        <input type='text' v-model="filterText">
        <h3>{{filterText | myFilter}}</h3>
        <hr>
    </div>
</template>

<script>
export default {
    data () {
        return {
          msg: 'model',
          filterText:''
        }
    },
    filters:{
        myFilter:function(value){
            // 反转数组：转换后数据-反转数组-转所字符串
            return value.split('').reverse().join('');
        }
    }
    
}
</script>

<style scoped>

</style>
