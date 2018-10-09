"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license PMS v1.0
 * (c) 2018 浦雀, Inc. http://www.puque-tech.com/#/
 * The author: xueguanghan
 * create time:2018年5月12日15:32:24
 * last modify 2018年5月12日15:32:28
 * modify name:xue. 用户操作逻辑错误 组件_错误描述
 */
var ELanguage;
(function (ELanguage) {
    ELanguage[ELanguage["en"] = 1] = "en";
    ELanguage[ELanguage["zh"] = 2] = "zh";
})(ELanguage = exports.ELanguage || (exports.ELanguage = {}));
var Ekey;
(function (Ekey) {
    //请输入账户与密码
    Ekey[Ekey["login_mustInput"] = -1] = "login_mustInput";
    //登入失败
    Ekey[Ekey["login_loginFail"] = -2] = "login_loginFail";
    //必须输入手机号码
    Ekey[Ekey["msutInputMobile"] = -3] = "msutInputMobile";
    //必须输入客人姓名
    Ekey[Ekey["msutInputGuestName"] = -4] = "msutInputGuestName";
    //必须输入正确的手机号
    Ekey[Ekey["register_mustInputCorrectMobile"] = -5] = "register_mustInputCorrectMobile";
    //手机号不能为空
    Ekey[Ekey["register_mustInputMobile"] = -6] = "register_mustInputMobile";
    //必须输入正确的证件号
    Ekey[Ekey["register_mustInputCorrectDocNo"] = -7] = "register_mustInputCorrectDocNo";
    //输入的密码不一致
    Ekey[Ekey["register_InputDifferPassword"] = -8] = "register_InputDifferPassword";
    //密码长度不能少于6位
    Ekey[Ekey["register_pwdLength"] = -9] = "register_pwdLength";
    //必须输入验证码
    Ekey[Ekey["register_mustInputCode"] = -9] = "register_mustInputCode";
})(Ekey = exports.Ekey || (exports.Ekey = {}));
var Language = /** @class */ (function () {
    function Language() {
    }
    return Language;
}());
exports.Language = Language;
exports.lsString = [
    { key: Ekey.login_mustInput, value: "请输入账户与密码", language: ELanguage.zh },
    { key: Ekey.login_loginFail, value: "登入失败 请检查用户名或密码是否错误", language: ELanguage.zh },
    { key: Ekey.msutInputMobile, value: "请输入客人手机号码", language: ELanguage.zh },
    { key: Ekey.msutInputGuestName, value: "请输入客人姓名", language: ELanguage.zh },
    { key: Ekey.register_mustInputCorrectMobile, value: "请输入正确的手机号", language: ELanguage.zh },
    { key: Ekey.register_mustInputMobile, value: "手机号不能为空", language: ELanguage.zh },
    { key: Ekey.register_mustInputCorrectDocNo, value: "请输入正确的证件号", language: ELanguage.zh },
    { key: Ekey.register_InputDifferPassword, value: "输入密码不一致", language: ELanguage.zh },
    { key: Ekey.register_pwdLength, value: "密码长度不能少于6位", language: ELanguage.zh },
    { key: Ekey.register_mustInputCode, value: "请输入验证码", language: ELanguage.zh },
];
//查询多语言 如果未找到 将报notfound异常 找到则返回一个字符串
function parseLanguage(contextService, eKey, lsArr) {
    var objLanguage = exports.lsString.filter(function (u) { return u.key == eKey && u.language == contextService.getLanguage(); });
    if (objLanguage == null)
        throw 'the key[' + eKey.toString() + '] not found';
    var sTips = objLanguage[0].value;
    if (lsArr) {
        if (typeof (lsArr) == "object")
            for (var i = 0; i < lsArr.length; i++) {
                sTips = sTips.replace('{' + i + '}', lsArr[i]);
            }
        else {
            sTips = sTips.replace('{0}', lsArr);
        }
    }
    return sTips;
}
exports.parseLanguage = parseLanguage;
//# sourceMappingURL=logicerrorenum.js.map