"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
function Tips(str) {
    var time = 3000;
    if (str.length > 10) {
        time = (str.length / 10) * 2000 + 3000;
    }
    time = time > 10000 ? 10000 : time;
    var html = '<div id="tips" class="tips" style="z-index:999; font-size:22px; position: fixed; min-width: 80px; min-height: 60px;top: calc(50% - 30px); left: calc(50% - 40px);border-radius: 3px;display:none; background:rgba(0,0,0,0.4);text-align: center;line-height: 60px; color:#fff;">' + str + '</div>';
    $("body").after(html);
    $(".tips").fadeIn(1000);
    setTimeout(function () { $(".tips").fadeOut(1000); $('#tips').remove(); }, time);
}
exports.Tips = Tips;
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var nIndex = window.location.href.indexOf('?');
    if (nIndex == -1)
        return null;
    var r = window.location.href.substring(nIndex + 1, 10000).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}
exports.getQueryString = getQueryString;
//# sourceMappingURL=ui.js.map