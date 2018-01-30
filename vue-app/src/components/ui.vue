<template>
    <div>
        <hr>
        <h1>{{msg}}</h1>
        <mt-header title="多个按钮">
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <br>
        <mt-button @click="headleClose">Toast</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';

export default {
  data () {
    return {
        msg:'UI',
        value:false
    }
  },

  methods:{
      headleClose(){
        Toast({
            message:'提示信息',
            iconClass: 'icon icon-success'
            })
      }
  }
}
</script>
