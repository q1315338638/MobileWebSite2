<template>
  <!-- 查看策略组合 -->
  <view
    class="body"
    v-show="bShowList"
  >
    <navbar title="上穿平台策略10天" />
    <tabs
      :list="lsTabList"
      @change="fnChangeTabs"
    />
    <stockPortfolio
      v-if="objInit.stockPortfolio"
      v-show="sCurrentShow === 'stockPortfolio'"
    />
    <realOfferOperation
      v-if="objInit.realOfferOperation"
      v-show="sCurrentShow === 'realOfferOperation'"
    />
  </view>
</template>

<script>
import sheet from '@/components/sheet'
import navbar from '@/components/navbar'
import stockPortfolio from '@/pages/tabbar/stockPortfolio'
import realOfferOperation from '@/pages/tabbar/realOfferOperation'
import tabs from '@/components/tabs';
export default {
  components: {
    sheet, navbar, stockPortfolio, realOfferOperation, tabs
  },
  data () {
    return {
      lsTabList: [
        { name: '个股组合' },
        { name: '持仓实盘' }
      ],
      lsList: [1, 2, 3, 4],
      lsImgList: [
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
      ],
      objInit: {
        stockPortfolio: true,
        realOfferOperation: false
      },
      bShowList: false,
      sCurrentShow: 'stockPortfolio'
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
    fnChangeTabs (obj) {
      if (obj.index === 0) {
        this.sCurrentShow = 'stockPortfolio';
        return;
      }
      if (obj.index === 1) {
        this.objInit.realOfferOperation = true;
        this.sCurrentShow = 'realOfferOperation';
        return;
      }
    }
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
