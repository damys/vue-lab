<template>
<div class='tagbar'>
  <ul class="tag-list">
    <li v-for="(item, index) in tagsList" :key="index" :class="{'active': isActive(item.path)}" >
      <router-link :to='item.path' class="tag-title">{{item.title}}</router-link>
      <span class="tag-close" @click="onCloseCurrentTag(index)" v-show="tagsList.length != 1 || $route.fullPath != '/dashboard'"><i class="icon--close"></i></span>
    </li>
  </ul>

  <div class="tag-option">
    <el-dropdown @command='handleTag'>
      <div class="el-dropdown-link dropdown-icon"><i class="icon--close"></i></div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command='closeOther'>关闭其他</el-dropdown-item>
        <el-dropdown-item command='closeAll'>关闭所有</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</div>
</template>

<script>
import evue from '../../utils/evue'

export default {
  components: {},
  data () {
    return {
      tagsList: []
    }
  },
  computed: {
    showTags () {
      return this.tagsList.length > 0
    }
  },
  watch: {
    $route (newValue, oldValue) {
      this.setTags(newValue)
    }
  },
  methods: {
    isActive (path) {
      return path === this.$route.fullPath
    },

    setTags (route) {
      const isExist = this.tagsList.some(item => {
        return item.path === route.fullPath
      })

      if (!isExist) {
        if (this.tagsList.length >= 8) {
          this.tagsList.shift()
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.matched[1].components.default.name
        })
      }

      evue.$emit('tags', this.tagsList)
    },

    onCloseCurrentTag (index) {
      // 默认首页
      if (this.tagsList.length === 1 && this.$route.fullPath === '/dashboard') {
        this.$router.push('/')
        this.setTags(this.$route)
        return false
      }

      const curItem = this.tagsList.splice(index, 1)[0]
      const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1]
      if (item) {
        curItem.path === this.$route.fullPath && this.$router.push(item.path)
      } else {
        this.$router.push('/')
      }
    },

    closeOtherTag () {
      const curItem = this.tagsList.filter((item) => {
        return item.path === this.$route.fullPath
      })

      this.tagsList = curItem
    },

    // 关闭全部标签页面
    closeAllTag () {
      this.tagsList = []
      this.$router.push('/')
      this.setTags(this.$route)
    },

    // 处理下拉框点击处理标签
    handleTag (command) {
      command === 'closeOther' ? this.closeOtherTag() : this.closeAllTag()
    }
  },
  created () {
    this.setTags(this.$route)

    // 监听关闭当前页面的标签页
    // evue.$on('close_current_tags', () => {

    // })
  }
}
</script>
