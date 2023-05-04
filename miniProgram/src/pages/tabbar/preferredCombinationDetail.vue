<template>
  <view class="body">
    <navbar title="恒久科技(008208)" />
    <view class="main">
      <view class="main__background"></view>
      <view class="page-p-lr">
        <sheet height="196">
          <u-row gutter="10" height="100%">
            <u-col span="6">
              <view class="flex-center flex-col">
                <text class="color-red font-48 font-bold">+139.51%</text>
                <text class="color-type-title font-24">总收益</text>
              </view>
            </u-col>
            <u-line direction="col" color="#DCDCDC"></u-line>
            <u-col span="6">
              <view class="flex-center flex-col">
                <text class="color-red font-48 font-bold">+139.51%</text>
                <text class="color-type-title font-24">日收益</text>
              </view>
            </u-col>
          </u-row>
        </sheet>
        <view class="table m-t-20 p-b-20">
          <view class="table__head page-p-lr">
            <u-row gutter="10" height="100%">
              <u-col span="4" textAlign="center" customClass="font-30"
                >策略名称</u-col
              >
              <u-col span="4" textAlign="center" customClass="font-30"
                >日期</u-col
              >
              <u-col span="2" textAlign="center" customClass="font-30"
                >买入价</u-col
              >
              <u-col span="2" textAlign="center" customClass="font-30"
                >止损价</u-col
              >
            </u-row>
          </view>
          <view class="table__body page-p-lr">
            <u-list
              @scrolltolower="scrolltolower"
              height="calc(100vh - 552rpx)"
            >
              <u-list-item v-for="(row, index) in lsList" :key="index">
                <u-row gutter="10" customClass="m-tb-20">
                  <u-col
                    span="4"
                    textAlign="center"
                    customClass="font-28 font-bold"
                    >5日累计超升20%以上</u-col
                  >
                  <u-col
                    span="4"
                    textAlign="center"
                    customClass="flex-col flex-center font-28"
                  >
                    <text>2023-03-01</text>
                    <text>09:26:00</text>
                  </u-col>
                  <u-col span="2" textAlign="center" customClass="font-26"
                    >1655.50</u-col
                  >
                  <u-col span="2" textAlign="center" customClass="font-26"
                    >1655.44</u-col
                  >
                </u-row>
              </u-list-item>
            </u-list>
          </view>
        </view>
      </view>
    </view>
    <view class="bottom__focus flex-center color-theme">
      <text class="m-r-24">❤</text>
      <text class="font-30">关注推送</text>
    </view>
  </view>
</template>

<script>
import sheet from '@/components/sheet'
import navbar from '@/components/navbar'
export default {
  components: {
    sheet, navbar
  },
  data () {
    return {
      lsList: [1, 2, 3, 4, 5, 1, 1, 32, 13, 21, 3, 4213, 12, 32, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, , 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, , 2, 2, 2, 2, 2, 2, , 22, , 2, 2, 2]
    };
  },
  methods: {
    scrolltolower () {
      this.loadmore()
    },
    loadmore () {
      // for (let i = 0; i < 30; i++) {
      //   this.lsList.push({

      //   })
      // }
    }
  },
  onReady () {
    this.loadmore();
  },
  mounted () {

  }
}
</script>

<style lang="scss">
@import '@/static/variable.scss';
.body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.main {
  position: relative;
  &__background {
    width: 100%;
    height: 135rpx;
    position: absolute;
    left: 0;
    top: -26rpx;
    height: 130rpx;
    margin-top: -2rpx;
    background: linear-gradient(0deg, #f7f7f7, #1c62e2 90%);
  }
}
.table {
  background: #fff;
  height: calc(100vh - 400rpx);
  overflow: hidden;
  &__head {
    height: 84rpx;
    background: #fcf2e5;
  }
  &__body {
    width: calc(100% - $pagePadding * 2);
    // padding-bottom: 220rpx;
  }
}
.bottom {
  &__focus {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 92rpx;
    background: #e4edff;
  }
}
</style>
