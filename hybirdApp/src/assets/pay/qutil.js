document.write('  <script src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.js" type="text/javascript"></script>');
var urlHead = '';




////城市下拉列表事件数据加载 默认省市区ID
//function ProvinceLoad(defaultPID, defaultCID, defaultRegister) {
//    $.ajax(
//     {

//         type: "Get",  //提交方式
//         url: urlHead + "/tool/provincelist",//路径

//         success: function (result) {//返回数据根据结果进行相应的处理
//             var rs = $.parseJSON(result);
//             var html = "";


//             for (var i = 0; i < rs.content.length; i++) {
//                 if (rs.content[i].provinceID == defaultPID) {
//                     //设置默认广东省
//                     html = html + ('<option selected="selected" value="' + rs.content[i].provinceID + '">' + rs.content[i].provinceName + '</option>');
//                     continue;
//                 }
//                 html = html + ('<option  value="' + rs.content[i].provinceID + '">' + rs.content[i].provinceName + '</option>');

//             }
//             $("#ProvinceID").html(html);
//             CityLoad(defaultCID, defaultRegister);

//         },
//         error: function (result) {
//             tips("服务器异常");
//         }
//     });

//}
//function goHistory() {
//    history.go(-1);
//}
//function CityLoad(defaultCID, defaultRegister) {
//    $.ajax(
//     {

//         type: "Get",  //提交方式
//         url: urlHead + "/tool/citylist?ProvinceID=" + $('#ProvinceID option:selected').val(),//路径

//         success: function (result) {//返回数据根据结果进行相应的处理
//             var rs = $.parseJSON(result);
//             var html = "";
//             //html = html + ('<option value="' + rs.content[0].id + '">' + rs.content[0].name + '</option>');

//             for (var i = 0; i < rs.content.length; i++) {
//                 if (rs.content[i].cityID == defaultCID) {
//                     html = html + ('<option   selected="selected"  value="' + rs.content[i].cityID + '">' + rs.content[i].cityName + '</option>');
//                 } else {
//                     html = html + ('<option   value="' + rs.content[i].cityID + '">' + rs.content[i].cityName + '</option>');

//                 }
//             }
//             $("#CityID").html(html);
//             CountLoad(defaultRegister);

//         },
//         error: function (result) {
//             tips("服务器异常");
//         }
//     });

//}
//function CountLoad(defaultRegister) {
//    //defaultRegister 默认区县
//    $.ajax(
//     {

//         type: "Get",  //提交方式
//         url: urlHead + "/tool/CountyList?CityID=" + $('#CityID').val(),//路径

//         success: function (result) {//返回数据根据结果进行相应的处理
//             var rs = $.parseJSON(result);
//             var html = "";
//             //html = html + ('<option selected="selected" value="' + rs.content[0].regionid + '">' + rs.content[0].name + '</option>');
//             //加载区县信息
//             for (var i = 0; i < rs.content.length; i++) {
//                 if (rs.content[i].regionid == defaultRegister) {
//                     html = html + ('<option selected="true"   value="' + rs.content[i].districtID + '">' + rs.content[i].districtName + '</option>');
//                 } else {
//                     html = html + ('<option  value="' + rs.content[i].districtID + '">' + rs.content[i].districtName + '</option>');

//                 }

//             }
//             $("#CountyID").html(html);

//         },
//         error: function (result) {
//             tips("服务器异常");
//         }
//     });

//}

////数据验证处理
//function IsPhone(phone) {
//    var regPhone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
//    if (!regPhone.test(phone)) {
//        //tips("请输入正确的电话");

//        return false;
//    }
//    return true;

//}
////1,2,3这种字符串匹配
//function IsIDList(idList) {
//    var regPhone = /^\d+(,\d+)*$/;
//    if (!regPhone.test(idList)) {
//        tips("请输入正确ID序号 查看示例");

//        return false;
//    }
//    return true;

//}
//function IsEmail(Email) {
//    var regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//    if (!regEmail.test(Email)) {
//        tips("请输入正确的邮箱");
//        return false;
//    }
//    return true;

//}

