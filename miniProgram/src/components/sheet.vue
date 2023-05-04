<template>
  <view
    class="sheet p-tb-28 p-lr-24 m-t-20 m-b-13 border-radius relative"
    :style="{
      height: getHeight
    }"
    @click.stop="$emit('click')"
  >
    <slot></slot>
  </view>
</template>

<script>
export default {
  props: {
    height: {
      type: [String, Number],
      default: ''
    },
  },
  computed: {
    getHeight () {
      console.log(this.height)
      if (this.height) {
        return this.height - 56 + 'rpx';
      }
      return '';
    }
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
.sheet {
  background: #fff;
}
</style>
