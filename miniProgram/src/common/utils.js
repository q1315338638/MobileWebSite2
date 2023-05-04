
export function fnGetDateFormat (date) {
  const today = dayjs().format('MM-DD');
  if (dayjs(date).format('MM-DD') === today) return '今天';
  if (dayjs(date).format('MM-DD') === dayjs(today).add(1, 'day').format('MM-DD')) return '明天';
  if (dayjs(date).format('MM-DD') === dayjs(today).add(2, 'day').format('MM-DD')) return '后天';
  return dayjs(date).format('MM-DD');
}
/**
 * 作者：tmzdy
 * 延时操作
 * @param {Number} wait = [500] 延时
 */
export function fnSleep (wait = 500, callback) {
  let timid = null;
  clearTimeout(timid);
  return new Promise((res, rej) => {
    timid = setTimeout(function () {
      res();
      callback && callback()
    }, wait);
  })
}
export function fnQueryDom (clsaaName, t, ycnum = 50, isAll) {

  return new Promise(async (rs, rj) => {

    if (isAll == true) {

      // #ifdef APP-VUE || APP-PLUS
      ycnum = 60
      await fnSleep(ycnum)
      uni.createSelectorQuery().in(t ? t : this).select(clsaaName)
        .boundingClientRect().exec(
          function (res) {
            rs(res)
          })
      // #endif
      // #ifdef MP
      await fnSleep(ycnum)
      uni.createSelectorQuery().in(t ? t : this).selectAll(clsaaName)
        .boundingClientRect().exec(
          function (res) {
            rs(res)
          })
      // #endif
      // #ifdef H5

      uni.createSelectorQuery().in(t ? t : this).selectAll(clsaaName)
        .boundingClientRect().exec(
          function (res) {
            rs(res)
          })

      // #endif
    } else {

      // #ifdef APP-VUE || APP-PLUS
      ycnum = 60
      await fnSleep(ycnum)
      uni.createSelectorQuery().in(t ? t : this).select(clsaaName)
        .boundingClientRect().exec(
          function (res) {
            rs(res)
          })
      // #endif
      // #ifdef MP
      await fnSleep(ycnum)
      uni.createSelectorQuery().in(t ? t : this).select(clsaaName)
        .boundingClientRect().exec(
          function (res) {
            rs(res)
          })
      // #endif
      // #ifdef H5

      uni.createSelectorQuery().in(t ? t : this).select(clsaaName)
        .boundingClientRect().exec(
          function (res) {
            rs(res)
          })

      // #endif
    }
    // console.log(ycnum);

  })
}
// 可选择时间区间
export function fnInitTreeSelectList (day, interval, notNow) {
  const now = new Date();
  // 19 + 2 = 21
  const nowHour = dayjs(now).add(interval, 'hour').format('HH');
  const forSum = Math.ceil(24 / interval); // 每一天遍历次数
  const todaySum = ['23', '00', '01'].indexOf(nowHour) === -1 ? Math.ceil((24 - nowHour) / interval) : 0; // 今天遍历次数
  let daysList = [];
  for (let i = 0; i < day; i++) {
    let date = dayjs(now).add(i, 'day'); // 今天的日期
    let hourList = [];
    if (i !== 0) {
      for (let j = 0; j < forSum; j++) {
        const curHour = dayjs('2000-01-01 00:00').add(j * interval, 'hour');
        hourList.push({
          value: i + '-' + j,
          label: `${dayjs(curHour).format('HH:00')}-${dayjs(curHour).add(interval, 'hour').format('HH:00')}`
        })
      }
    } else {
      // 今天
      if (!notNow) {
        hourList.push({
          value: i + '-' + '100',
          label: `${interval}小时内`,
          remark: `${dayjs(now).format('HH:00')}-${dayjs(now).add(interval, 'hour').format('HH:00')}`
        })
      }
      let newNow = now;
      // 当前时间不为interval可整除的
      let curHour = +dayjs(newNow).format('HH');
      if (curHour % interval !== 0) {
        for (let i = 1; i < 10; i++) {
          let newHour = dayjs(newNow).add(i, 'hour');
          let hourNum = +dayjs(newHour).format('HH');
          if (hourNum % interval === 0) {
            newNow = newHour;
            break;
          }
        }
      }
      for (let j = 0; j < todaySum; j++) {
        let curHour = dayjs(newNow).add((j + 1) * interval, 'hour');
        hourList.push({
          value: i + '-' + j,
          label: `${dayjs(curHour).format('HH:00')}-${dayjs(curHour).add(interval, 'hour').format('HH:00')}`,
        })
        if (dayjs(curHour).format('HH') === '22') break;
      }
    }
    if (hourList.length) {
      daysList.push({
        value: i,
        label: fnGetDateFormat(date),
        remark: dayjs(date).format('YYYY-MM-DD'),
        children: hourList
      })
    }

  }
  return daysList;
}
// 防抖
export function fnAntiShake (fn, wait = 1000, immediate) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    if (immediate) {
      // 如果已经执行过，不再执行
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait)
      if (callNow) {
        fn.apply(this, arguments)
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, wait);
    }
  }
}
// 验证数字是否正数(可包含两位小数)
export function fnVerifyPrice (str) {
  return /^\d+(\.\d{1,2})?$/.test(str)
}
// 返回多少分钟后的中文
export function fnCommentTimeHandle (dateStr) {
  //获取到秒的时间戳
  let publishTime = Date.parse(new Date(dateStr)).toString().substr(0, 10),
    //获取dateStr的标准格式
    date = new Date(publishTime * 1000),
    // 获取date 中的 年 月 日 时 分 秒
    Y = date.getFullYear(),
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  // 对 月 日 时 分 秒 小于10时, 加0显示 例如: 09-09 09:01
  if (M < 10) {
    M = '0' + M;
  }
  if (D < 10) {
    D = '0' + D;
  }
  if (H < 10) {
    H = '0' + H;
  }
  if (m < 10) {
    m = '0' + m;
  }
  if (s < 10) {
    s = '0' + s;
  }
  let nowTime = new Date().getTime() / 1000, //获取此时此刻日期的秒数
    diffValue = nowTime - publishTime, // 获取此时 秒数 与 要处理的日期秒数 之间的差值
    diff_days = parseInt(diffValue / 86400), // 一天86400秒 获取相差的天数 取整
    diff_hours = parseInt(diffValue / 3600), // 一时3600秒
    diff_minutes = parseInt(diffValue / 60),
    diff_secodes = parseInt(diffValue);
  if (diff_days > 0 && diff_days < 3) { //相差天数 0 < diff_days < 3 时, 直接返出
    return diff_days + "天前";
  } else if (diff_days <= 0 && diff_hours > 0) {
    return diff_hours + "小时前";
  } else if (diff_hours <= 0 && diff_minutes > 0) {
    return diff_minutes + "分钟前";
  } else if (diff_secodes < 60) {
    if (diff_secodes <= 0) {
      return "刚刚";
    } else {
      return diff_secodes + "秒前";
    }
  } else if (diff_days >= 3 && diff_days < 30) {
    return M + '-' + D + ' ' + H + ':' + m;
  } else if (diff_days >= 30) {
    return Y + '-' + M + '-' + D + ' ' + H + ':' + m;
  }
}
// 返回多少分钟后的中文(账单用)
export function fnAccountCommentTime (date) {
  //date = parseInt(date);  //强转整型
  let tDate = dayjs().format('YYYY-MM-DD');  //当前凌晨时间(string)
  let tTime = new Date(tDate).getTime(); //当前凌晨时间(long)
  let eTime = 24 * 60 * 60 * 1000;  //⼀天时间(long)
  let yTime = tTime - eTime;  //昨天凌晨时间(long)
  let byTime = tTime - 2 * eTime;  //前天凌晨时间(long)
  let formatDate = dayjs(date).format('HH:mm');    //转成时分格式
  let result;
  if (date >= tTime) {
    //今天
    result = '今天 ' + formatDate;
  } else if (date < tTime && date >= yTime) {
    //昨天
    result = '昨天 ' + formatDate;
  } else if (date < yTime && date >= byTime) {
    //前天
    result = '前天 ' + formatDate;
  } else {
    //前天之前
    result = dayjs(date).format("MM-DD HH:mm");
  }
  return result;
}
// 获取格式化后的距离
export function getDistance (distance) {
  distance = Math.ceil(distance);
  return distance > 1000 ? (distance / 1000).toFixed(1) + 'km' : distance + 'm'
}