////取超链接参数 不存在返回null 传入参数名称
//function GetQueryString(name) {
//    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//    var r = window.location.search.substr(1).match(reg);
//    if (r != null) return unescape(encodeURIComponent(r[2])); return null;
//}
////C#序列化时间转化
//function ParseDate(item) {
//    return item;
//    var timestamp = item.substring(6, 15);
//    var d = new Date(timestamp * 1000);  //根据时间戳生成的时间对象
//    return (d.getFullYear()) + "-" +
//               (d.getMonth() + 1) + "-" +
//               (d.getDate()) + " " +
//               (d.getHours()) + ":" +
//               (d.getMinutes()) + ":" +
//               (d.getSeconds());

//}
////C#序列化时间转化短日期
//function ParseShortDate(item) {
//    return item;

//    var time = (ParseDate(item)).substring(0, 9);
//    return time;
//}


////获取微信openID
//function getWeiXinOpenId() {
//    var openId = GetQueryString('openId');
//    if (openId == null || openId.length == 0)
//        window.location.href = urlHead + '/ThirdpartyMain/getoaurl?redirectUrl=' + window.location.href;
//    return openId;
//}
////模版搜索ajax
//function SearchAjax(getType, whereStr, callBack) {
//    $.ajax({
//        type: 'post',
//        dataType: 'json',
//        url: '/PublicData/' + getType + '?where=' + whereStr,
//        success: function (data) {

//            if (data.state == "success") {
//                if (callback == null || callback == undefined) {
//                    console.log('回调函数未定义');
//                    return;
//                }
//                callBack(data.content);
//            }

//        },
//        error: function () {
//            tips('网络错误,\n请尝试重新登入\n');


//        }
//    });
//}
////模版搜索ajax不使用异步请求
//function SearchAjaxNoasync(getType, whereStr) {
//    var ajaxdata = null;
//    $.ajax({
//        type: 'post',
//        async: false,
//        dataType: 'json',
//        url: urlHead + '/PublicData/' + getType + '?where=' + whereStr,
//        success: function (data) {

//            if (data.state == "success") {
//                ajaxdata = data.content;
//            }

//        },
//        error: function () {
//            tips('网络错误,\n请尝试重新登入\n');


//        }
//    });
//    return ajaxdata;
//}
////判断数据是否为空 undefined 长度是否为0  非空返回true
//function NoNull(obj) {
//    if (obj == undefined || obj == null || obj.length == 0) return false;
//    return true;
//}

//function SearchAjaxNoasyncPage(getType, whereStr) {
//    var ajaxdata = null;
//    $.ajax({
//        type: 'post',
//        async: false,
//        dataType: 'json',
//        url: urlHead + '/PublicData/' + getType + '?where=' + whereStr,
//        success: function (data) {

//            if (data.state == "success") {
//                ajaxdata = data;
//            }

//        },
//        error: function () {
//            tips('网络错误,\n请尝试重新登入\n');


//        }
//    });
//    return ajaxdata;
//}

//function agAjax(url, type, data) {
//   // url = urlHead + url;
//    var ajaxData = null;
//    $.ajax({
//        type: type,
//        async: false,
//        url: url,
//        data: data,
//        dataType: 'json',
//        success: function (data) {
//            if (data.state != 'success') {
//                tips(data.content);
//            }
//            ajaxData = data;

//        },
//        error: function () {

//        }
//    });
//    return ajaxData;
//}

//function agAjaxCall(url, type, callBack) {
//    $.ajax({
//        type: type,
//        url: url,

//        dataType: 'json',
//        success: function (data) {
//            if (callBack == null || callBack == undefined) {
//                return;
//            }
//            callBack(data.content);
//        },
//        error: function () {

//        }
//    });
//}


//function ajaxSubmit(formId, url, type, successCallBack) {
//    var ajaxData;
//    //url='/Agent.ashx?urlstr=http://192.168.31.99:99/'+url;
//    //获取form提交 表单应该具有一个必选分类名称 一个可选logo 成功时将返回property
//    $('#' + formId).ajaxSubmit({

//        url: url,
//        //data: $("#" + formId).serialize(),
//        type: type,
//        dataType: "json",
//        async: false,
//        success: function (data) {
//            ajaxData = data;
//            if (successCallBack == null || successCallBack == undefined) {
//                return;
//            }
//            successCallBack(data);

//        },
//        error: function () {
//            tips(data.content)
//        }
//    });
//    return ajaxData;
//}


////总体接口
//function agAjaxOptionHtml(url, type, ElementId, callBack) {
//    //url='/Agent.ashx?urlstr=http://192.168.31.99:99/'+url;
//    $.ajax({
//        type: type,
//        url: url,

