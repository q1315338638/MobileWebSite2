//微信支付js处理库
//初始化一个支付对象 prepay_id 预支付ID 通过统一下单接口获取 paySign nonceStr交易MD5加密结果

function CreatePayObj(appid, timeStamp, nonceStr, prepay_id, paySign) {

    var PayInfo = {
        "appId": appid,
        "timeStamp": timeStamp,
        "nonceStr": nonceStr,
        "package": "" + prepay_id,
        "signType": "MD5",
        "paySign": paySign
    }
    for (var i = 0; i < PayInfo.length; i++) {
        PayInfo[i] = trim(PayInfo[i]); 
    }
    return PayInfo;
}
//调用微信JS api 支付
function jsApiCall(PayInfo, oid) {
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        PayInfo,
        function (res) {
            alert(JSON.stringify(res))
            //成功后的回调
            //window.location.href = "/test/order.html"
            //     alert(res.err_code + res.err_desc + res.err_msg);
        }
    );
}

//调用支付唤起微信 支付结果将发送到回调接口

function callpay(appid, timeStamp, nonceStr, prepay_id, paySign, oid) {
    var PayInfo = CreatePayObj(appid, timeStamp, nonceStr, prepay_id, paySign);

    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', jsApiCall(PayInfo, oid), false);
        }
        else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', jsApiCall(PayInfo, oid));
            document.attachEvent('onWeixinJSBridgeReady', jsApiCall(PayInfo, oid));
        }
    }
    else {
        jsApiCall(PayInfo, oid);
    }
}
//清除空格
function trim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, "");
}