/**校验手机号码。合法返回True */
export function fnVerifyMobile (sMobile) {
  var format = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
  if (format.test(sMobile)) return true;
  return false;
}

/**校验身份证。合法返回True */
export function fnVerifyCardNo (sIDCard) {
  // 1 "验证通过!", 0 //校验不通过 // id为身份证号码
  var format =
    /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
  //号码规则校验
  if (!format.test(sIDCard)) {
    //   return {'status':0,'msg':'身份证号码不合规'};
    return false;
  }
  //区位码校验
  //出生年月日校验  前正则限制起始年份为1900;
  var year = Number(sIDCard.substr(6, 4)), //身份证年
    month = Number(sIDCard.substr(10, 2)), //身份证月
    date = Number(sIDCard.substr(12, 2)), //身份证日
    time = Date.parse(month + '-' + date + '-' + year), //身份证日期时间戳date
    newDate = new Date(),
    now_time = Date.parse(newDate), //当前时间戳
    dates = (new Date(year, month, 0)).getDate(); //身份证当月天数
  if (time > now_time || date > dates) {
    //   return {'status':0,'msg':'出生日期不合规'}
    return false;
  }
  //校验码判断
  var c = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //系数
  var b = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'); //校验码对照表
  var id_array = sIDCard.split("");
  var sum = 0;
  for (var i = 0; i < 17; i++) {
    sum += parseInt(id_array[i]) * parseInt(c[i]);
  }
  if (id_array[17].toUpperCase() != b[sum % 11].toUpperCase()) {
    //   return {'status':0,'msg':'身份证校验码不合规'}
    return false;
  }
  return true;
}

