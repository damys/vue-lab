<template>
  <div class="wrapper">
      <v-sidebar/>
      <div class="main-content-wrap" :class="{'content-collapse':collapse}">
        <v-headbar/>
        <v-tagbar/>
        <div class="main-content">
            <transition name="move" mode="out-in">
                <keep-alive :include="tagsList">
                    <router-view/>
                </keep-alive>
            </transition>
        </div>
      </div>
  </div>
</template>

<script>
import vHeadbar from './bar/headbar'
import vSidebar from './bar/sidebar'
import vTagbar from './bar/tagbar'
import evue from '../utils/evue'

export default {
  data () {
    return {
      tagsList: [],
      collapse: false
    }
  },
  components: {
    vHeadbar, vSidebar, vTagbar
  },
  methods: {
    onCollapse: function (data) {
      this.collapse = data
    }
  },
  created () {
    evue.$on('collapse', msg => {
      console.log(msg)
      this.collapse = msg
    })

    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    evue.$on('tags', msg => {
      let arr = []
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name)
      }
      this.tagsList = arr
    })
  }
}
</script>
<style scoped>
.main-content-wrap {
    position: absolute;
    left: 230px;
    right: 0;
    top: 0;
    bottom: 0;
    padding-bottom: 96px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f5f7f9;
}

.main-content {
    width: auto;
    height: 100%;
    padding: 20px;
    overflow-y: scroll;
    box-sizing: border-box;
}

.content-collapse {
    left: 64px;
}
</style>
