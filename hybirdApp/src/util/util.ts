//验证手机号是否有效
export function verificationMobile(sMobile:string): boolean {
    var reg = /^(1[3-9][0-9])\d{8}$/;
    return reg.test(sMobile); 
}

//设置或跟新本地存储数据
export function setLocalData(sDataName:string, objData:any):void{
    if (sDataName != "") {
        if (objData) {
            var dataJson = JSON.stringify(objData);
            window.localStorage.setItem(sDataName, dataJson);
        }
    }
}
//获取本地存储数据
export function getLocalData(sDataName: string): any {
    if (sDataName != "") return JSON.parse(window.localStorage.getItem(sDataName));
}
//删除本地存储数据
export function removeLocalData(sDataName: string): void {
    if (sDataName != "") window.localStorage.removeItem(sDataName);
}


//设置或跟新本地存储数据
export function setSessionData(sDataName: string, objData: any,fn?:any): void {
    if (sDataName != "") {
        if (objData) {
            var dataJson = JSON.stringify(objData);
            window.sessionStorage.setItem(sDataName, dataJson);
            if (fn) fn();
        }
    }
}
//获取本地存储数据
export function getSessionData(sDataName: string): any {
    if (sDataName != "") return JSON.parse(window.sessionStorage.getItem(sDataName));
}
//删除本地存储数据
export function removeSessionData(sDataName: string): void {
    if (sDataName != "") window.sessionStorage.removeItem(sDataName);
}

//格式化星期
export function formatWeek(weekCode: number): any{
    let week: string;
    switch(weekCode)
    {
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
//初始化谷歌地图 需要引用脚本 <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBzE9xAESye6Kde-3hT-6B90nfwUkcS8Yw&sensor=false">
declare var google: any;
export function initGoogleMap(sElementID: string, nLongitude: number, nLatitude: number, sTitle: string) {
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
	} catch{

	}
}

export function fileToBase64(objFile: any, objComponent: any, objCallbackFn: Function): void {
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
        }
    }

}
//计算两个时间相差天数
export function dateDifference(sDate1,sDate2): number {
	let dateSpan, tempDate, nDays: number;
	sDate1 = Date.parse(sDate1);  //返回当前时间的毫秒数
	sDate2 = Date.parse(sDate2);
	dateSpan = sDate2 - sDate1;
	dateSpan = Math.abs(dateSpan); //返回绝对值
	nDays = Math.floor(dateSpan / (24 * 3600 * 1000)); //向下取整
	return nDays;
}

//loading弹窗
export function ShowLoading() {
    this.objBox = null;
    this.objMark = null;
    //配置参数
    this.setting = {
        content: '',
        mark:false
    }
}

ShowLoading.prototype.init = (opt)=>{
    // console.log(this.setting);
    // extend(this.setting, opt);
    this.create();
    this.close();
    if(this.setting.mark){
        this.mark;
    }
}

//动态创建加载动画
ShowLoading.prototype.create = ()=>{
    this.objBox = document.createElement("div");
    this.objBox.className = 'pq-loading';
    this.objBox.style.opacity = 0;
    this.objBox.innerHTML = `
        <div class="pq-mark"></div>
        <div class="pq-load">
            <img src='assets/imgs/loading.gif' />
        </div>
    `;
    document.body.appendChild(this.objBox);
    let nOpactity:number = 0;
    let time = setInterval(()=>{
        nOpactity += 0.20;
        this.objBox.style.opacity = nOpactity;
        if(nOpactity >= 1) clearInterval(time);
    },20)
}
//全局遮罩
ShowLoading.prototype.mark = ()=>{
    this.objMark = document.createElement('div');
    this.objMark.className = "pq-mark";
    document.body.appendChild(this.objMark);
}
//关闭窗口
ShowLoading.prototype.close = ()=>{
    document.body.removeChild(this.objBox);
    //if(this.setting.mark) document.body.removeChild(this.objMark);
}
//拷贝
export function extend(obj1,obj2){
    for(var i in obj2){
        obj1[i] = obj2[i];
    }
}