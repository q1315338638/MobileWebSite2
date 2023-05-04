<template>
  <view v-show="bShowList">
    <u-list @scrolltolower="scrolltolower" class="list">
      <u-list-item v-for="(row, index) in lsList" :key="index">
        <sheet @click="fnNavigateTo('preferredCombinationDetail')">
          <view class="p-r-38">
            <u-row class="list__detail" justify="space-between" gutter="10">
              <u-col span="6">
                <text class="list__title font-24 color-type-title"
                  >股票名称</text
                >
                <view class="u-flex font-28 m-t-24">
                  <text class="m-r-20 font-bold">恒久科技</text>
                  <text class="color-red font-bold">+1329.51%</text>
                </view>
              </u-col>
              <u-col span="3" justify="center" align="center">
                <text class="list__title font-24 color-type-title">买入价</text>
                <view class="font-28 m-t-24">134.52</view>
              </u-col>
              <u-col span="3" justify="center" align="center">
                <text class="list__title font-24 color-type-title">止损价</text>
                <view class="font-28 m-t-24">132.52</view>
              </u-col>
            </u-row>
          </view>
          <view>
            <view class="m-tb-14 font-24 color-type-title">008208</view>
            <view class="flex-start">
              <text
                class="list__label p-tb-4 p-lr-8 m-r-22 font-20 border-radius"
                >电子-光学光-光学元件</text
              >
              <view class="flex-center-start">
                <text class="font-24 m-r-8 color-type-title">仓位</text>
                <text class="font-28">10%</text>
              </view>
            </view>
          </view>
          <view class="img">
            <u--image
              :showLoading="true"
              src="/static/first.png"
              width="80rpx"
              height="80rpx"
            ></u--image>
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
      bShowList: false,
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
// .list {
//   width: calc(100% - $pagePadding * 2);
// }
.list__detail {
}
.list__label {
  background: #e6efff;
  color: #2a68ff;
}
.img {
  position: absolute;
  right: -24rpx;
  top: -24rpx;
}
::v-deep .uni-scroll-view {
  overflow: inherit !important;
}
</style>
