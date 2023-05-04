const objRouter = {
  index: '/pages/index/index',
  preferredCombinationDetail: '/pages/tabbar/preferredCombinationDetail',
  strategyRecommendationDetail: '/pages/tabbar/strategyRecommendationDetail',

};
export function fnGetRouter (sUrl) {
  if (!sUrl) console.error(`sKey不能为空，sKey===${sKey}`);
  let nIndex = sUrl.indexOf('?'), sParams = '', sKey;
  // 截取需携带的参数
  if (nIndex === -1) {
    sKey = sUrl;
  } else {
    sParams = sUrl.substring(nIndex, sUrl.length);
    sKey = sUrl.substring(0, nIndex);
  };
  if (!objRouter[sKey]) console.error(`[${sKey}]路由不存在，请检查该路径是否已定义`);
  return objRouter[sKey] + sParams;
}