//        dataType: 'json',
//        success: function (data) {
//            if (callBack == null || callBack == undefined) {
//                return;
//            }
//            callBack(data.content, ElementId);
//        },
//        error: function () {

//        }
//    });
//}

////跳转到支付  
//function Pay(oid) {
//    var url = 'GetOAURL?redirectUrl=' + URLHead + 'Main/GetOpenID&state=' + URLHead + '/Main/PayGetParameter?oid=' + oid
//    url = url.trim();
//    window.location.href = url;
//}


////当前页页码 总页数 是否有上一页 ,是否有下一页 数据处理
//function PageTotol(total, pageIndex, pageSize) {
//    var pageCount;
//    var IsUpPage = false;//是否存在上一页
//    IsDownPage = false;//是否存在下一页

//    //转换为整数
//    pageCount = Math.round(total / pageSize);

//    if (pageCount > pageIndex) {
//        IsDownPage = true;
//    }
//    if (pageCount > 0 && pageIndex > 1) {
//        IsUpPage = true;
//    }
//    if (pageCount < 2) {
//        pageCount = 1;
//    }


//    //计算总页数
//    var pageInfo = {
//        'pageCount': pageCount,
//        'IsUpPage': IsUpPage,
//        'IsDownPage': IsDownPage
//       , 'UpPage': pageIndex - 1
//       , 'DownPage': pageIndex + 1

//    }
//    return pageInfo;
//}
////根据目标页码与页大小获取分页记录 startIndex与endIndex
//function getPageStatrToEnd(targetIndex, pageSize) {
//    startIndex = (targetIndex - 1) * pageSize + 1;
//    endIndex = (targetIndex) * (pageSize); 5
//    return {
//        'startIndex': startIndex,
//        'endIndex': endIndex
//    }
//}
////搜索模型序列化
//function SerialModel(obj) {
//    //序列化传入对象
//    var rs = JSON.stringify(obj);
//    console.log(rs)
//    return rs;
//}

//function userAlert(message) {
//    tips(message);
//}

////传入响应内容返回请求 result 请求结果数据
//function returnAjaxResult(result) {
//    tips(result.content);

//    if (result.state == 'success') {
//        return result.content;
//    }

//    else {

//        userAlert(result.content);
//        return false;
//    }
//}


//function baseSearch(where, getType, beginIndex, endIndex, modelName, orderByName, isDesc) {
//    var whereModel;
//    isDesc == undefined ? 'desc' : isDesc
//    if (getType == 'GetEntitiesPage') {
//        whereModel = GetWhereAndOrderBy(where, modelName, beginIndex, endIndex, orderByName, isDesc);
//    } else {
//        whereModel = GetWhereAndOrderBy(where, modelName);
//    }
//    var whereStr = whereOptionAll(whereModel);
//    var TuanData = SearchAjaxNoasyncPage(getType, whereStr);
//    console.log(TuanData);
//    return TuanData;

//}

////分页处理 总条数 显示页宽 如1 2 3 ,2 3 4
//function pageInfo(total, pageSize, showPageWigth, currentPageIndex) {
//    var pageBtnArray = new Array();
//    var pageInfo = new Object();
//    //计算页数
//    pageInfo.pageCount = total / pageSize;
//    if (pageInfo.pageCount % 1 != 0) {
//        pageInfo.pageCount = parseInt(pageInfo.pageCount + 1);
//    }

//    //  pageInfo.pageCount =total%pageSize==0 ? total / pageSize : total / pageSize + 1;
//    //当前页码数据
//    pageInfo.currentPageIndex = currentPageIndex;
//    //判断是否有上一页下一页
//    pageInfo.up = false;
//    pageInfo.next = false;
//    if (currentPageIndex + 1 > pageInfo.pageCount) {
//        pageInfo.next = true;
//    }
//    if (currentPageIndex > 1) {
//        pageInfo.up = true;
//    }

//    var padding = parseInt(showPageWigth / 2);
//    if (padding + currentPageIndex > showPageWigth) {
//        pageInfo.start = currentPageIndex - padding > 0 ? currentPageIndex - padding : 1;
//        pageInfo.end = pageInfo.pageCount >= currentPageIndex + padding ? currentPageIndex + padding : pageInfo.pageCount;
//        pageInfo.start = pageInfo.start + showPageWigth > pageInfo.end ? pageInfo.end - showPageWigth : pageInfo.start;

