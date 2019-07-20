<template>
  <div class='headbar'>
    <!-- 折叠按钮 -->
    <div class="header-left" @click="collapseChage">
      <i class="icon--third_unfold" style="font-size:24px"></i>
    </div>

    <div class="header-right">
      <ul class="header-user">
        <li class="icon-fullscreen" @click="onFullScreen">
          <el-tooltip :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
            <i class="icon--move" style="font-size:26px"></i>
          </el-tooltip>
        </li>
        <li class="icon-bell">
          <el-tooltip effect="dark" :content="message?`有 ${message} 条未读消息`:`消息中心`" placement="bottom">
                <router-link to="/tabs"><i class="icon--notice_fill"></i></router-link>
            </el-tooltip>
            <span class="icon-bell-badge" v-if="message"></span>
        </li>
        <li class="user-avator"><img src="@/assets/img/user.jpg"></li>
        <li class="user-name">
          <el-dropdown @command="handleClick">
            <span class="el-dropdown-link user-name-icon">{{username}} <i class="icon--biaotou-daoxu"></i></span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="user"><i class="icon--yonghu"></i> 个人信息</el-dropdown-item>
                <el-dropdown-item command="password"><i class="icon--password"></i> 修改密码</el-dropdown-item>
                <el-dropdown-item divided  command="loginout"><i class="icon--tuichu"></i> 退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import evue from '../../utils/evue'

export default {
  components: {},
  data () {
    return {
      collapse: false,
      fullscreen: false,
      name: '访客',
      message: 3
    }
  },
  computed: {
    username () {
      let username = localStorage.getItem('username')
      return username || this.name
    }
  },
  methods: {
    // 下拉菜单选择事件
    handleClick (command) {
      if (command === 'loginout') {
        localStorage.removeItem('username')
        this.$router.push('/login')
      } else {
        this.$router.push('/form')
      }
    },
    // 侧边栏折叠
    collapseChage () {
      this.collapse = !this.collapse
      evue.$emit('collapse', this.collapse)
    },
    // 全屏事件
    onFullScreen () {
      let element = document.documentElement

      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    },
    mounted () {
      if (document.body.clientWidth < 1500) {
        this.collapseChage()
      }
    }
  }
}
</script>
