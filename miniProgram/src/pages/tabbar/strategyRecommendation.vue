<template>
  <!-- 策略推荐 -->
  <view v-show="bShowList">
    <sheet>
      <u-list @scrolltolower="scrolltolower" class="list">
        <u-row class="list__detail" justify="space-between" gutter="10">
          <u-col span="2" textAlign="center">
            <text class="list__title font-24 color-type-title">排名</text>
          </u-col>
          <u-col span="6">
            <text class="list__title font-24 color-type-title">组合名称</text>
          </u-col>
          <u-col span="3">
            <text class="list__title font-24 color-type-title">总收益</text>
          </u-col>
          <u-col span="1">
            <text decode>{{ sNbsp }}</text>
          </u-col>
        </u-row>
        <u-list-item v-for="(row, index) in lsList" :key="index">
          <view
            class="u-border-bottom p-tb-20"
            @click="fnNavigateTo('strategyRecommendationDetail')"
          >
            <u-row class="list__detail" gutter="10">
              <u-col span="2" customClass="flex-center">
                <text
                  class="list__index font-30 border-radius flex-center"
                  :class="{
                    first: index === 0,
                    second: index === 1,
                    third: index === 2
                  }"
                  >{{ index + 1 }}</text
                >
              </u-col>
              <u-col span="6" customClass="flex-col">
                <text class="list__title font-28 font-bold"
                  >上穿平台策略10天</text
                >
                <view class="font-24 color-type-title m-tb-12"
                  >2023-02-03 已建立48天</view
                >
                <text class="font-24 color-green" decode>{{ sNbsp }}</text>
              </u-col>
              <u-col span="3" customClass="flex-col">
                <text class="font-28 color-red font-bold">3152.29%</text>
                <view class="font-24 color-type-title m-tb-12"
                  >同期上证指数</view
                >
                <text class="font-24 color-green">-0.61%</text>
              </u-col>
              <u-col span="1" customClass="flex-center">
                <u--image
                  :showLoading="true"
                  src="/static/more.png"
                  width="34rpx"
                  height="34rpx"
                ></u--image>
              </u-col>
            </u-row>
          </view>
        </u-list-item>
      </u-list>
    </sheet>
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
      bShowList: false,
      sNbsp: `&nbsp;`
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
    // 修正渲染u-col组件的padding需要时间转换px延迟加载，导致列表内容异常跳动的问题
    setTimeout(() => {
      this.bShowList = true;
    }, 100)
  }
}
</script>

<style lang="scss">
@import '@/static/variable.scss';
.list {
  &__index {
    width: 34rpx;
    height: 34rpx;
    margin-top: -84rpx;
    color: #999;
    &.first {
      background: linear-gradient(180deg, #ff4c4c 0%, #ff2525 100%);
      color: #fff;
    }
    &.second {
      background: linear-gradient(180deg, #ffbf78 0%, #ff864b 100%);
      color: #fff;
    }
    &.third {
      background: linear-gradient(180deg, #ffd441 0%, #ffc258 100%);
      color: #fff;
    }
  }
}
</style>
