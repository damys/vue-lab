<template>
    <div>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
    const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
    import Jsonp from 'jsonp';
    import Qs from 'qs';

    export default{
        data(){
            return {
                msg:'resource'
            }
        },
        created(){
            //- resource
            // this.$http.jsonp('http://127.0.0.1/test/api.php'
            // ,{emulateJSON:true}
            // ).then(function (res) {
            //         // 处理成功的结果
            //         console.log(res);
            //     },function (res) {
            //         // 处理失败的结果
            //         console.log('error:');
            //         console.log(res);
            //     }
            // );

            //-axios
            // this.$axios.get('http://127.0.0.1/test/api.php?id=1'
            // ,{emulateJSON:true}    // 否则格式： id = 2
            // ).then(res=>{
            //     console.log(res)
            // }).catch(err=>{
            //     console.log(err)
            // })
            
            //-axios headers
            // 请求头第1种：
            // this.$axios.defaults.headers = {
            // 'Content-Type': 'application/x-www-form-urlencoded'
            // }
            // this.$axios.post('http://127.0.0.1/test/api.php'
            // ,{content:'axios  data'}
            // ,{
            //     // 请求头第2种：
            //     headers:{
            //         // 'content-type':'application/x-www-form-urlencoded'
            //     }
            // }
            // ,{emulateJSON:true}    // 否则格式： id = 2
            // ).then(res=>{
            //     console.log(res)
            // }).catch(err=>{
            //     console.log(err)
            // })

            //-axios 使用第三方转： API_PROXY
            // this.$axios.post(API_PROXY + 'http://127.0.0.1/test/api.php'
            // ,{content:'axios  data'}).then(res=>{
            //     console.log(res)
            // }).catch(err=>{
            //     console.log(err)
            // })
            

            // this.$axios.post('http://127.0.0.1/test/api.php'
            // // ,{content:'axios  data'}).then(res=>{
            // // 可跨域
            // ,Qs.stringify({content:'axios  data'})).then(res=>{
            //     console.log(res)
            // }).catch(err=>{
            //     console.log(err)
            // })

            // 同时发送多个请求，只有一个失败，就算失败
            function testAll(res1, res2){
                console.log(res1)
                console.log(res2)
            }

            this.$axios.all([
                this.$axios.get('http://127.0.0.1/test/api.php?id=1'),
                this.$axios.post('http://127.0.0.1/test/api.php', 'id=1')
            ]).then(this.$axios.spread(testAll))
            .catch(err=>{
                console.log(err)
            })

        }
    }
</script>