/**身份证号获取生日 */
export function fnIDCardGetBirthday (sIDCard) {
  let sBirthday = '';
  if (sIDCard.length == 15) {
    sBirthday = "19" + sIDCard.substr(6, 6);
  } else if (sIDCard.length == 18) {
    sBirthday = sIDCard.substr(6, 8);
  }
  if (!sBirthday) return '';
  return `${sBirthday.substring(0, 4)}-${sBirthday.substring(4, 6)}-${sBirthday.substring(6, 8)}`;
}

// 去除左右两端空格
export function fnTrim (str) {
  return str.toString().replace(/^\s*|\s*$/g, '');
}

// 去除全部空格
export function fnAllTrim (str) {
  return str.toString().replace(/\s+/g, "");
}

/*
 * 数组去重
 * 速度最快， 占空间最多（空间换时间）
 *
 * 该方法执行的速度比其他任何方法都快， 就是占用的内存大一些。
 * 现思路：新建一js对象以及新数组，遍历传入数组时，判断值是否为js对象的键，
 * 不是的话给对象新增该键并放入新数组。
 * 注意点：判断是否为js对象键时，会自动对传入的键执行“toString()”，
 * 不同的键可能会被误认为一样，例如n[val]-- n[1]、n["1"]；
 * 解决上述问题还是得调用“indexOf”。*/

export function fnUniq (array) {
  let temp = {},
    r = [],
    len = array.length,
    val, type;
  for (let i = 0; i < len; i++) {
    val = array[i];
    type = typeof val;
    if (!temp[val]) {
      temp[val] = [type];
      r.push(val);
    } else if (temp[val].indexOf(type) < 0) {
      temp[val].push(type);
      r.push(val);
    }
  }
  return r;
}