//    } else if (pageInfo.pageCount < showPageWigth + 1) {
//        pageInfo.end = pageInfo.pageCount;
//        pageInfo.start = 1;


//    } else {
//        pageInfo.start = currentPageIndex - padding > 0 ? currentPageIndex - padding : 1;
//        pageInfo.end = pageInfo.start + showPageWigth - 1;


//    }
//    console.log(pageInfo);
//    return pageInfo;


//}

//function page(pageSize, pageIndex, total, id) {

//    var pageHtml = '';
//    var startIndex = -1;
//    var endIndex = -1;

//    var pageCount = total % pageSize > 0 ? parseInt(total / pageSize) + 1 : total / pageSize;
//    endIndex = pageIndex > pageSize ? pageIndex + 1 : pageSize;
//    endIndex = endIndex > pageCount ? pageCount : endIndex;
//    startIndex = endIndex - pageSize > 0 ? endIndex - pageSize : 1;
//    if (pageIndex > 1) {

//        //首页
//        pageHtml += '<li data-pageIndex="' + 1 + '"><a href="javascript:void(0)"  aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>';
//        //上一页
//        pageHtml += '<li data-pageIndex="' + (pageIndex - 1) + '"><a href="javascript:void(0)"  aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>';

//    }
//    for (var i = startIndex; i <= endIndex; i++) {
//        if (pageIndex == i) {
//            //是当前页 加特殊样式
//            pageHtml += '	<li class="active" data-pageIndex="' + i + '"><a href=href="javascript:void(0)" >' + i + '</a></li>';

//        }
//        else {
//            //不是当前页 普通样式

//            pageHtml += '	<li data-pageIndex="' + i + '"><a href="javascript:void(0)" >' + i + '</a></li>';

//        }
//    }


//    if (pageIndex * 1 < parseInt(pageCount)) {
//        pageHtml += '<li data-pageIndex="' + (pageIndex * 1 + 1) + '"><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>';
//        pageHtml += '<li data-pageIndex="' + parseInt(pageCount) + '"><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>';


//    }

//    return pageHtml;
//}
////提示函数
//function tips(str) {
//    var time = 3000;
//    if (str.length > 10) {
//        time = (str.length / 10) * 2000 + 3000;
//    }
//    time = time > 10000 ? 10000 : time;
//    var html = '<div id="tips" class="tips" style="z-index:999; font-size:22px; position: fixed; min-width: 80px; min-height: 60px;top: calc(50% - 30px); left: calc(50% - 40px);border-radius: 3px;display:none; background:rgba(0,0,0,0.4);text-align: center;line-height: 60px; color:#fff;">' + str + '</div>';
//    $("body").after(html);
//    $(".tips").fadeIn(1000);
//    setTimeout(function () { $(".tips").fadeOut(1000); clearInterval(); $('#tips').remove(); }, time);


//}

//function tipsExtend(data, str) {
//    if (data.state == 'success') {
//        tips(str);
//    } else {
//        tips(data.content);
//    }
//}


////上传图片后立即预览 file对象,图片容器id
//function showImg(fileObj, imgId) {

//    var file = fileObj.files[0];
//    var r = new FileReader();
//    r.readAsDataURL(file);
//    $(r).load(function () {
//        $('#' + imgId).attr("src", this.result);
//    })

//}

//function getCookie(name) {
//    var nameEQ = name + "=";
//    var ca = document.cookie.split(';'); //把cookie分割成组
//    for (var i = 0; i < ca.length; i++) {
//        var c = ca[i]; //取得字符串
//        while (c.charAt(0) == ' ') { //判断一下字符串有没有前导空格
//            c = c.substring(1, c.length); //有的话，从第二位开始取
//        }
//        if (c.indexOf(nameEQ) == 0) { //如果含有我们要的name
//            return unescape(c.substring(nameEQ.length, c.length)); //解码并截取我们要值
//        }
//    }
//    return false;
//}

////获取物流公司名称
//function GetWuLiu(wuLiuId) {

//    switch (wuLiuId) {
//        case -1: return "无需物流";
//        case 19: return "广东邮政物流";
//        case 20: return "汇通快运";
//        case 41: return "天天快递";
//        case 54: return "优速物流";
//        case 56: return "圆通速递";
//        case 60: return "韵达快递";
//        case 65: return "中通速递";
//        default: return "未知";

//    }
//}


