<template>
  <view class="body">
    <u-sticky bgColor="#fff">
      <tabs
        :list="lsTabList"
        @change="fnChangeTabs"
      />
    </u-sticky>
    <view class="page-p-lr">
      <preferredCombination
        v-if="objInit.preferredCombination"
        v-show="sCurrentShow === 'preferredCombination'"
      />
      <strategyRecommendation
        v-if="objInit.strategyRecommendation"
        v-show="sCurrentShow === 'strategyRecommendation'"
      />
    </view>
  </view>
</template>

<script>
import preferredCombination from '@/pages/tabbar/preferredCombination';
import strategyRecommendation from '@/pages/tabbar/strategyRecommendation';
import tabs from '@/components/tabs';
export default {
  components: {
    preferredCombination,
    strategyRecommendation,
    tabs
  },
  data () {
    return {
      lsTabList: [
        { name: '优选组合' },
        { name: '策略推荐' },
        { name: '市场情绪图' }
      ],
      objInit: {
        preferredCombination: true,
        strategyRecommendation: false,
      },
      sCurrentShow: 'preferredCombination'
    };
  },
  methods: {
    fnChangeTabs (obj) {
      if (obj.index === 0) {
        this.sCurrentShow = 'preferredCombination';
        return;
      }
      if (obj.index === 1) {
        this.objInit.strategyRecommendation = true;
        this.sCurrentShow = 'strategyRecommendation';
        return;
      }
      if (obj.index === 2) {
        this.sCurrentShow = '';
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