// 文本复制到剪切板
export function fnCopyText (sText) {
  // 该版本不兼容IOS
  // let textarea = document.createElement("textarea");
  // textarea.innerHTML = sText;
  // document.body.appendChild(textarea);
  // textarea.select();
  // document.execCommand("Copy"); // 执行浏览器复制命令
  // document.body.removeChild(textarea);


  // 数字没有 .length 不能执行selectText 需要转化成字符串
  const textString = sText.toString();
  // if (!input) {
  let input = document.createElement('input');
  input.id = "copy-input";
  input.readOnly = "readOnly"; // 防止ios聚焦触发键盘事件
  input.style.position = "absolute";
  input.style.left = "-1000px";
  input.style.zIndex = "-1000";
  document.body.appendChild(input)
  // }

  input.value = textString;
  // ios必须先选中文字且不支持 input.select();
  selectText(input, 0, textString.length);
  console.log(document.execCommand('copy'), 'execCommand');
  if (document.execCommand('copy')) {
    document.execCommand('copy');
  }
  input.blur();

  // input自带的select()方法在苹果端无法进行选择，所以需要自己去写一个类似的方法
  // 选择文本。createTextRange(setSelectionRange)是input方法
  function selectText (textbox, startIndex, stopIndex) {
    if (textbox.createTextRange) { //ie
      const range = textbox.createTextRange();
      range.collapse(true);
      range.moveStart('character', startIndex); //起始光标
      range.moveEnd('character', stopIndex - startIndex); //结束光标
      range.select(); //不兼容苹果
    } else { //firefox/chrome
      textbox.setSelectionRange(startIndex, stopIndex);
      textbox.focus();
    }
  }

}

/**判断是苹果还是安卓 */
export function fnIsAndroidOrApple () {
  if ((/android/gi).test(navigator.appVersion)) {
    return 'android';
  } else if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (
    navigator.userAgent.indexOf('iPad') != -1)) {
    return 'ios'
  }
}

//ios 软键盘处理，页面错位(无法点击输入，无法点击按钮)恢复问题
export function fnIOSKeyboardFixed () {
  var isReset = true;

  function scrollTO () {
    //软键盘收起的事件处理
    isReset = true;
    setTimeout(function () {
      //当焦点在弹出层的输入框之间切换时先不归位
      if (isReset) {
        window.scrollTo(0, 0); //失焦后强制让页面归位
      }
    }, 300);
  }

  if (fnIsAndroidOrApple() == 'ios') { //ios
    document.body.addEventListener('focusin', function () {
      //软键盘弹出的事件处理
      isReset = false;
    });
    document.body.addEventListener('focusout', scrollTO);
  }
}

