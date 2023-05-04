<template>
  <u-navbar
    :title="title"
    :autoBack="autoBack"
    :placeholder="placeholder"
    :bgColor="bgColor"
    :leftIconColor="leftIconColor"
    :titleStyle="titleStyle"
  >
  </u-navbar>
</template>

<script>
// import poup from '@/components/poup';
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    autoBack: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: '#1c62e2'
    },
    leftIconColor: {
      type: String,
      default: '#fff'
    },
    titleStyle: {
      type: String,
      default: 'color: #fff;'
    },
  },
  components: {
    // poup
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
