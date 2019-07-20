<template>
  <div class="sidebar">
    <div class="logo" v-if="!collapse">管理系统</div>
    <div class='logo logo-min' v-else>mini</div>

    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" unique-opened router>
      <template v-for="item in items">
        <!-- 最多显示 3 level -->
        <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">

                <template slot="title">
                    <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                </template>

                <template v-for="item2 in item.subs">
                    <el-submenu v-if="item2.subs" :index="item2.index" :key="item2.index">
                        <template slot="title">{{ item2.title }}</template>
                        <el-menu-item v-for="(item3,i) in item2.subs" :key="i" :index="item3.index">
                            {{ item3.title }}
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item v-else :index="item2.index" :key="item2.index">
                        {{ item2.title }}
                    </el-menu-item>
                </template>

            </el-submenu>
        </template>

        <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
                <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </el-menu-item>
        </template>

      </template>
    </el-menu>
  </div>
</template>

<script>
import evue from '../../utils/evue'

export default {
  data () {
    return {
      collapse: false,
      items: [
        {
          icon: 'icon--home',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          icon: 'icon--table',
          index: 'table',
          title: '基础表格'
        },
        {
          icon: 'icon--copy',
          index: 'tabs',
          title: 'tab选项卡'
        },
        {
          icon: 'icon--form',
          index: '3',
          title: '表单相关',
          subs: [
            {
              index: 'form',
              title: '基本表单'
            },
            {
              index: 'upload',
              title: '文件上传'
            }
          ]
        },
        {
          icon: 'icon--guoji',
          index: 'icon',
          title: '自定义图标'
        },
        {
          icon: 'icon--manage',
          index: 'carousel',
          title: 'carousel 级联选择器'
        },
        {
          icon: 'icon--jijianfasong',
          index: '6',
          title: '常用组件',
          subs: [
            {
              index: 'collapse',
              title: '折叠面板'
            },
            {
              index: 'tooltip',
              title: '文字提示'
            },
            {
              index: 'dialog',
              title: '对话框'
            }
          ]
        },
        {
          icon: 'icon--gantanhao',
          index: '7',
          title: '错误处理',
          subs: [
            {
              index: '403',
              title: '403页面'
            },
            {
              index: '404',
              title: '404页面'
            }
          ]
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  },
  created () {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    evue.$on('collapse', msg => {
      this.collapse = msg
    })
  }
}
</script>
<style>
.sidebar-el-menu .el-menu-item,
.el-submenu .el-submenu__title,
.el-menu--vertical .el-menu-item,
.el-menu--vertical .el-submenu .el-menu-item {
  height: 42px;
  line-height: 42px;
}
</style>
