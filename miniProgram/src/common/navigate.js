import Vue from 'vue'
import { fnGetRouter } from '@/common/router.js';
import { fnObjToJSON } from '@/common/utils.js';

Vue.prototype.fnNavigateTo = (sRoute, params) => {
  uni.navigateTo({
    url: fnGetRouter(sRoute + fnObjToJSON(params))
  })
}
Vue.prototype.fnNavigateBack = (delta) => {
  uni.navigateBack({
    delta: delta || 1
  })
}
// 关闭当前页面，跳转到应用内的某个页面。
Vue.prototype.fnRedirectTo = (sRoute, params) => {
  uni.redirectTo({
    url: fnGetRouter(sRoute + fnObjToJSON(params))
  })
}
// 关闭所有页面，打开到应用内的某个页面。
Vue.prototype.fnReLaunch = (sRoute, params) => {
  uni.reLaunch({
    url: fnGetRouter(sRoute + fnObjToJSON(params))
  });
}
export function fnNavigateTo (sRoute, params) {
  Vue.prototype.fnNavigateTo(sRoute, params)
}