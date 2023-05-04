<template>
  <view v-if="lsImg.length" class="image-upload bg">
    <view class="get-photo">
      <view class="get-photo__id-card-photo">
        <view
          v-if="lsImg.length === 1"
          class="get-photo__block get-photo__block--only border-radius"
          @tap.stop="fnView(lsImg[0], i)"
        >
          <view
            :style="{
              width: '100%',
              height: '100%',
              background: `url(${lsImg[0].url}) center center no-repeat`,
              backgroundSize: 'cover'
            }"
          ></view>
          <view v-if="item.type === 'video'" class="play flex-center">
            <text class="iconfont">&#xe6de;</text>
          </view>
        </view>

        <template v-else>
          <view
            v-for="(item, i) of lsImg"
            :key="item.url"
            class="get-photo__block border-radius"
            @tap.stop="fnView(item, i)"
            :class="[(i + 1) % 3 > 0 ? 'm-r-' + padding : '', `m-b-${padding}`]"
            :style="{ width: itemWidth + 'px', height: itemHeight + 'px' }"
          >
            <view
              :style="{
                width: itemWidth + 'px',
                height: itemHeight + 'px',
                background: `url(${item.url}) center center no-repeat`,
                backgroundSize: 'cover'
              }"
            ></view>
            <view v-if="item.type === 'video'" class="play flex-center">
              <text class="iconfont">&#xe6de;</text>
            </view>
          </view>
        </template>
      </view>
    </view>
  </view>
</template>
<script>
import { fnQueryDom } from '@/common/utils.js'
export default {
  components: {
  },
  props: {
    value: {
      type: Array,
      default: []
    },
    // 单位rpx
    padding: {
      type: Number,
      default: 8
    },
    // 一行几个。
    grid: {
      type: String | Number,
      default: 3
    },
    background: {
      type: Boolean,
      default: true
    },
    // 默认0即为宽高相等。单位upx
    imgHeight: {
      type: String | Number,
      default: 0
    },
    // 只读，只有查看，无法操作
    readOnly: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      itemWidth: 0,
      itemHeight: 0,
      lsImg: [],
      nVideoIndex: '', // 视频在数组的序号，有值就是有视频
      bIsInit: false
    };
  },
  computed: {
  },
  async mounted () {
    this.$nextTick(async () => {
      let o = await fnQueryDom('.image-upload', this, 100);
      // this.maxWidth = o[0].width - this.padding;
      const itemWidth = (o[0].width - (parseInt(this.grid) - 1) * (this.padding / 2)) / parseInt(this.grid) - 1;
      this.itemWidth = itemWidth;
      this.itemHeight = this.itemWidth;
      if (this.imgHeight > 0) {
        this.itemHeight = parseInt(uni.upx2px(this.imgHeight));
      }

      // 延迟显示修复图片加载慢导致的图片跳动问题 Tam 20230425
      // setTimeout(() => {
      //   this.bIsInit = true
      // }, 300)
    })
  },
  watch: {
    value: {
      handler (value) {
        // 回显转换成base64
        this.lsImg = [...value];
        // for (let item of this.lsImg) {
        this.lsImg.forEach((item, i) => {
          if (item.type === 'video') this.nVideoIndex = i;
        })
        // this.fnEmitValue();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    fnView (item, i) {
      if (item.type !== 'video') {
        let lsImgCopy = uni.$u.deepClone(this.lsImg);
        lsImgCopy = lsImgCopy.map(e => e.url)
        if (this.nVideoIndex !== '') lsImgCopy.splice(this.nVideoIndex, 1);
        uni.previewImage({
          urls: lsImgCopy,
          current: item.url,
          fail () {
            uni.$u.toast('预览图片失败')
          },
        })
      } else {
        // this.fnNavigateTo('video', { type: item.type, src: item.videoUrl, index: i, canDel: !this.readOnly ? 1 : '' })
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.bg {
  overflow: hidden;
  background: #fff;
  padding-bottom: 20rpx;
}

.get-photo {
  padding-top: 0;
  padding-bottom: 0;

  &__id-card-photo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    // justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    // &:nth-child(3n) {
    //   padding-right: 0;
    // }
  }

  &__block {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    overflow: hidden;

    &--only {
      width: 400rpx;
      height: 400rpx;
    }

    .play {
      position: absolute;
      left: calc(50% - 47rpx);
      top: calc(50% - 47rpx);
      z-index: 0;
      background: rgba(0, 0, 0, 0.4);
      // padding: 20rpx;
      width: 94rpx;
      height: 94rpx;
      border: 4rpx solid #fff;
      border-radius: 60rpx;
      text {
        font-size: 43rpx;
        color: #fff;
        padding-left: 10rpx;
      }
    }

    .remove {
      position: absolute;
      right: 4rpx;
      top: 4rpx;
      padding: 5rpx;
      background: red;
      color: #fff;
      border-radius: 60rpx;
    }

    .photo-block {
      position: relative;
    }

    .camera {
      position: absolute;
      width: 94rpx;
      height: 94rpx;
      left: calc(50% - 47rpx);
      top: calc(50% - 47rpx);
      z-index: 0;
    }

    .text-tip {
      margin-top: 12rpx;
      color: #333333;

      &.success {
        color: $uni-color-success;
      }
    }

    image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
