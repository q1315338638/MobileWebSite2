<template>
  <view class="body">
    <u-list
      @scrolltolower="scrolltolower"
      class="list"
    >
      <u-list-item
        v-for="(row, index) in lsList"
        :key="index"
      >
        <sheet @click="fnNavigateTo('preferredCombinationDetail')">
          <text class="u-line-2 line-height-50 font-30">在一季报正式披露前，“股王”贵州茅台(600519)发布最新季度经营数据，双位数的业绩增长，xxxxxxxxxxx</text>
          <view class="flex-center-start color-type-title font-24 m-t-20">
            <text class="m-r-8">中国基金报</text>
            <text class="m-r-16">3小时前</text>
            <text
              class="p-tb-8 p-lr-14 border-radius color-white font-22"
              :class="{
                'background-red': index % 1 === 0,
                'background-green': index % 2 === 0,
                'background-yellow': index % 3 === 0,
              }"
            >利好</text>
          </view>
        </sheet>
      </u-list-item>
    </u-list>
  </view>
</template>

<script>
import sheet from '@/components/sheet'
export default {
  components: {
    sheet
  },
  data () {
    return {
      lsList: [1, 2, 3, 4],
    };
  },
  methods: {
    scrolltolower () {
      this.loadmore()
    },
    loadmore () {
      for (let i = 0; i < 30; i++) {
        this.lsList.push({

        })
      }
    }
  },
  onReady () {
    this.loadmore();
  },
  mounted () {

  }
};
</script>
<style lang="scss">
.body {
  overflow: hidden;
}
</style>