<template>
  <u-tabbar
    :value="nSelect"
    @change="fnSelectChange"
    fixed
    placeholder
    activeColor="#d81e06"
    :safeAreaInsetBottom="false"
  >
    <u-tabbar-item v-for="item of lsTabbar" :key="item.text" :text="item.text">
      <image
        class="tabbar__img"
        slot="active-icon"
        :src="item.activeSrc"
      ></image>
      <image
        class="tabbar__img"
        slot="inactive-icon"
        :src="item.inactive"
      ></image>
    </u-tabbar-item>
  </u-tabbar>
</template>

<script>
// import poup from '@/components/poup';
export default {
  data () {
    return {
      nSelect: 0,
      lsTabbar: [
        { text: '首页', activeSrc: "https://cdn.uviewui.com/uview/common/bell-selected.png", inactive: 'https://cdn.uviewui.com/uview/common/bell.png' },
        { text: '资讯', activeSrc: "https://cdn.uviewui.com/uview/common/bell-selected.png", inactive: 'https://cdn.uviewui.com/uview/common/bell.png' },
        { text: '私圈', activeSrc: "https://cdn.uviewui.com/uview/common/bell-selected.png", inactive: 'https://cdn.uviewui.com/uview/common/bell.png' },
        { text: '我的', activeSrc: "https://cdn.uviewui.com/uview/common/bell-selected.png", inactive: 'https://cdn.uviewui.com/uview/common/bell.png' },
      ]
    };
  },

  mounted () {
  },

  methods: {
    fnSelectChange (nTabbarNo) {
      this.nSelect = nTabbarNo;
      this.$emit('change', this.nSelect)
    }
  }
};
</script>

<style scoped lang="scss">
</style>
