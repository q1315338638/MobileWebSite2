<template>
  <!-- 持仓实盘 -->
  <view class="body" v-show="bShowList">
    <view class="list">
      <u-list
        @scrolltolower="fnScrolltolower"
        class="list__item"
        height="calc(100vh - 230rpx)"
      >
        <u-list-item v-for="(row, index) in lsList" :key="index">
          <sheet>
            <view class="flex-between">
              <view class="flex-start">
                <u-avatar
                  src="https://cdn.uviewui.com/uview/album/1.jpg"
                  size="72rpx"
                ></u-avatar>
                <view class="flex-start flex-col m-l-16">
                  <text class="font-28 font-bold">只会小伙伴啊啊</text>
                  <text class="font-24 color-type-title m-t-6">3小时前</text>
                </view>
              </view>
              <view
                class="list__type border-radius flex-center font-28"
                :class="{
                  'background-red': index % 2 === 0,
                  'background-green': index % 2 === 1
                }"
                >卖</view
              >
            </view>
            <view class="list__title font-bold font-32 m-t-24"
              >白酒股表现活跃，超预期！茅台一季度数据出炉白酒股表现活跃，超预期！茅台一季度数据出炉</view
            >
            <view class="list__info u-line-2 font-30 m-t-16"
              >​4月17日，白酒股表现活跃，青海春天、迎驾贡酒等涨幅居前。消息上，16日晚间，贵州茅台披露一大石街道卡时间段</view
            >
            <!-- 图片盒子 -->
            <view class="list__img m-t-24">
              <imageList :value="index % 2 ? lsImage : lsImage2" />
            </view>
            <!-- 点赞 -->
            <view class="m-t-12 flex-start font-bold font-24">
              <view class="m-r-60">
                <text class="m-r-12">❤</text>
                <text>2556</text>
              </view>
              <view>
                <text class="m-r-12">❤</text>
                <text>3582</text>
              </view>
            </view>
          </sheet>
        </u-list-item>
      </u-list>
    </view>
  </view>
</template>

<script>
import sheet from '@/components/sheet'
import navbar from '@/components/navbar'
import imageList from '@/components/imageList'
export default {
  components: {
    sheet, navbar, imageList
  },
  data () {
    return {
      lsList: [1, 2, 3, 4],
      lsImage: [
        { url: 'https://cdn.uviewui.com/uview/swiper/1.jpg' },
        { url: 'https://cdn.uviewui.com/uview/resources/4565165154.jpg' },
        { url: 'https://cdn.uviewui.com/uview/resources/3c56cbc6216b47db61e37090fdb6619.jpg' },
        { url: 'https://cdn.uviewui.com/uview/resources/codeFun.jpg' },
        { url: 'https://himg.bdimg.com/sys/portrait/item/wise.1.c05fe079.uaDY8Fh-VwktuYzGuJfxEQ.jpg?time=5330&tieba_portrait_time=5330' },
        { url: 'https://himg.bdimg.com/sys/portrait/item/wise.1.b7e3ede3.Rbr6IfkicDrMH56RWeExrQ.jpg?time=1182&tieba_portrait_time=1182' },
        { url: 'https://himg.bdimg.com/sys/portrait/item/wise.1.4e28268.4MkBtVSIvVUNDdUFGJen9w.jpg?time=6743&tieba_portrait_time=6743' },
      ],
      lsImage2: [{ url: 'https://cdn.uviewui.com/uview/swiper/1.jpg' }],
      bShowList: false,
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
  height: calc(100vh - 196rpx);
  overflow: hidden;
  &__type {
    width: 48rpx;
    height: 48rpx;
    color: #fff;
  }
  &__info {
    line-height: 50rpx;
  }
}
</style>
