<template>
  <u-tabs
    :list="list"
    :scrollable="scrollable"
    :lineWidth="lineWidth"
    :lineHeight="lineHeight"
    :lineColor="lineColor"
    :activeStyle="activeStyle"
    @change="(val) => $emit('change', val)"
  ></u-tabs>
</template>

<script>
// import poup from '@/components/poup';
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    lineWidth: {
      type: String,
      default: '120rpx'
    },
    lineHeight: {
      type: String,
      default: '6'
    },
    lineColor: {
      type: String,
      default: '#1C62E2'
    },
    activeStyle: {
      type: Object,
      default: () => ({
        color: '#1C62E2',
        transform: 'scale(1.2)'
      })
    },
  },
  data () {
    return {
    };
  },

  mounted () {
  },

  methods: {
  }
};
</script>

<style scoped lang="scss">
</style>
