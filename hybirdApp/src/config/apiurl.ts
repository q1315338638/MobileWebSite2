
/**
 * @license PMS v1.0
 * (c) 2018 浦雀, Inc. http://www.puque-tech.com/#/
 * The author: xueguanghan
 * create time:18-05-10
 * last modify 无
 * modify name:无
 */
// export const onLineBookApi: string = "http://192.168.2.154:8012/api/";
// export const onLineBookApiNew: string = "http://192.168.2.154:8012/";
export const onLineBookApi: string = "http://183.6.104.189:9011/api/";
export const onLineBookApiNew: string = "http://183.6.104.189:9011/";

export enum EApi {
	getChainRoomTypeAttInfo = 52,
	getFeatures = 51,
	getCompanyMarkdownInfo = 50,
	getFolioPayTrans = 49,
	onLinePayForWeChat = 48,
	onLinePayForStoreBalance = 47,
	onLinePayForDisCount = 46,
	onLinePayForMidtrans = 45,
	bindUserWithOpenID = 44,
	getOpenID = 43,
	getLanguage = 42,
	setLanguage = 41,
	GetChainRoomTypeRemark = 40,
	getChainRoomService = 39,
	setTheme = 38,
	getTheme = 37,
	getCompanyInfo = 36,
	getCommentResult = 35,
	bookIn = 34,
	uploadMebHeadImg = 33,
	getMebHead = 32,
	getHotelComment = 31,
	getRoomTypeDetail = 30,
	calculatRoomRate = 29,
	getMebRoomRateType = 28,
	delMebFolio = 27,
	tryAddItem = 26,
	getJSONResource = 25,
	getHotel = 24,
	getPresentStoreValueSummary = 23,
	queryPresentStoreValueList = 22,
	queryStoreValueList = 21,
	getMemberUsedPoint = 20,
	getMemberGainPoint = 19,
	getStoreValueSummary = 18,
	getPointGatherInfo = 17,
	getChain = 16,
	commentHotel = 15,
	orderCancle = 14,
	loginOff = 13,
	getOrders = 12,
	getOrder = 11,
	editMebInfo = 10,
	getCoupons = 9,
	getCity = 8,
	recoverLogin = 7,
	resetPwdBySMSCode = 6,
	smsLogin = 5,
	getThemeConfig = 4,
	register = 3,
	sendSMSCode = 2,
	login = 1
}
const lsEApi = [
	{ api: onLineBookApi + "book/GetChainRoomTypeAttInfo", key: EApi.getChainRoomTypeAttInfo, remark: "获取某个酒店房型详细信息" },
	{ api: onLineBookApi + "CompanyInfo/GetFeatrues", key: EApi.getFeatures, remark: "获取功能列表" },
	{ api: onLineBookApi + "CompanyInfo/GetCompanyMarkdownInfo", key: EApi.getCompanyMarkdownInfo, remark: "获取公司标记信息" },
	{ api: onLineBookApi + "Account/GetFolioPayTrans", key: EApi.getFolioPayTrans, remark: "获取支付记录 如果有优惠券使用记录 不能再使用优惠券" },
	{ api: onLineBookApi + "Account/GetOpenID", key: EApi.getOpenID, remark: "获取会员OpenID" },
	{ api: onLineBookApi + "Account/BindUserWithOpenID", key: EApi.bindUserWithOpenID, remark: "绑定会员与openID(消息推送会用到)" },
	{ api: onLineBookApi + "Account/OnLinePayForMidtrans", key: EApi.onLinePayForMidtrans, remark: "在线支付" },
	{ api: onLineBookApi + "Account/OnLinePayForDisCount", key: EApi.onLinePayForDisCount, remark: "优惠券支付" },
	{ api: onLineBookApi + "Account/OnLinePayForStoreBalance", key: EApi.onLinePayForStoreBalance, remark: "储值支付" },
	{ api: onLineBookApi + "Account/OnLinePayForWeChat", key: EApi.onLinePayForWeChat, remark: "微信支付" },
	{ api: onLineBookApi + "CompanyInfo/GetCompanyInfo", key: EApi.getCompanyInfo, remark: "获取公司简介" },
	{ api: onLineBookApi + "I18N/GetTheme", key: EApi.getTheme, remark: "获取当前主题" },
	{ api: onLineBookApi + "I18N/SetTheme", key: EApi.setTheme, remark: "设置当前主题" },
	{ api: onLineBookApi + "Account/GetCommentResult", key: EApi.getCommentResult, remark: "查询订单是否已经评论过" },
	{ api: onLineBookApi + "Book/DelMebFolio", key: EApi.delMebFolio, remark: "删除订单" },
	{ api: onLineBookApi + "Account/GetPresentStoreValueSummary", key: EApi.getPresentStoreValueSummary, remark: "获取赠送储值信息" },
	{ api: onLineBookApi + "Account/QueryPresentStoreValueList", key: EApi.queryPresentStoreValueList, remark: "获取储值赠送列表" },
	{ api: onLineBookApi + "Account/QueryStoreValueList", key: EApi.queryStoreValueList, remark: "获取储值使用列表" },
	{ api: onLineBookApi + "Account/GetMemberUsedPoint", key: EApi.getMemberUsedPoint, remark: "获取积分使用列表" },
	{ api: onLineBookApi + "Account/GetMemberGainPoint", key: EApi.getMemberGainPoint, remark: "获取积分赠送列表" },
	{ api: onLineBookApi + "Account/GetPointGatherInfo", key: EApi.getPointGatherInfo, remark: "获取积分信息" },
	{ api: onLineBookApi + "Account/GetStoreValueSummary", key: EApi.getStoreValueSummary, remark: "获取储值信息" },
	{ api: onLineBookApi + "Account/CommentHotel", key: EApi.commentHotel, remark: "评价订单" },
	{ api: onLineBookApi + "Account/OrderCancle", key: EApi.orderCancle, remark: "取消订单" },
	{ api: onLineBookApi + "Account/LoginOff", key: EApi.loginOff, remark: "退出登录" },
	{ api: onLineBookApi + "Account/GetOrders", key: EApi.getOrders, remark: "查询订单列表" },
	{ api: onLineBookApi + "Account/GetOrder", key: EApi.getOrder, remark: "查询单条订单" },
	{ api: onLineBookApi + "Account/EditMebInfo", key: EApi.editMebInfo, remark: "更新会员基本信息" },
	{ api: onLineBookApi + "Account/GetCoupons", key: EApi.getCoupons, remark: "获取优惠券列表" },
	{ api: onLineBookApi + "Account/RecoverLogin", key: EApi.recoverLogin, remark: "恢复登录" },
	{ api: onLineBookApi + "Account/ResetPwdBySMSCode", key: EApi.resetPwdBySMSCode, remark: "忘记密码" },
	{ api: onLineBookApi + "Account/SMSLogin", key: EApi.smsLogin, remark: "短信登录" },
	{ api: "../assets/theme/theme.json", key: EApi.getThemeConfig, remark: "主题包" },
	{ api: onLineBookApi + "Account/Register", key: EApi.register, remark: "会员注册" },
	{ api: onLineBookApi + "Book/SendSMSCode", key: EApi.sendSMSCode, remark: "发送验证码" },
	{ api: onLineBookApi + "Account/Login", key: EApi.login, remark: "登录" },
	{ api: onLineBookApi + "Book/GetCity", key: EApi.getCity, remark: "城市" },
	{ api: onLineBookApi + "Book/GetChain", key: EApi.getChain, remark: "酒店列表" },
	{ api: onLineBookApi + "Book/GetHotel", key: EApi.getHotel, remark: "酒店详情" },
	{ api: onLineBookApi + "I18N/getJSONResource", key: EApi.getJSONResource, remark: '获取国际化文字资源' },
	{ api: onLineBookApi + "I18N/SetLanguage", key: EApi.setLanguage, remark: '设置当前语言环境' },
	{ api: onLineBookApi + "I18N/GetLanguage", key: EApi.getLanguage, remark: '获取当前语言环境' },
	{ api: onLineBookApi + "I18N/TryAddItem", key: EApi.tryAddItem, remark: '尝试添加一项语言资源到现有资源文件中' },
	{ api: onLineBookApi + "Book/GetMebRoomRateType", key: EApi.getMebRoomRateType, remark: "获取会员类型对应的房价类型 当用户登入时 用户类型优先 否则按照默认类型返回" },
	{ api: onLineBookApi + "Book/CalculatRoomRate", key: EApi.calculatRoomRate, remark: "根据会员类型(后台处理)房间类型(传参)酒店ID 计算会员享受的房间单价" },
	{ api: onLineBookApi + "Book/GetRoomTypeDetail", key: EApi.getRoomTypeDetail, remark: "获取酒店房型列表以及详细介绍" },
	{ api: onLineBookApi + "Book/GetHotelComment", key: EApi.getHotelComment, remark: "获取酒店的评论数据" },
	{ api: onLineBookApiNew + "Util/GetMebHead", key: EApi.getMebHead, remark: '获取用户头像' },
	{ api: onLineBookApiNew + "Util/UploadMebHeadImg", key: EApi.uploadMebHeadImg, remark: '上传用户头像' },
	{ api: onLineBookApi + "Book/BookIn", key: EApi.bookIn, remark: "[JSONParamerBinder]BookService.AddPersonBookFolio objBookFolio, [JSONParamerBinder]List<BookService.AddGuestFolio> lsAddGuestFolio 办理入住" },
	{ api: onLineBookApi + "Book/GetChainRoomService", key: EApi.getChainRoomService, remark: '获取酒店房间服务' },
	{ api: onLineBookApi + "Book/GetChainRoomTypeRemark", key: EApi.GetChainRoomTypeRemark, remark: '获取指定酒店房型信息' },
]
export function api(key: EApi): string {
	var configModel = lsEApi.filter(u => u.key == key);
	if (configModel.length > 1)
		throw '找到两个相同key的配置项[' + key + ']';
	if (configModel.length == 0)
		throw '未找到配置项' + key;
	if (configModel[0].api == null || configModel[0].api == "")
		throw '找到的配置项未配置具体值';
	return configModel[0].api;

}



