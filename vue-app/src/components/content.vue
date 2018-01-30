<template>
    <div class="footer">
        <h1>{{msg}}</h1>
        <form>
          <input type="text" value="">
          <input type="reset" value="reset" ref="resetForm">
          <button @click="onSubmit">Submit</button>
      </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Content'
    }
  },
  methods:{
    onSubmit:function(){
      console.log(this.$refs)
      this.$refs.resetForm.click()
      console.log(this.$refs.resetForm.tagName)
    }
  }
}
</script>
