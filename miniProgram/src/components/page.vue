<template>
	<!-- 根组件 -->
	<view class="page">
		<!-- <u-navbar></u-navbar> -->
		<slot></slot>
		<!-- <poup /> -->
	</view>
</template>

<script>
// import poup from '@/components/poup';
export default {
	props: {
		hidden: {
			type: Boolean,
			default: false
		},
	},
	components: {
		// poup
	},
	data() {
		return {
			showUpdate: false, //显示升级弹窗
			showClip: false, //显示剪贴栏弹窗
			clipContent: '', //剪贴栏弹窗内容
			isWaterMark: false //显示水印
		};
	},

	mounted() {
		// 显示剪贴栏弹窗
		// uni.$off('showClipMode');
		// uni.$on('showClipMode', () => {
		// 	this.getClipboardData();
		// });
		// 显示升级弹窗
		// uni.$off('showUpdate');
		// uni.$on('showUpdate', () => {
		// 	this.showUpdate = true;
		// });
	},

	methods: {
		// 水印
		waterMark() {
			this.isWaterMark = true;
		},
		// 水印
		// 关闭升级弹窗
		closeShowUpdate() {
			this.showUpdate = false;
		},
		// 关闭升级弹窗
		// 关闭剪贴栏弹窗
		closeShowClipModel() {
			this.setClipboardData();
			this.showClip = false;
		},
		// 关闭剪贴栏弹窗

		// 复制测试
		setClipboardData(data = ' ') {
			uni.hideToast();
			uni.setClipboardData({
				data,
				success: data => {},
				fail: err => {}
			});
		},
		// 获取系统剪贴板内容，不点击复制按钮的话，也可以复制淘宝app商品的分享链接，然后返回app，就会有弹窗显示
		getClipboardData() {
			uni.getClipboardData({
				success: res => {
					if (res.data.indexOf('τa0寳') > -1) {
						this.showClip = true;
						this.clipContent = res.data;
					}
				},
				fail: err => {
					console.log(err);
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
	.page {
		width: 100vw;
		height: 100vh;
		padding: 15px 15px 0 15px;
		display: flex;
		flex-shrink: 0;
		flex-grow: 0;
		flex-basis: auto;
		align-items: stretch;
		align-content: flex-start;
	}
</style>
