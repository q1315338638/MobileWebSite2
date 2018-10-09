import { ContextService } from "../service/context.service";

/**
 * @license PMS v1.0
 * (c) 2018 浦雀, Inc. http://www.puque-tech.com/#/
 * The author: xueguanghan
 * create time:2018年5月12日15:32:24
 * last modify 2018年5月12日15:32:28
 * modify name:xue. 用户操作逻辑错误 组件_错误描述
 */

export enum ELanguage {
  en = 1,
  zh = 2,
}
export enum Ekey {
  //请输入账户与密码
  login_mustInput = -1,
  //登入失败
  login_loginFail = -2,
  //必须输入手机号码
  msutInputMobile = -3,
  //必须输入客人姓名
    msutInputGuestName = -4,
  //必须输入正确的手机号
    register_mustInputCorrectMobile = -5,
    //手机号不能为空
    register_mustInputMobile = -6,
    //必须输入正确的证件号
    register_mustInputCorrectDocNo = -7,
    //输入的密码不一致
    register_InputDifferPassword = -8,
    //密码长度不能少于6位
    register_pwdLength = -9,
    //必须输入验证码
    register_mustInputCode = -9,

}
export class Language {
  language: ELanguage;
  value: string;
  key: Ekey ;
}

export const lsString: Language[] = [
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
]
//查询多语言 如果未找到 将报notfound异常 找到则返回一个字符串
export function parseLanguage(contextService: ContextService, eKey: Ekey, lsArr?: any): string {
  let objLanguage = lsString.filter(u => u.key == eKey && u.language == contextService.getLanguage());
  if (objLanguage == null) throw 'the key[' + eKey.toString() + '] not found';
  let sTips: string = objLanguage[0].value;
  if (lsArr) {
    if (typeof (lsArr) == "object")
    for (let i = 0; i < lsArr.length; i++) {
      sTips = sTips.replace('{' + i + '}', lsArr[i]);
      }
    else {
      sTips = sTips.replace('{0}', lsArr);
    }
  }
  return sTips;
}

 
