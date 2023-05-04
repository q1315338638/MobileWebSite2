<template>
  <!-- 个股组合 -->
  <view class="body" v-show="bShowList">
    <view class="page-p-lr list">
      <sheet>
        <u-list
          @scrolltolower="fnScrolltolower"
          class="list__item"
          height="calc(100vh - 798rpx)"
        >
          <u-row class="list__detail" gutter="10">
            <u-col span="4">
              <text class="list__title font-24 color-type-title">简称</text>
            </u-col>
            <u-col span="4" customClass="flex-col">
              <text class="list__title font-24 color-type-title"
                >2022年第四季</text
              >
              <text class="list__title font-24 color-type-title"
                >净利润(万元)</text
              >
            </u-col>
            <u-col span="4" customClass="flex-col">
              <text class="list__title font-24 color-type-title"
                >2022年第四季</text
              >
              <text class="list__title font-24 color-type-title"
                >净利润同比(%)</text
              >
            </u-col>
          </u-row>
          <u-list-item v-for="(row, index) in lsList" :key="index">
            <view class="u-border-bottom p-tb-20">
              <u-row class="list__detail" gutter="10">
                <u-col span="4" customClass="flex-col">
                  <text class="font-28 font-bold">深圳华强</text>
                  <text class="font-24 color-type-title">000062</text>
                </u-col>
                <u-col span="4">
                  <text class="font-28 font-bold">28496.89</text>
                </u-col>
                <u-col span="4">
                  <text class="font-28 color-red font-bold">46.28</text>
                </u-col>
              </u-row>
            </view>
          </u-list-item>
        </u-list>
      </sheet>
    </view>
    <u-swiper
      :list="lsImgList"
      height="422rpx"
      @change="(e) => (current = e.current)"
    >
      <view slot="indicator" class="indicator">
        <view
          class="indicator__dot"
          v-for="(item, index) in lsImgList"
          :key="index"
          :class="[index === current && 'indicator__dot--active']"
        >
        </view>
      </view>
    </u-swiper>
    <view class="bottom__button">
      <u-row class="list__detail" gutter="10" height="100%">
        <u-col
          span="6"
          customClass="bottom__focus flex-center flex-unset color-theme"
          customStyle="height: 100%;"
        >
          <text class="m-r-20">❤</text>
          <text class="font-30">关注推送</text>
        </u-col>
        <u-col
          span="6"
          customClass="bottom__follow flex-center flex-unset color-theme"
          height="100%"
          customStyle="height: 100%;"
        >
          <text class="m-r-20">❤</text>
          <text class="font-30">跟投组合</text>
        </u-col>
      </u-row>
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
      lsList: [1, 2, 3, 4],
      lsImgList: [
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
      ],
      bShowList: false,
      sCurrentShow: ''
    };
  },
  methods: {
    fnScrolltolower () {
      this.fnLoadmore()
    },
    fnLoadmore () {
      for (let i = 0; i < 30; i++) {
        this.lsList.push({

        })
      }
    },
  },
  onReady () {
    this.fnLoadmore();
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
.body {
  height: 100vh;
  overflow: hidden;
}
.list {
  height: calc(100vh - 746rpx);
  margin-bottom: 20rpx;
  overflow: hidden;
}
.indicator {
  @include flex(row);
  justify-content: center;

  &__dot {
    height: 6px;
    width: 6px;
    border-radius: 100px;
    background-color: rgba(255, 255, 255, 0.35);
    margin: 0 5px;
    transition: background-color 0.3s;

    &--active {
      background-color: #ffffff;
    }
  }
}

.indicator-num {
  padding: 2px 0;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 100px;
  width: 35px;
  @include flex;
  justify-content: center;

  &__text {
    color: #ffffff;
    font-size: 12px;
  }
}
.bottom {
  &__button {
    height: 92rpx;
    margin-top: -4rpx;
  }
  &__focus {
    background: #e4edff;
    // background: #000;
  }
}
</style>
