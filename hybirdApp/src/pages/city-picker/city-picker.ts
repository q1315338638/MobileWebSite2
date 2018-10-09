import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content} from 'ionic-angular';
import { GetLocationService } from '../../service/getLocation.service';
import { ContextService } from '../../service/context.service';
import { ApiurlService } from '../../service/apiurl.service';

@IonicPage()
@Component({
  selector: 'page-city-picker',
  templateUrl: 'city-picker.html'
})
export class CityPickerPage implements OnInit, AfterViewInit{
    
    public m_sCityData: any;  //保存城市数据
    private m_lsFirstLetterList: Array<any> = [];  //保存城市拼音首字母
    public m_lsFormatedDataList: Array<any> = [];  //保存格式化的城市数据
    public m_lsCityNameList: Array<string> = [];  //保存城市名
    public m_nCityCode:number;  //保存城市代码
    private m_lsOffsetTopList: Array<any> = [];  //保存首字母行对应的offsetTop值
    public m_sToastLetter: string;  //保存选中的首字母
    public m_bToastShow: boolean = false;  //字母选中toast是否显示

    @ViewChild(Content) content: Content;

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public m_objlocationService: GetLocationService,
        private elementRef: ElementRef,
        public m_objContextService: ContextService,
        public m_objApiUrl: ApiurlService,
    ) {}

    ngOnInit(){
        if (localStorage.getItem("[cityList]")) {
            this.m_sCityData = JSON.parse(localStorage["[cityList]"]).Data;
            this.cityListSort(this.m_sCityData);
        } else {
            this.m_objContextService.getCity(() => {
                this.m_sCityData = JSON.parse(localStorage["[cityList]"]).Data;
                this.cityListSort(this.m_sCityData);
            });
        }
    }

    ngAfterViewInit(){
        //页面加载完成后获取offsetTop值
        this.getOffsetTop(this.m_lsFirstLetterList);
    }

    strSort(a, b) :any {
        return a.objCity.citySort.charCodeAt() - b.objCity.citySort.charCodeAt();
    }
    //根据城市拼音首字母进行排序
    cityListSort(data) :void{
        for (let i = 0; i < data.length; i++) {
            let arr = data[i].PY;
            let reg = /[a-z,A-Z]/g;
			let str = arr.match(reg).join("");
			let key = "citySort";
			data[i].objCity[key] = str;
		}
        data.sort(this.strSort);
        this.formatCityData(data);
    }
    //格式化城市数据
    formatCityData(data) :void{
        let isRepeat: boolean = false;
        let repeatIndex: number;
        for(let i = 0; i < data.length; i++){
            let firstLetter = data[i].PY[0].toUpperCase();
            this.m_lsCityNameList.push(data[i].objCity.CityName);
            if(this.m_lsFormatedDataList.length == 0){
                this.m_lsFirstLetterList.push(firstLetter);
                let list: any = data[i].objCity;
                let cityObj = new cityListObj(firstLetter, list);
                this.m_lsFormatedDataList.push(cityObj);
            }else{
                for(let j = 0; j < this.m_lsFormatedDataList.length; j++){
                    if(firstLetter == this.m_lsFormatedDataList[j].firstLetter){
                        isRepeat = true;
                        repeatIndex = j;
                    }
                }
                if(isRepeat){
                    let list: any = data[i].objCity;
                    this.m_lsFormatedDataList[repeatIndex].arr.push(list);
                }else{
                    this.m_lsFirstLetterList.push(firstLetter);
                    let list: any = data[i].objCity;
                    let cityObj = new cityListObj(firstLetter, list);
                    this.m_lsFormatedDataList.push(cityObj);
                }
            }  
        }
        console.log(this.m_lsFormatedDataList);
    }
    //刷新定位
    locationRefresh():void{
        this.m_objlocationService.getLocationCity('baiduLocation');
    }

    //选择城市
    selectCity(cityName:string, cityCode:number): void{
        this.m_objlocationService.m_sSelectedCity = cityName;
        this.m_nCityCode = cityCode;
        this.m_objlocationService.m_nCityNo = cityCode;
        this.navCtrl.pop();
    }
    //获取offsetTop
    getOffsetTop(arr:Array<any>){
        for(let i = 0; i < arr.length; i++){
            let eleOffsetTop = this.elementRef.nativeElement.querySelector("#" + arr[i]).offsetTop;
            this.m_lsOffsetTopList.push(eleOffsetTop);
        }
    }
    //滚动条移动至选中字母栏
    scrollMoveTo(index:string): void{
        this.m_sToastLetter = this.m_lsFirstLetterList[index];
        let scrollDistance = this.m_lsOffsetTopList[index];
        this.content.scrollTo(0, scrollDistance, 300);
        this.createdModal();
    }
    //创建选中字母Toast
    createdModal(){
        this.m_bToastShow = true;

        let timeOut = setTimeout(() => {
            this.m_bToastShow = false;
        }, 800);
    }
    //输入
    onInput(event){
        this.searchByRegExp(event.target.value);
    }
    //清空
    onCancel(event){
        event.target.value = "";
    }
    //搜索内容正则处理
    searchByRegExp(keyWord){
        let list = this.m_sCityData;
        let arr = [];
        let reg = new RegExp(keyWord);
        list.forEach(s => {
            if(s.objCity.CityName.match(reg)){
                arr.push(s);
            }
        });
        this.m_lsFirstLetterList = [];
        this.m_lsFormatedDataList = [];
        this.m_lsOffsetTopList = [];
        this.cityListSort(arr);
        console.log(arr);
    }
}

class cityListObj {
    firstLetter: string;
    arr :Array<any> = [];

    constructor(name:string, list:Array<any>){
        this.firstLetter = name;
        this.arr.push(list);
    }
}