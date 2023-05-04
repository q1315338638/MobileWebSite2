<template>
  <view class="body">
    <view class="font-30">
      <view class="flex-start">
        <text>解读地址</text>
        <u--input v-model="model1.userInfo.name"></u--input>
      </view>
      <view class="flex-col">
        <text>请把需要解读新闻或者提问内容直接输入到文本框</text>
        <u--input
          type="textarea"
          v-model="model1.userInfo.name"
        ></u--input>
      </view>
    </view>
  </view>
</template>

<script>
import sheet from '@/components/sheet'
export default {
  components: {
    sheet
  },
  data () {
    return {
      rules: {
        'userInfo.name': {
          type: 'string',
          required: true,
          message: '请填写姓名',
          trigger: ['blur', 'change']
        },
        'userInfo.sex': {
          type: 'string',
          max: 1,
          required: true,
          message: '请选择男或女',
          trigger: ['blur', 'change']
        },
      },
    };
  },
  methods: {
  },
  mounted () {

  },
  onReady () {
    //如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
    this.$refs.form.setRules(this.rules)
  },
};
</script>
<style lang="scss">
.body {
  overflow: hidden;
}
</style>