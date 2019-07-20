<template>
    <div>
        <div class="aside">
            <div class="aside-head">自定义图标</div>
            <div class="aside-body">
                <h2>共有 <code>{{getIcons.length}} </code>  图标可用</h2>
                <p>直接通过设置类名为 <code>icon--iconName</code></p>
                <p><i class="icon--apple"></i><code>&lt;i class=&quot;icon--apple&quot;&gt;&lt;/i&gt;</code></p>

                <el-input class="search" size="large" v-model="keyword" clearable placeholder="请输入图标名称"></el-input>

                <ul class="icon-list">
                    <li v-for="(item, index) in getIcons" :key="index">
                        <div class="icon-content">
                            <i :class="`${item}`"></i>
                            <p>{{item}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      keyword: '',
      iconList: [
        // single
        'icon--tuichu',
        'icon--close', 'icon--tishi', 'icon--form', 'icon--copy',
        'icon--table', 'icon--loading', 'icon--refresh', 'icon--tongbu',
        'icon--diyiming2', 'icon--dierming', 'icon--disanming', 'icon--quanxian',
        'icon--ditch', 'icon--qrcode', 'icon--fenpeishebei', 'icon--404',
        'icon--metro', 'icon--bankcard', 'icon--chakan', 'icon--bumenguanli',
        'icon--move', 'icon--third_unfold', 'icon--apple', 'icon--bus',
        'icon--android', 'icon--404-cry', 'icon--subscribe', 'icon--facebook_fill',
        'icon--ipad', 'icon--wechat_fill', 'icon--rizhilog', 'icon--rocket',
        'icon--youjian', 'icon--weibo', 'icon--wechat', 'icon--pc',
        'icon--password', 'icon--weibo_fill', 'icon--qq', 'icon--twitter',

        // double
        'icon--bingtu_full', 'icon--bingtu', 'icon--round_up', 'icon--round_up_fill',
        'icon--round_down_fill', 'icon--round_down', 'icon--round_right_fill', 'icon--round_right',
        'icon--round_left_fill', 'icon--round_left', 'icon--gantanhao1', 'icon--gantanhao_fill1',
        'icon--wenhao_fill', 'icon--wenhao', 'icon--dianhua_fill', 'icon--dianhua',
        'icon--video', 'icon--video_fill', 'icon--shizhong', 'icon--shizhong_fill',
        'icon--recharge', 'icon--recharge_fill', 'icon--pullup', 'icon--pulldown',
        'icon--roundclose', 'icon--roundclose_fill', 'icon--roundcheck', 'icon--roundcheck_fill',
        'icon--right', 'icon--back', 'icon--down_line', 'icon--top_line',
        'icon--present_fill', 'icon--present', 'icon--redpacket', 'icon--redpacket_fill',
        'icon--manage', 'icon--manage_fill', 'icon--clock', 'icon--clock_fill',
        'icon--addpeople', 'icon--addpeople_fill', 'icon--moneybag', 'icon--moneybag_fill',
        'icon--newshot', 'icon--newshot_fill', 'icon--medal', 'icon--medal_fill',
        'icon--attentionforbid_fill', 'icon--attentionforbid', 'icon--record', 'icon--record_fill',
        'icon--xihuan', 'icon--xihuan_fill', 'icon--liuyan', 'icon--liuyan_fill',
        'icon--biaoxing', 'icon--biaoxing_fill', 'icon--tag', 'icon--tag_fill',
        'icon--notice', 'icon--notice_fill', 'icon--forward', 'icon--forward_fill',
        'icon--friendadd', 'icon--friendadd_fill', 'icon--unlock', 'icon--lock',
        'icon--delete', 'icon--delete_fill', 'icon--gantanhao', 'icon--gantanhao_fill',
        'icon--jian', 'icon--jia', 'icon--weizhi_fill', 'icon--weizhi',
        'icon--chaping', 'icon--haoping', 'icon--yincangbukejian', 'icon--xianshikejian',
        'icon--paizhao_fill', 'icon--paizhao', 'icon--yonghu_fill', 'icon--yonghu',
        'icon--xiazaidaoru', 'icon--shangchuandaochu', 'icon--gengduo-shuxiang', 'icon--gengduo-hengxiang',
        'icon--maikefeng_fill', 'icon--maikefeng', 'icon--laba_fill', 'icon--laba',
        'icon--home', 'icon--home_fill', 'icon--youhuijuan_fill', 'icon--youhuijuan',
        'icon--cart_fill', 'icon--cart', 'icon--sousuo_fill', 'icon--sousuo',
        'icon--raidobox_fill', 'icon--raidobox', 'icon--guoji_fill', 'icon--guoji',
        'icon--fuwu_fill', 'icon--fuwu', 'icon--caifu_fill', 'icon--caifu',
        'icon--twoAngleright', 'icon--zuoshuangxiangsanjiao', 'icon--unfold', 'icon--packup',
        'icon--down', 'icon--top', 'icon--biaotou-daoxu', 'icon--biaotou-zhengxu',
        'icon--shuru_fill', 'icon--shuru', 'icon--email', 'icon--email_fill',
        'icon--yinle', 'icon--yinle_fill', 'icon--xiazai', 'icon--xiazai_fill',
        'icon--shiyan', 'icon--shiyan_fill', 'icon--set', 'icon--set_fill',
        'icon--shaixuan', 'icon--shaixuan_fill', 'icon--saoyisao', 'icon--saoyisao_fill',
        'icon--kefu', 'icon--kefu_fill', 'icon--share', 'icon--share_fill',
        'icon--dianzan', 'icon--dianzan_fill', 'icon--baozhang', 'icon--baozhang_fill',
        'icon--bank_fill', 'icon--bank', 'icon--apps-line', 'icon--apps_fill',
        'icon--stack', 'icon--stack_fill', 'icon--skin', 'icon--skin_fill',
        'icon--yonghuziliao', 'icon--yonghuziliao_fill', 'icon--dianpu', 'icon--dianpu_fill',
        'icon--tijikongjian', 'icon--tijikongjian_fill', 'icon--ziliaoshouce', 'icon--ziliaoshouce_fill',
        'icon--qiyeyuanquwuye', 'icon--qiyeyuanquwuye_fill', 'icon--jijianfasong_fill', 'icon--jijianfasong',
        'icon--kucun_fill', 'icon--kucun', 'icon--zhongzhuanzhan_fill', 'icon--zhongzhuanzhan',
        'icon--cangkucangchu', 'icon--cangkucangchu_fill', 'icon--sfzmian', 'icon--sfz'
      ]
    }
  },
  computed: {
    getIcons () {
      return this.iconList.filter((item) => {
        return item.indexOf(this.keyword) !== -1
      })
    }

  }
}
</script>

<style scoped>
.aside-body>p {
 margin-top: 10px;
}
.search{
    margin-top: 50px;
}

.icon-list>li{
    display: inline-block;
    padding: 10px;
    width: 120px;
    height: 120px;
}
.icon-content {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.icon-content>i{
    font-size: 36px;
    color: #606266;
}
.icon-content>p{
    margin-top: 10px;
    color: #888;
}
</style>
