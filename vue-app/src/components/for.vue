<template>
    <div class="content">
        <h1>{{msg}}</h1>
        <h4>使用数组的方式</h4>
        <code>stus:[{name:'jack', score:'A'},{name:'rose', score:'B'}],</code>
        <ul>
            <li v-for="(stu, index) in stus" v-bind:key="index">
                index:{{index}}
                stu:{{stu}}
            </li>
        </ul>

        <h4>使用对象的方式</h4>
        <code>person:{name:'mick',alise:'迈克'}}</code>
        <ul>
            <li v-for="(value, key, index) in person" v-bind:key="index">
                index:{{index}} --
                value:{{value}} --
                key:{{key}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg:'for 循环',
      stus:[{name:'jack', score:'A'},{name:'rose', score:'B'}],
      person:{name:'mick',alise:'迈克'}
    }
  }
}
</script>

<style scoped>
ul li{ list-style-type:none}
</style>