// 判断是否是微信浏览器
export function fnIsWeiXin () {
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  var ua = window.navigator.userAgent.toLowerCase();
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
}
export function fnObjToJSON (objData) {
  let sData = '?';
  for (let key in objData) {
    sData +=
      `${key}=${typeof (objData[key]) != 'string' && typeof (objData[key]) != 'number' ? JSON.stringify(objData[key]) : objData[key]}&`;
  }
  return sData.slice(0, sData.length - 1);
}
// UC浏览器/QQ浏览器分享
export function fnShare (config) {
  // if (!document.getElementById(elementNode)) {
  //     return false;
  // }

  var qApiSrc = {
    lower: "//3gimg.qq.com/html5/js/qb.js",
    higher: "//jsapi.qq.com/get?api=app.share"
  };
  var bLevel = {
    qq: {
      forbid: 0,
      lower: 1,
      higher: 2
    },
    uc: {
      forbid: 0,
      allow: 1
    }
  };
  var UA = navigator.appVersion;
  var isqqBrowser = (UA.split("MQQBrowser/").length > 1) ? bLevel.qq.higher : bLevel.qq.forbid;
  var isucBrowser = (UA.split("UCBrowser/").length > 1) ? bLevel.uc.allow : bLevel.uc.forbid;
  var version = {
    uc: "",
    qq: ""
  };
  var isWeixin = false;

  config = config || {};
  // this.elementNode = elementNode;
  this.url = config.url || document.location.href || '';
  this.title = config.title || document.title || '';
  this.desc = config.desc || document.title || '';
  this.img = config.img || document.getElementsByTagName('img').length > 0 && document.getElementsByTagName('img')[0]
    .src || '';
  this.img_title = config.img_title || document.title || '';
  this.from = config.from || window.location.host || '';
  this.ucAppList = {
    sinaWeibo: ['kSinaWeibo', 'SinaWeibo', 11, '新浪微博'],
    weixin: ['kWeixin', 'WechatFriends', 1, '微信好友'],
    weixinFriend: ['kWeixinFriend', 'WechatTimeline', '8', '微信朋友圈'],
    QQ: ['kQQ', 'QQ', '4', 'QQ好友'],
    QZone: ['kQZone', 'QZone', '3', 'QQ空间']
  };

  this.share = function (to_app) {
    var title = this.title,
      url = this.url,
      desc = this.desc,
      img = this.img,
      img_title = this.img_title,
      from = this.from;
    if (isucBrowser) {
      to_app = to_app == '' ? '' : (platform_os == 'iPhone' ? this.ucAppList[to_app][0] : this.ucAppList[
        to_app][1]);
      if (to_app == 'QZone') {
        B = "mqqapi://share/to_qzone?src_type=web&version=1&file_type=news&req_type=1&image_url=" + img +
          "&title=" + title + "&description=" + desc + "&url=" + url + "&app_name=" + from;
        k = document.createElement("div"), k.style.visibility = "hidden", k.innerHTML = '<iframe src="' +
          B + '" scrolling="no" width="1" height="1"></iframe>', document.body.appendChild(k), setTimeout(
            function () {
              k && k.parentNode && k.parentNode.removeChild(k)
            }, 5E3);
      }
      if (typeof (ucweb) != "undefined") {
        ucweb.startRequest("shell.page_share", [title, title, url, to_app, "", "@" + from, ""])
      } else {
        if (typeof (ucbrowser) != "undefined") {
          ucbrowser.web_share(title, title, url, to_app, "", "@" + from, '')
        } else { }
      }
    } else {
      if (isqqBrowser && !isWeixin) {
        to_app = to_app == '' ? '' : this.ucAppList[to_app][2];
        var ah = {
          url: url,
          title: title,
          description: desc,
          img_url: img,
          img_title: img_title,
          to_app: to_app, //微信好友1,腾讯微博2,QQ空间3,QQ好友4,生成二维码7,微信朋友圈8,啾啾分享9,复制网址10,分享到微博11,创意分享13
          cus_txt: "请输入此时此刻想要分享的内容"
        };
        ah = to_app == '' ? '' : ah;
        if (typeof (browser) != "undefined") {
          if (typeof (browser.app) != "undefined" && isqqBrowser == bLevel.qq.higher) {
            browser.app.share(ah)
          }
        } else {
          if (typeof (window.qb) != "undefined" && isqqBrowser == bLevel.qq.lower) {
            window.qb.share(ah)
          } else { }
        }
      } else { }
    }
  };

  // this.html = function() {
  //     var position = document.getElementById(this.elementNode);
  //     var html = '<div class="label">分享到</div>'+
  //         '<div class="list clearfix">'+
  //         '<span data-app="sinaWeibo" class="nativeShare weibo"><i></i>新浪微博</span>'+
  //         '<span data-app="weixin" class="nativeShare weixin"><i></i>微信好友</span>'+
  //         '<span data-app="weixinFriend" class="nativeShare weixin_timeline"><i></i>微信朋友圈</span>'+
  //         '<span data-app="QQ" class="nativeShare qq"><i></i>QQ好友</span>'+
  //         '<span data-app="QZone" class="nativeShare qzone"><i></i>QQ空间</span>'+
  //         '<span data-app="" class="nativeShare more"><i></i>更多</span>'+
  //         '</div>';
  //     position.innerHTML = html;
  // };

  this.isloadqqApi = function () {
    if (isqqBrowser) {
      var b = (version.qq < 5.4) ? qApiSrc.lower : qApiSrc.higher;
      var d = document.createElement("script");
      var a = document.getElementsByTagName("body")[0];
      d.setAttribute("src", b);
      a.appendChild(d)
    }
  };

  this.getPlantform = function () {
    ua = navigator.userAgent;
    if ((ua.indexOf("iPhone") > -1 || ua.indexOf("iPod") > -1)) {
      return "iPhone"
    }
    return "Android"
  };

  this.is_weixin = function () {
    var a = UA.toLowerCase();
    if (a.match(/MicroMessenger/i) == "micromessenger") {
      return true
    } else {
      return false
    }
  };

  this.getVersion = function (c) {
    var a = c.split("."),
      b = parseFloat(a[0] + "." + a[1]);
    return b
  };

  this.init = function () {
    platform_os = this.getPlantform();
    version.qq = isqqBrowser ? this.getVersion(UA.split("MQQBrowser/")[1]) : 0;
    version.uc = isucBrowser ? this.getVersion(UA.split("UCBrowser/")[1]) : 0;
    isWeixin = this.is_weixin();
    if ((isqqBrowser && version.qq < 5.4 && platform_os == "iPhone") || (isqqBrowser && version.qq < 5.3 &&
      platform_os == "Android")) {
      isqqBrowser = bLevel.qq.forbid
    } else {
      if (isqqBrowser && version.qq < 5.4 && platform_os == "Android") {
        isqqBrowser = bLevel.qq.lower
      } else {
        if (isucBrowser && ((version.uc < 10.2 && platform_os == "iPhone") || (version.uc < 9.7 &&
          platform_os == "Android"))) {
          isucBrowser = bLevel.uc.forbid
        }
      }
    }
    this.isloadqqApi();
  };

  this.init();
  return this;
};