//Date.prototype.Format = function (fmt) {
//    var o = {
//        "M+": this.getMonth() + 1, //月份   
//        "d+": this.getDate(), //日   
//        "h+": this.getHours(), //小时   
//        "m+": this.getMinutes(), //分   
//        "s+": this.getSeconds(), //秒   
//        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
//        "S": this.getMilliseconds() //毫秒   
//    };
//    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
//    for (var k in o)
//        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
//    return fmt;
//}


function goHistory() {
    history.go(-1);
}

//城市下拉列表事件数据加载 默认省市区ID
function ProvinceLoad(defaultPID) {
    $.ajax(
     {

         type: "Get",  //提交方式
         url: "/tool/provincelist",//路径

         success: function (result) {//返回数据根据结果进行相应的处理
             var rs = $.parseJSON(result);
             var html = "";


             for (var i = 0; i < rs.content.length; i++) {
                 if (rs.content[i].provinceID == defaultPID) {
                     //设置默认广东省
                     html = html + ('<option selected="selected" value="' + rs.content[i].provinceID + '">' + rs.content[i].provinceName + '</option>');
                     continue;
                 }
                 html = html + ('<option  value="' + rs.content[i].provinceID + '">' + rs.content[i].provinceName + '</option>');

             }
             $("#ProvinceID").html(html);
             CityLoad();

         },
         error: function (result) {
             tips("服务器异常");
         }
     });

}

function CityLoad(defaultCID) {
    $.ajax(
     {

         type: "Get",  //提交方式
         url: "/tool/citylist?ProvinceID=" + $('#ProvinceID').val(),//路径

         success: function (result) {//返回数据根据结果进行相应的处理
             var rs = $.parseJSON(result);
             var html = "";
             //html = html + ('<option value="' + rs.content[0].id + '">' + rs.content[0].name + '</option>');

             for (var i = 0; i < rs.content.length; i++) {
                 if (rs.content[i].cityID == defaultCID) {
                     html = html + ('<option   selected="selected"  value="' + rs.content[i].cityID + '">' + rs.content[i].cityName + '</option>');
                 } else {
                     html = html + ('<option   value="' + rs.content[i].cityID + '">' + rs.content[i].cityName + '</option>');

                 }
             }
             $("#CityID").html(html);
             CountLoad();

         },
         error: function (result) {
             tips("服务器异常");
         }
     });

}

function CountLoad(defaultRegister) {
    //defaultRegister 默认区县
    $.ajax(
     {

         type: "Get",  //提交方式
         url: "/tool/CountyList?CityID=" + $('#CityID').val(),//路径

         success: function (result) {//返回数据根据结果进行相应的处理
             var rs = $.parseJSON(result);
             var html = "";
             //html = html + ('<option selected="selected" value="' + rs.content[0].regionid + '">' + rs.content[0].name + '</option>');
             //加载区县信息
             for (var i = 0; i < rs.content.length; i++) {
                 if (rs.content[i].districtID == defaultRegister) {
                     html = html + ('<option selected="selected"   value="' + rs.content[i].districtID + '">' + rs.content[i].districtName + '</option>');
                 } else {
                     html = html + ('<option  value="' + rs.content[i].districtID + '">' + rs.content[i].districtName + '</option>');

                 }

             }
             $("#CountyID").html(html);

         },
         error: function (result) {
             tips("服务器异常");
         }
     });

}

//数据验证处理
function IsPhone(phone) {
    var regPhone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (!regPhone.test(phone)) {
        //tips("请输入正确的电话");

        return false;
    }
    return true;

}
//1,2,3这种字符串匹配
function IsIDList(idList) {
    var regPhone = /^\d+(,\d+)*$/;
    if (!regPhone.test(idList)) {
        tips("请输入正确ID序号 查看示例");

        return false;
    }
    return true;

}
function IsEmail(Email) {
    var regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regEmail.test(Email)) {
        tips("请输入正确的邮箱");
        return false;
    }
    return true;

}

//取超链接参数 不存在返回null 传入参数名称
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(encodeURIComponent(r[2])); return null;
}
//C#序列化时间转化
function ParseDate(item) {
    return item;
    var timestamp = item.substring(6, 15);
    var d = new Date(timestamp * 1000);  //根据时间戳生成的时间对象
    return (d.getFullYear()) + "-" +
               (d.getMonth() + 1) + "-" +
               (d.getDate()) + " " +
               (d.getHours()) + ":" +
               (d.getMinutes()) + ":" +
               (d.getSeconds());

}
//C#序列化时间转化短日期
function ParseShortDate(item) {
    return item;

    var time = (ParseDate(item)).substring(0, 9);
    return time;
}


