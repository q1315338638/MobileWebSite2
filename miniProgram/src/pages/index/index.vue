<template>
  <view>
    <u-navbar
      title="以正量化"
      :autoBack="true"
      placeholder
    />
    <home
      v-if="objInit.home"
      v-show="nSelect === 0"
    />
    <news
      v-if="objInit.news"
      v-show="nSelect === 1"
    />
    <tabbar @change="fnSelectChange" />
  </view>
</template>

<script>
import home from '@/pages/tabbar/home'
import news from '@/pages/tabbar/news'
import tabbar from '@/components/tabbar'
export default {
  components: {
    home,
    news,
    tabbar,
  },
  data () {
    return {
      objInit: {
        home: false,
        news: true,
      },
      nSelect: 1
    }
  },
  methods: {
    fnSelectChange (nTabbarNo) {
      this.nSelect = nTabbarNo;
      if (nTabbarNo === 0) {
        return this.objInit.home = true;
      }
      if (nTabbarNo === 1) {
        return this.objInit.news = true;
      }
    }
  }
}
</script>
<style lang="scss">
.tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  &__img {
    width: 40rpx;
    height: 40rpx;
  }
}
</style>