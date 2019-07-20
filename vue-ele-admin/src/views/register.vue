<template>
<div class='login-wrap'>
  <div class="login">
    <div class="login-title">用户注册</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login-form" label-width="0px">
      <el-form-item prop='username'>
        <el-input
        placeholder="用户名"
        prefix-icon="el-icon-user"
        autocomplete="off"
        v-model="ruleForm.username">
      </el-input>
      </el-form-item>

      <el-form-item prop='password'>
        <el-input
        type="password"
        placeholder="密码"
        prefix-icon="el-icon-key"
        autocomplete="off"
        v-model="ruleForm.password">
      </el-input>
      </el-form-item>

      <el-form-item prop='password2'>
        <el-input
        type="password"
        placeholder="再输入密码"
        prefix-icon="el-icon-key"
        autocomplete="off"
        @keyup.enter.native="submitForm('ruleForm')"
        v-model="ruleForm.password2">
      </el-input>
      </el-form-item>

      <el-button class="login-submit" type="primary" @click="submitForm('ruleForm')">注册</el-button>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码2'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        password: '',
        password2: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 3 到 12 字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 字符', trigger: 'blur' }
        ],
        password2: [
          { required: true, message: '请再次输入密码1', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 字符', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  // 方法集合
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '注册成功',
            type: 'success',
            duration: 1000
          })
          setTimeout(() => {
            this.$router.push('/login')
          }, 1000)
        } else {
          console.log('注册失败')
          return false
        }
      })
    }
  }
}
</script>

<style  scoped>
.login-wrap{
  position: relative;
  width:100%;
  height:100%;
  background: #4a596f;
}
.login{
    position: absolute;
    left:50%;
    top:50%;
    width:320px;
    margin:-200px 0 0 -160px;
    border-radius: 3px;
    background: #fff;
    overflow: hidden;
}

.login-title {
    width:100%;
    line-height: 50px;
    text-align: center;
    font-size:18px;
    border-bottom: 1px solid #ddd;
}

.login-form {
  padding: 30px;
}

.login-submit{
    width:100%;
    height:36px;
    font-size: 14px;
    margin-top: 4px;
}
.login-tips{
    font-size:12px;
    line-height:30px;
    color:#888;
    margin-top: 4px;
}
</style>