//获取微信openID
function getWeiXinOpenId() {
    var openId = GetQueryString('openId');
    if (openId == null || openId.length == 0)
        window.location.href = urlHead + '/ThirdpartyMain/getoaurl?redirectUrl=' + window.location.href;
    return openId;
}
//模版搜索ajax
function SearchAjax(getType, whereStr, callBack) {
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: '/PublicData/' + getType + '?where=' + whereStr,
        success: function (data) {

            if (data.state == "success") {
                if (callback == null || callback == undefined) {
                    console.log('回调函数未定义');
                    return;
                }
                callBack(data.content);
            }

        },
        error: function () {
            tips('网络错误,\n请尝试重新登入\n');


        }
    });
}
//模版搜索ajax不使用异步请求
function SearchAjaxNoasync(getType, whereStr) {
    var cacheData = GetDataCache(whereStr);
    if (cacheData != null)
        return cacheData;
    var ajaxdata = null;
    $.ajax({
        type: 'post',
        async: false,
        dataType: 'json',
        url: '/PublicData/' + getType + '?where=' + whereStr,
        success: function (data) {

            if (data.state == "success") {
                ajaxdata = data.content;
            }

        },
        error: function () {
            tips('网络错误,\n请尝试重新登入\n');


        }
    });
    SetDataCache(whereStr, ajaxdata);
    return ajaxdata;
}
var ModelDataCache = new Array();
function GetDataCache(whereStr) {

    var data = $.grep(ModelDataCache, function (value) {
        return value.whereStr == whereStr && new Date() - value.addTime < 60000;
    })
    if (NoNull(data)) {
        return data[0].Data;
    } else {
        return null;
    }

}
//根据搜索模型设置缓存
function SetDataCache(whereStr, Data) {


    for (var i = 0; i < ModelDataCache.length; i++) {
        if (ModelDataCache[i].whereStr == whereStr) {
            ModelDataCache[i].Data = Data;
            ModelDataCache[i].addTime = new Data();

            return;
        }

    }
    ModelDataCache.push({
        "whereStr": whereStr,
        "Data": Data,
        "addTime": new Date()
    });


}
//判断数据是否为空 undefined 长度是否为0  非空返回true
function NoNull(obj) {
    if (obj == undefined || obj == null || obj.length == 0) return false;
    return true;
}

function SearchAjaxNoasyncPage(getType, whereStr) {
    var ajaxdata = null;
    var cacheData = GetDataCache(whereStr);
    if (cacheData != null)
        return cacheData;
    $.ajax({
        type: 'post',
        async: false,
        dataType: 'json',
        url: '/PublicData/' + getType + '?where=' + whereStr,
        success: function (data) {

            if (data.state == "success") {
                ajaxdata = data;
            }

        },
        error: function () {
            tips('网络错误,\n请尝试重新登入\n');


        }
    });
    SetDataCache(whereStr, ajaxdata);

    return ajaxdata;
}

function agAjax(url, type, data,show) {
    //	url='/Agent.ashx?urlstr=http://192.168.31.99:99/'+url;
    var ajaxData = null;
    $.ajax({
        type: type,
        async: false,
        url: url,
        data: data,
        dataType: 'json',
        success: function (data) {
            if (data.state != 'success'&&show!=false) {
                tips(data.content);
            }
            ajaxData = data;

        },
        error: function () {

        }
    });
    ModelDataCache = new Array();
    return ajaxData;
}

function agAjaxCall(url, type, callBack) {
    $.ajax({
        type: type,
        url: url,

        dataType: 'json',
        success: function (data) {
            if (callBack == null || callBack == undefined) {
                return;
            }
            callBack(data.content);
        },
        error: function () {

        }
    });
}


function ajaxSubmit(formId, url, type, successCallBack) {
    var ajaxData;
    //url='/Agent.ashx?urlstr=http://192.168.31.99:99/'+url;
    //获取form提交 表单应该具有一个必选分类名称 一个可选logo 成功时将返回property
    $('#' + formId).ajaxSubmit({

        url: url,
        //data: $("#" + formId).serialize(),
        type: type,
        dataType: "json",
        async: false,
        success: function (data) {
            ajaxData = data;
            if (successCallBack == null || successCallBack == undefined) {
                return;
            }
            successCallBack(data);

        },
        error: function () {
            tips(data.content)
        }
    });
    return ajaxData;
}


