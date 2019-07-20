<template>
<div class='login-wrap'>
  <div class="login">
    <div class="login-title">登录管理系统</div>
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

      <el-button class="login-submit" type="primary" @click="submitForm('ruleForm')">登录</el-button>

      <p class="login-tips">测试：admin,123456</p>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 3 到 12 字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    var _this = this
    document.onkeydown = function (e) {
      var key
      if (window.event === undefined) {
        key = e.keyCode
      } else {
        key = window.event.keyCode
      }
      if (key === 13) {
        _this.submitForm('ruleForm')
      }
    }
  },
  // 方法集合
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.requestLogin()) {
            this.$message({
              message: '登录成功',
              type: 'success',
              duration: 1000
            })
            setTimeout(() => {
              localStorage.setItem('username', this.ruleForm.username)
              this.$router.push('/')
            }, 1000)
          } else {
            this.$message({
              message: '用户名或密码错误',
              type: 'error',
              duration: 1000
            })
          }
        } else {
          this.$message({
            message: '登录失败',
            type: 'warning',
            duration: 500
          })
          return false
        }
      })
    },
    requestLogin () {
      if (this.ruleForm.username === 'admin' && this.ruleForm.password === '123456') {
        return true
      }

      return false
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