function rad (d) { //根据经纬度判断距离
  return d * Math.PI / 180.0;
};

export function fnGetDistance (lat1, lng1, lat2, lng2) {
  let radLat1 = rad(lat1);
  let radLat2 = rad(lat2);
  let a = radLat1 - radLat2;
  let b = rad(lng1) - rad(lng2);
  let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
  s = s * 6378.137;
  s = Math.round(s * 10000) / 10000;
  s = s.toFixed(2); // + '公里' 保留两位小数
  console.log('经纬度计算的距离:' + s + '公里')
  return s
};

export function fnGetScale (lat1, lng1, lat2, lng2) {
  //地图缩放级别计算
  var zoom = 10, distance = fnGetDistance(lat1, lng1, lat2, lng2);
  if (distance <= 0.3) {
    zoom = 17
  } else if (distance > 0.3 && distance <= 0.5) {
    zoom = 16
  } else if (distance > 0.5 && distance <= 1) {
    zoom = 15
  } else if (distance > 1 && distance <= 10) {
    zoom = 12
  } else if (distance > 10 && distance <= 50) {
    zoom = 10
  } else if (distance > 50 && distance <= 120) {
    zoom = 9
  } else {
    zoom = 8
  }
  return zoom;
}

export function fnCompare (property) {
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value1 - value2;
  }
}

export function arrToTree (arr, idKey = "id", pidKey = "iPid") {
  arr.sort(fnCompare('addDate'))
  let copyArr = arr.map(item => Object.assign(item));
  let indexArr = [];
  arr.filter((father, index) => {
    let copy = copyArr[index];
    let branchArr = copyArr.filter((child, index) => {
      let flag = father[idKey] === child[pidKey];
      if (flag) {
        indexArr.push(index);
      }
      return flag; // 返回每一项的子级数组
    });
    if (branchArr.length > 0) {
      if (copy.children instanceof Array) {
        copy.children = copy.children.concat(branchArr);
      } else {
        copy.children = branchArr;
      }
    }
  });
  indexArr.sort(function (a, b) {
    return b - a;
  });
  indexArr.map(index => {
    copyArr.splice(index, 1);
  });
  return copyArr; // 返回树形数据
}

// 微信版本号比较 compareVersion('1.11.0', '1.9.9') // 1
export function compareVersion (v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i])
    const num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}