//总体接口
function agAjaxOptionHtml(url, type, ElementId, callBack) {
    //url='/Agent.ashx?urlstr=http://192.168.31.99:99/'+url;
    $.ajax({
        type: type,
        url: url,

        dataType: 'json',
        success: function (data) {
            if (callBack == null || callBack == undefined) {
                return;
            }
            callBack(data.content, ElementId);
        },
        error: function () {

        }
    });
}

//跳转到支付  
function Pay(oid) {
    var url = 'GetOAURL?redirectUrl=' + URLHead + 'Main/GetOpenID&state=' + URLHead + '/Main/PayGetParameter?oid=' + oid
    url = url.trim();
    window.location.href = url;
}


//当前页页码 总页数 是否有上一页 ,是否有下一页 数据处理
function PageTotol(total, pageIndex, pageSize) {
    var pageCount;
    var IsUpPage = false;//是否存在上一页
    IsDownPage = false;//是否存在下一页

    //转换为整数
    pageCount = Math.round(total / pageSize);

    if (pageCount > pageIndex) {
        IsDownPage = true;
    }
    if (pageCount > 0 && pageIndex > 1) {
        IsUpPage = true;
    }
    if (pageCount < 2) {
        pageCount = 1;
    }


    //计算总页数
    var pageInfo = {
        'pageCount': pageCount,
        'IsUpPage': IsUpPage,
        'IsDownPage': IsDownPage
       , 'UpPage': pageIndex - 1
       , 'DownPage': pageIndex + 1

    }
    return pageInfo;
}
//根据目标页码与页大小获取分页记录 startIndex与endIndex
function getPageStatrToEnd(targetIndex, pageSize) {
    startIndex = (targetIndex - 1) * pageSize + 1;
    endIndex = (targetIndex) * (pageSize); 5
    return {
        'startIndex': startIndex,
        'endIndex': endIndex
    }
}
//搜索模型序列化
function SerialModel(obj) {
    //序列化传入对象
    var rs = JSON.stringify(obj);
    console.log(rs)
    return rs;
}

function userAlert(message) {
    tips(message);
}

//传入响应内容返回请求 result 请求结果数据
function returnAjaxResult(result) {
    tips(result.content);

    if (result.state == 'success') {
        return result.content;
    }

    else {

        userAlert(result.content);
        return false;
    }
}


function baseSearch(where, getType, beginIndex, endIndex, modelName, orderByName, isDesc) {
    var whereModel;
    isDesc == undefined ? 'desc' : isDesc
    if (getType == 'GetEntitiesPage') {
        whereModel = GetWhereAndOrderBy(where, modelName, beginIndex, endIndex, orderByName, isDesc);
    } else {
        whereModel = GetWhereAndOrderBy(where, modelName);
    }
    var whereStr = whereOptionAll(whereModel);
    var TuanData = SearchAjaxNoasyncPage(getType, whereStr);
    console.log(TuanData);
    return TuanData;

}

//分页处理 总条数 显示页宽 如1 2 3 ,2 3 4
function pageInfo(total, pageSize, showPageWigth, currentPageIndex) {
    var pageBtnArray = new Array();
    var pageInfo = new Object();
    //计算页数
    pageInfo.pageCount = total / pageSize;
    if (pageInfo.pageCount % 1 != 0) {
        pageInfo.pageCount = parseInt(pageInfo.pageCount + 1);
    }

    //  pageInfo.pageCount =total%pageSize==0 ? total / pageSize : total / pageSize + 1;
    //当前页码数据
    pageInfo.currentPageIndex = currentPageIndex;
    //判断是否有上一页下一页
    pageInfo.up = false;
    pageInfo.next = false;
    if (currentPageIndex + 1 > pageInfo.pageCount) {
        pageInfo.next = true;
    }
    if (currentPageIndex > 1) {
        pageInfo.up = true;
    }

    var padding = parseInt(showPageWigth / 2);
    if (padding + currentPageIndex > showPageWigth) {
        pageInfo.start = currentPageIndex - padding > 0 ? currentPageIndex - padding : 1;
        pageInfo.end = pageInfo.pageCount >= currentPageIndex + padding ? currentPageIndex + padding : pageInfo.pageCount;
        pageInfo.start = pageInfo.start + showPageWigth > pageInfo.end ? pageInfo.end - showPageWigth : pageInfo.start;

    } else if (pageInfo.pageCount < showPageWigth + 1) {
        pageInfo.end = pageInfo.pageCount;
        pageInfo.start = 1;


    } else {
        pageInfo.start = currentPageIndex - padding > 0 ? currentPageIndex - padding : 1;
        pageInfo.end = pageInfo.start + showPageWigth - 1;


    }
    console.log(pageInfo);
    return pageInfo;


}

