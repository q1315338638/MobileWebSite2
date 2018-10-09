"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//验证手机号是否有效
function verificationMobile(sMobile) {
    var reg = /^(1[3-9][0-9])\d{8}$/;
    return reg.test(sMobile);
}
exports.verificationMobile = verificationMobile;
//设置或跟新本地存储数据
function setLocalData(sDataName, objData) {
    if (sDataName != "") {
        if (objData) {
            var dataJson = JSON.stringify(objData);
            window.localStorage.setItem(sDataName, dataJson);
        }
    }
}
exports.setLocalData = setLocalData;
//获取本地存储数据
function getLocalData(sDataName) {
    if (sDataName != "")
        return JSON.parse(window.localStorage.getItem(sDataName));
}
exports.getLocalData = getLocalData;
//删除本地存储数据
function removeLocalData(sDataName) {
    if (sDataName != "")
        window.localStorage.removeItem(sDataName);
}
exports.removeLocalData = removeLocalData;
//设置或跟新本地存储数据
function setSessionData(sDataName, objData, fn) {
    if (sDataName != "") {
        if (objData) {
            var dataJson = JSON.stringify(objData);
            window.sessionStorage.setItem(sDataName, dataJson);
            if (fn)
                fn();
        }
    }
}
exports.setSessionData = setSessionData;
//获取本地存储数据
function getSessionData(sDataName) {
    if (sDataName != "")
        return JSON.parse(window.sessionStorage.getItem(sDataName));
}
exports.getSessionData = getSessionData;
//删除本地存储数据
function removeSessionData(sDataName) {
    if (sDataName != "")
        window.sessionStorage.removeItem(sDataName);
}
exports.removeSessionData = removeSessionData;
//格式化星期
function formatWeek(weekCode) {
    var week;
    switch (weekCode) {
        case 0:
            week = '周一';
            break;
        case 1:
            week = '周二';
            break;
        case 2:
            week = '周三';
            break;
        case 3:
            week = '周四';
            break;
        case 4:
            week = '周五';
            break;
        case 5:
            week = '周六';
            break;
        case 6:
            week = '周日';
            break;
    }
    return week;
}
exports.formatWeek = formatWeek;
function initGoogleMap(sElementID, nLongitude, nLatitude, sTitle) {
    try {
        var objLatLng = { lat: nLatitude, lng: nLongitude };
        // Create a map object and specify the DOM element
        // for display.
        var map = new google.maps.Map(document.getElementById(sElementID), {
            center: objLatLng,
            zoom: 16
        });
        // Create a marker and set its position.
        var marker = new google.maps.Marker({
            map: map,
            position: objLatLng,
            title: sTitle
        });
    }
    catch (_a) {
    }
}
exports.initGoogleMap = initGoogleMap;
function fileToBase64(objFile, objComponent, objCallbackFn) {
    var reader = new FileReader();
    //var nAllowImgFileSize = 2100000; //上传图片最大值(单位字节)（ 2 M = 2097152 B ）超过2M上传失败
    var imgUrlBase64;
    if (objFile) {
        //将文件以Data URL形式读入页面  
        imgUrlBase64 = reader.readAsDataURL(objFile);
        reader.onload = function (e) {
            //	var sBase64 = reader.result.toString();
            var sBase64 = reader.result.toString().substring(reader.result.toString().indexOf(",") + 1);
            objCallbackFn.call(objComponent, (sBase64));
        };
    }
}
exports.fileToBase64 = fileToBase64;
//计算两个时间相差天数
function dateDifference(sDate1, sDate2) {
    var dateSpan, tempDate, nDays;
    sDate1 = Date.parse(sDate1); //返回当前时间的毫秒数
    sDate2 = Date.parse(sDate2);
    dateSpan = sDate2 - sDate1;
    dateSpan = Math.abs(dateSpan); //返回绝对值
    nDays = Math.floor(dateSpan / (24 * 3600 * 1000)); //向下取整
    return nDays;
}
exports.dateDifference = dateDifference;
//# sourceMappingURL=util.js.map