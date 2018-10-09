"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license PMS v1.0
 * (c) 2018 浦雀, Inc. http://www.puque-tech.com/#/
 * The author: xueguanghan
 * create time:18-05-10
 * last modify 无
 * modify name:无
 */
exports.onLineBookApi = "http://192.168.2.154:8012/api/";
exports.onLineBookApiNew = "http://192.168.2.154:8012/";
//export const onLineBookApi: string = "http://183.6.104.189:9011/api/";
//export const onLineBookApiNew: string = "http://183.6.104.189:9011/";
var EApi;
(function (EApi) {
    EApi[EApi["getFeatures"] = 51] = "getFeatures";
    EApi[EApi["getCompanyMarkdownInfo"] = 50] = "getCompanyMarkdownInfo";
    EApi[EApi["getFolioPayTrans"] = 49] = "getFolioPayTrans";
    EApi[EApi["onLinePayForWeChat"] = 48] = "onLinePayForWeChat";
    EApi[EApi["onLinePayForStoreBalance"] = 47] = "onLinePayForStoreBalance";
    EApi[EApi["onLinePayForDisCount"] = 46] = "onLinePayForDisCount";
    EApi[EApi["onLinePayForMidtrans"] = 45] = "onLinePayForMidtrans";
    EApi[EApi["bindUserWithOpenID"] = 44] = "bindUserWithOpenID";
    EApi[EApi["getOpenID"] = 43] = "getOpenID";
    EApi[EApi["getLanguage"] = 42] = "getLanguage";
    EApi[EApi["setLanguage"] = 41] = "setLanguage";
    EApi[EApi["GetChainRoomTypeRemark"] = 40] = "GetChainRoomTypeRemark";
    EApi[EApi["getChainRoomService"] = 39] = "getChainRoomService";
    EApi[EApi["setTheme"] = 38] = "setTheme";
    EApi[EApi["getTheme"] = 37] = "getTheme";
    EApi[EApi["getCompanyInfo"] = 36] = "getCompanyInfo";
    EApi[EApi["getCommentResult"] = 35] = "getCommentResult";
    EApi[EApi["bookIn"] = 34] = "bookIn";
    EApi[EApi["uploadMebHeadImg"] = 33] = "uploadMebHeadImg";
    EApi[EApi["getMebHead"] = 32] = "getMebHead";
    EApi[EApi["getHotelComment"] = 31] = "getHotelComment";
    EApi[EApi["getRoomTypeDetail"] = 30] = "getRoomTypeDetail";
    EApi[EApi["calculatRoomRate"] = 29] = "calculatRoomRate";
    EApi[EApi["getMebRoomRateType"] = 28] = "getMebRoomRateType";
    EApi[EApi["delMebFolio"] = 27] = "delMebFolio";
    EApi[EApi["tryAddItem"] = 26] = "tryAddItem";
    EApi[EApi["getJSONResource"] = 25] = "getJSONResource";
    EApi[EApi["getHotel"] = 24] = "getHotel";
    EApi[EApi["getPresentStoreValueSummary"] = 23] = "getPresentStoreValueSummary";
    EApi[EApi["queryPresentStoreValueList"] = 22] = "queryPresentStoreValueList";
    EApi[EApi["queryStoreValueList"] = 21] = "queryStoreValueList";
    EApi[EApi["getMemberUsedPoint"] = 20] = "getMemberUsedPoint";
    EApi[EApi["getMemberGainPoint"] = 19] = "getMemberGainPoint";
    EApi[EApi["getStoreValueSummary"] = 18] = "getStoreValueSummary";
    EApi[EApi["getPointGatherInfo"] = 17] = "getPointGatherInfo";
    EApi[EApi["getChain"] = 16] = "getChain";
    EApi[EApi["commentHotel"] = 15] = "commentHotel";
    EApi[EApi["orderCancle"] = 14] = "orderCancle";
    EApi[EApi["loginOff"] = 13] = "loginOff";
    EApi[EApi["getOrders"] = 12] = "getOrders";
    EApi[EApi["getOrder"] = 11] = "getOrder";
    EApi[EApi["editMebInfo"] = 10] = "editMebInfo";
    EApi[EApi["getCoupons"] = 9] = "getCoupons";
    EApi[EApi["getCity"] = 8] = "getCity";
    EApi[EApi["recoverLogin"] = 7] = "recoverLogin";
    EApi[EApi["resetPwdBySMSCode"] = 6] = "resetPwdBySMSCode";
    EApi[EApi["smsLogin"] = 5] = "smsLogin";
    EApi[EApi["getThemeConfig"] = 4] = "getThemeConfig";
    EApi[EApi["register"] = 3] = "register";
    EApi[EApi["sendSMSCode"] = 2] = "sendSMSCode";
    EApi[EApi["login"] = 1] = "login";
})(EApi = exports.EApi || (exports.EApi = {}));
var lsEApi = [
    { api: exports.onLineBookApi + "CompanyInfo/GetFeatures", key: EApi.getFeatures, remark: "获取功能列表" },
    { api: exports.onLineBookApi + "CompanyInfo/GetCompanyMarkdownInfo", key: EApi.getCompanyMarkdownInfo, remark: "获取公司标记信息" },
    { api: exports.onLineBookApi + "Account/GetFolioPayTrans", key: EApi.getFolioPayTrans, remark: "获取支付记录 如果有优惠券使用记录 不能再使用优惠券" },
    { api: exports.onLineBookApi + "Account/GetOpenID", key: EApi.getOpenID, remark: "获取会员OpenID" },
    { api: exports.onLineBookApi + "Account/BindUserWithOpenID", key: EApi.bindUserWithOpenID, remark: "绑定会员与openID(消息推送会用到)" },
    { api: exports.onLineBookApi + "Account/OnLinePayForMidtrans", key: EApi.onLinePayForMidtrans, remark: "在线支付" },
    { api: exports.onLineBookApi + "Account/OnLinePayForDisCount", key: EApi.onLinePayForDisCount, remark: "优惠券支付" },
    { api: exports.onLineBookApi + "Account/OnLinePayForStoreBalance", key: EApi.onLinePayForStoreBalance, remark: "储值支付" },
    { api: exports.onLineBookApi + "Account/OnLinePayForWeChat", key: EApi.onLinePayForWeChat, remark: "微信支付" },
    { api: exports.onLineBookApi + "CompanyInfo/GetCompanyInfo", key: EApi.getCompanyInfo, remark: "获取公司简介" },
    { api: exports.onLineBookApi + "I18N/GetTheme", key: EApi.getTheme, remark: "获取当前主题" },
    { api: exports.onLineBookApi + "I18N/SetTheme", key: EApi.setTheme, remark: "设置当前主题" },
    { api: exports.onLineBookApi + "Account/GetCommentResult", key: EApi.getCommentResult, remark: "查询订单是否已经评论过" },
    { api: exports.onLineBookApi + "Book/DelMebFolio", key: EApi.delMebFolio, remark: "删除订单" },
    { api: exports.onLineBookApi + "Account/GetPresentStoreValueSummary", key: EApi.getPresentStoreValueSummary, remark: "获取赠送储值信息" },
    { api: exports.onLineBookApi + "Account/QueryPresentStoreValueList", key: EApi.queryPresentStoreValueList, remark: "获取储值赠送列表" },
    { api: exports.onLineBookApi + "Account/QueryStoreValueList", key: EApi.queryStoreValueList, remark: "获取储值使用列表" },
    { api: exports.onLineBookApi + "Account/GetMemberUsedPoint", key: EApi.getMemberUsedPoint, remark: "获取积分使用列表" },
    { api: exports.onLineBookApi + "Account/GetMemberGainPoint", key: EApi.getMemberGainPoint, remark: "获取积分赠送列表" },
    { api: exports.onLineBookApi + "Account/GetPointGatherInfo", key: EApi.getPointGatherInfo, remark: "获取积分信息" },
    { api: exports.onLineBookApi + "Account/GetStoreValueSummary", key: EApi.getStoreValueSummary, remark: "获取储值信息" },
    { api: exports.onLineBookApi + "Account/CommentHotel", key: EApi.commentHotel, remark: "评价订单" },
    { api: exports.onLineBookApi + "Account/OrderCancle", key: EApi.orderCancle, remark: "取消订单" },
    { api: exports.onLineBookApi + "Account/LoginOff", key: EApi.loginOff, remark: "退出登录" },
    { api: exports.onLineBookApi + "Account/GetOrders", key: EApi.getOrders, remark: "查询订单列表" },
    { api: exports.onLineBookApi + "Account/GetOrder", key: EApi.getOrder, remark: "查询单条订单" },
    { api: exports.onLineBookApi + "Account/EditMebInfo", key: EApi.editMebInfo, remark: "更新会员基本信息" },
    { api: exports.onLineBookApi + "Account/GetCoupons", key: EApi.getCoupons, remark: "获取优惠券列表" },
    { api: exports.onLineBookApi + "Account/RecoverLogin", key: EApi.recoverLogin, remark: "恢复登录" },
    { api: exports.onLineBookApi + "Account/ResetPwdBySMSCode", key: EApi.resetPwdBySMSCode, remark: "忘记密码" },
    { api: exports.onLineBookApi + "Account/SMSLogin", key: EApi.smsLogin, remark: "短信登录" },
    { api: "../assets/theme/theme.json", key: EApi.getThemeConfig, remark: "主题包" },
    { api: exports.onLineBookApi + "Account/Register", key: EApi.register, remark: "会员注册" },
    { api: exports.onLineBookApi + "Book/SendSMSCode", key: EApi.sendSMSCode, remark: "发送验证码" },
    { api: exports.onLineBookApi + "Account/Login", key: EApi.login, remark: "登录" },
    { api: exports.onLineBookApi + "Book/GetCity", key: EApi.getCity, remark: "城市" },
    { api: exports.onLineBookApi + "Book/GetChain", key: EApi.getChain, remark: "酒店列表" },
    { api: exports.onLineBookApi + "Book/GetHotel", key: EApi.getHotel, remark: "酒店详情" },
    { api: exports.onLineBookApi + "I18N/getJSONResource", key: EApi.getJSONResource, remark: '获取国际化文字资源' },
    { api: exports.onLineBookApi + "I18N/SetLanguage", key: EApi.setLanguage, remark: '设置当前语言环境' },
    { api: exports.onLineBookApi + "I18N/GetLanguage", key: EApi.getLanguage, remark: '获取当前语言环境' },
    { api: exports.onLineBookApi + "I18N/TryAddItem", key: EApi.tryAddItem, remark: '尝试添加一项语言资源到现有资源文件中' },
    { api: exports.onLineBookApi + "Book/GetMebRoomRateType", key: EApi.getMebRoomRateType, remark: "获取会员类型对应的房价类型 当用户登入时 用户类型优先 否则按照默认类型返回" },
    { api: exports.onLineBookApi + "Book/CalculatRoomRate", key: EApi.calculatRoomRate, remark: "根据会员类型(后台处理)房间类型(传参)酒店ID 计算会员享受的房间单价" },
    { api: exports.onLineBookApi + "Book/GetRoomTypeDetail", key: EApi.getRoomTypeDetail, remark: "获取酒店房型列表以及详细介绍" },
    { api: exports.onLineBookApi + "Book/GetHotelComment", key: EApi.getHotelComment, remark: "获取酒店的评论数据" },
    { api: exports.onLineBookApiNew + "Util/GetMebHead", key: EApi.getMebHead, remark: '获取用户头像' },
    { api: exports.onLineBookApiNew + "Util/UploadMebHeadImg", key: EApi.uploadMebHeadImg, remark: '上传用户头像' },
    { api: exports.onLineBookApi + "Book/BookIn", key: EApi.bookIn, remark: "[JSONParamerBinder]BookService.AddPersonBookFolio objBookFolio, [JSONParamerBinder]List<BookService.AddGuestFolio> lsAddGuestFolio 办理入住" },
    { api: exports.onLineBookApi + "Book/GetChainRoomService", key: EApi.getChainRoomService, remark: '获取酒店房间服务' },
    { api: exports.onLineBookApi + "Book/GetChainRoomTypeRemark", key: EApi.GetChainRoomTypeRemark, remark: '获取指定酒店房型信息' },
];
function api(key) {
    var configModel = lsEApi.filter(function (u) { return u.key == key; });
    if (configModel.length > 1)
        throw '找到两个相同key的配置项[' + key + ']';
    if (configModel.length == 0)
        throw '未找到配置项' + key;
    if (configModel[0].api == null || configModel[0].api == "")
        throw '找到的配置项未配置具体值';
    return configModel[0].api;
}
exports.api = api;
//# sourceMappingURL=apiurl.js.map