function page(pageSize, pageIndex, total, id) {

    var pageHtml = '';
    var startIndex = -1;
    var endIndex = -1;

    var pageCount = total % pageSize > 0 ? parseInt(total / pageSize) + 1 : total / pageSize;
    endIndex = pageIndex > pageSize ? pageIndex + 1 : pageSize;
    endIndex = endIndex > pageCount ? pageCount : endIndex;
    startIndex = endIndex - pageSize > 0 ? endIndex - pageSize : 1;
    if (pageIndex > 1) {

        //首页
        pageHtml += '<li data-pageIndex="' + 1 + '"><a href="javascript:void(0)"  aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>';
        //上一页
        pageHtml += '<li data-pageIndex="' + (pageIndex - 1) + '"><a href="javascript:void(0)"  aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>';

    }
    for (var i = startIndex; i <= endIndex; i++) {
        if (pageIndex == i) {
            //是当前页 加特殊样式
            pageHtml += '	<li class="active" data-pageIndex="' + i + '"><a href=href="javascript:void(0)" >' + i + '</a></li>';

        }
        else {
            //不是当前页 普通样式

            pageHtml += '	<li data-pageIndex="' + i + '"><a href="javascript:void(0)" >' + i + '</a></li>';


        }
    }


    if (pageIndex * 1 < parseInt(pageCount)) {
        pageHtml += '<li data-pageIndex="' + (pageIndex * 1 + 1) + '"><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>';
        pageHtml += '<li data-pageIndex="' + parseInt(pageCount) + '"><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>';


    }

    return pageHtml;
}
//提示函数
function tips(str) {
    var time = 3000;
    if (str.length > 10) {
        time = (str.length / 10) * 2000 + 3000;
    }
    time = time > 10000 ? 10000 : time;
    var html = '<div id="tips" class="tips" style="z-index:999; font-size:22px; position: fixed; min-width: 80px; min-height: 60px;top: calc(50% - 30px); left: calc(50% - 40px);border-radius: 3px;display:none; background:rgba(0,0,0,0.4);text-align: center;line-height: 60px; color:#fff;">' + str + '</div>';
    $("body").after(html);
    $(".tips").fadeIn(1000);
    setTimeout(function () { $(".tips").fadeOut(1000); clearInterval(); $('#tips').remove(); }, time);


}

function tipsExtend(data, str) {
    if (data.state == 'success') {
        tips(str);
    } else {
        tips(data.content);
    }
}


//上传图片后立即预览 file对象,图片容器id
function showImg(fileObj, imgId) {

    var file = fileObj.files[0];
    var r = new FileReader();
    r.readAsDataURL(file);
    $(r).load(function () {
        $('#' + imgId).attr("src", this.result);
    })

}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';'); //把cookie分割成组
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i]; //取得字符串
        while (c.charAt(0) == ' ') { //判断一下字符串有没有前导空格
            c = c.substring(1, c.length); //有的话，从第二位开始取
        }
        if (c.indexOf(nameEQ) == 0) { //如果含有我们要的name
            return unescape(c.substring(nameEQ.length, c.length)); //解码并截取我们要值
        }
    }
    return false;
}

//获取物流公司名称
function GetWuLiu(wuLiuId) {

    switch (wuLiuId) {
        case -1: return "无需物流";
        case 19: return "广东邮政物流";
        case 20: return "汇通快运";
        case 41: return "天天快递";
        case 54: return "优速物流";
        case 56: return "圆通速递";
        case 60: return "韵达快递";
        case 65: return "中通速递";
        default: return "未知";

    }
}


Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份   
        "d+": this.getDate(), //日   
        "h+": this.getHours(), //小时   
        "m+": this.getMinutes(), //分   
        "s+": this.getSeconds(), //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds() //毫秒   
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}