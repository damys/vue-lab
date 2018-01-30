<template>
    <div>
        <hr>
        <h1>{{msg}}</h1>

        <h4>router-vue a</h4>
        <a href="#/list">route.vue: list</a>
        <a href="#/detail">route.vue: detail</a>
        <h4>router-vue 参数:循环</h4>
        <ul>
            <li v-for="(hero, index) in heros" :key="index">
                {{hero.name}}
                
                <router-link :to="{name:'detail', query:{id:index, name:hero.name}}">查看</router-link>
                <!--方式2(修改另一外:做个声明): detail/id/1 params:{id:index} -->
            </li>
        </ul>
        <h4>页面跳转</h4>
        <button @click="goDetail">detail 页面</button>
        <button @click="goBack">上一页面</button>
        <button @click="go">下一页面</button>
        
        <a href="/"><button>首页</button></a>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg:"route",
            heros:[
                {name:'tom'},
                {name:'jack'}
            ]
        }
    },

    methods:{
        goDetail(){
            // this.$router.push({name:'detail'})
            // this.$router.push('/detail')
            this.$router.push({name:'detail', query:{id:5, name:"rose"} })
        },
        goBack(){
            this.$router.go(-1)
        },
        go(){
            this.$router.go(1)
        }
    }
}
</script>

