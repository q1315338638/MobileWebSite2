<script>
	export default {
		onLaunch() {
		  this.checkUpdataWxapp()
		},
		onShow() {},
		onHide() {
		  console.log('App Hide')
		},
		methods: {
		  checkUpdataWxapp() {
		    const updateManager = uni.getUpdateManager()
		    updateManager.onUpdateReady(() => {
		      uni.showModal({
		        title: '更新提示',
		        content: '新版本已经准备好，重启应用以更新',
		        showCancel: false,
		        success: res => {
		          if (res.cancel) return
		          updateManager.applyUpdate()
		        },
		      })
		    })
		  },
		},
		computed: {},
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
	@import "@/static/common.scss";
	/*每个页面公共css */
</style>
