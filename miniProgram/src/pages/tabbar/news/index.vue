<template>
  <view class="body">
    <u-sticky bgColor="#fff">
      <tabs
        :list="lsTabList"
        @change="fnChangeTabs"
      />
    </u-sticky>
    <view class="page-p-lr">
      <news
        v-if="objInit.news"
        v-show="sCurrentShow === 'news'"
      />
      <interpret
        v-if="objInit.interpret"
        v-show="sCurrentShow === 'interpret'"
      />
    </view>
  </view>
</template>

<script>
import news from '@/pages/tabbar/news/news';
import interpret from '@/pages/tabbar/news/interpret';
import tabs from '@/components/tabs';
export default {
  components: {
    news,
    interpret,
    tabs
  },
  data () {
    return {
      lsTabList: [
        { name: '小正电报' },
        { name: '小正解读' }
      ],
      objInit: {
        news: true,
        interpret: true,
      },
      sCurrentShow: 'interpret'
    };
  },
  methods: {
    fnChangeTabs (obj) {
      if (obj.index === 0) {
        this.sCurrentShow = 'news';
        return;
      }
      if (obj.index === 1) {
        this.objInit.interpret = true;
        this.sCurrentShow = 'interpret';
        return;
      }
    }
  }
};
</script>
<style lang="scss">
.body {
  overflow: hidden;
}
</style>