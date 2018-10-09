import { Component, OnInit, Input} from '@angular/core';
import { defaultOptionsClass } from '../../class/MyDateDefaultOptions';
import { MyDateService } from '../../service/myDate.service';
import { NavController } from 'ionic-angular';
import { ThemeService } from '../../service/theme.service';

@Component({
    selector: 'my-date',
    templateUrl: 'my-date.html'
})
export class MyDateComponent implements OnInit{

    @Input() maxDate: number = 15;

    private m_lsWeekList: Array<any> = ['日','一','二','三','四','五','六'];

    //月份天数
    private m_lsDaysInMon: Array<any>;

    //当前年份
    private m_nCurrentYear: number = new Date().getFullYear();

    //当前月份
    private m_nCurrentMon: number = new Date().getMonth();

    //当前日期
    private m_nCurrentDay:number = new Date().getDate();

    //显示月份数量（根据最大天数自适应,最少为2）
    private m_nShowMon: number = 2;

    //dayList数据
    private m_lsDayList: Array<any> = [];

    //点击状态
    private m_objClickState: clickState = {
        firstClickMon: 0,
        firstClickIndex: 0,
        secondClickMon: 0,
        secondClickIndex: 0
    };

    //选择次数
    private m_nSelectedCount: number = 0;

    //默认参数
    private defaultOptions: defaultOptionsClass = {
        maxDate: 15,
        inColor: "blue",
        outColor: "red",
        betweenColor: "yellow"
    }

    //dayCode
    private dayCode: number = 100;
    private minDayCode: number;
    private maxDayCode: number;

    //第一次点击
    private m_nFirst: number;

    //第二次点击
    private m_nSecond: number;

    constructor(
        public m_objMyDateService: MyDateService,
        public navCtrl: NavController,
        public m_objThemeService: ThemeService
    ) {}

    ngOnInit(){
        this.extend();
        this.init();
    }

    //参数对象合并
    private extend(){
        let currentOptions = {
            maxDate: this.maxDate,
        }

        Object.assign(this.defaultOptions,currentOptions);
    }

    //初始化
    private init(){
        this.setDaysInMon();
        this.setMons();
        this.createDateList();
    }

    //设置每月的天数
    private setDaysInMon () {
        if(this.isLeapYear(this.m_nCurrentYear)){
            this.m_lsDaysInMon = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        }else{
            this.m_lsDaysInMon = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        }
    }

    //判断是否是闰年
    private isLeapYear(currentYear: number) {
        return (currentYear % 4 == 0) && (currentYear % 100 != 0 || currentYear % 400 == 0);
    }

    //判断显示多少个月
    private setMons(){
        let currentMon = new Date().getMonth();
        let maxDateMon = new Date(new Date().getTime() + this.defaultOptions.maxDate * 24 * 3600 * 1000).getMonth();
        let maxDateYear = new Date(new Date().getTime() + this.defaultOptions.maxDate * 24 * 3600 * 1000).getFullYear();
        //判断是否跨年
        if(maxDateYear > this.m_nCurrentYear){
            maxDateMon += 12;
        }

        this.m_nShowMon = maxDateMon - currentMon == 0 ? 2 : maxDateMon - currentMon + 1;
    }

    //创建dateList数组
    private createDateList(){
        for(let i = 0; i < this.m_nShowMon; i++){
            let mon: number = this.m_nCurrentMon + i;
            let year = this.m_nCurrentYear;
            let monStr: any = ""; 
            if(mon + 1 < 10){
                monStr = '0' + (mon + 1);
            }else{
                if(mon > 11){
                    year += 1;
                    mon -= 12;
                    if(mon + 1 < 10){
                        monStr = '0' + (mon + 1);
                    }else{
                        monStr = mon;
                    }
                }else{
                    monStr = mon + 1;
                }
            }
             
            let title = year + '年' + monStr + '月';
            let daysCount = this.m_lsDaysInMon[mon];
            let dayList = [];
            let monIndex = i;
            this.addDateList(year,mon,daysCount,dayList,monIndex);
            let listObj = new dayListObj(title, year, mon, dayList);
            this.m_lsDayList.push(listObj);
        }
        this.setCode();
        this.setDefaultClickState();
    }

    //添加dateList数据
    private addDateList(year:number, mon:number,count: number,list:any,monIndex:number){
        let selected: boolean = false;
        let betweenSelected: boolean = false;
        let checkInState: boolean = false;
        let checkOutState: boolean = false;
        for(let j = 0; j < count; j++){
            this.dayCode += 1;
            let day = j + 1;
            let dayCodeObj = new dayCodeList(day,this.dayCode, selected, betweenSelected, monIndex,checkInState,checkOutState);
            list.push(dayCodeObj);
        }
        let firstDayWeek = new Date(new Date(new Date(new Date().setFullYear(year)).setMonth(mon)).setDate(1)).getDay();
        let lastDayWeek = new Date(new Date(new Date(new Date(new Date().setFullYear(year)).setMonth(mon)).setDate(1)).getTime() + (count - 1) * 24 * 3600 * 1000).getDay();
        for(let k = 0; k < firstDayWeek; k++){
            let dayCodeObj = new dayCodeList('',0, selected, betweenSelected, monIndex,checkInState,checkOutState);
            list.unshift(dayCodeObj);
        }
        for(let l = 0; l < 6-lastDayWeek; l++){
            let dayCodeObj = new dayCodeList('',0, selected, betweenSelected, monIndex,checkInState,checkOutState);
            list.push(dayCodeObj);
        }
    }

    //设置默认clickState
    private setDefaultClickState(): void{
        let self = this;
        for(let i = 0; i < self.m_lsDayList[0].dayList.length; i++){
            if(self.m_lsDayList[0].dayList[i].dayCode >= self.minDayCode && self.m_lsDayList[0].dayList[i].dayCode != 0){
                self.m_objClickState.firstClickMon = 0;
                self.m_objClickState.firstClickIndex = i;
                //如果是月份的最后一天
                if(self.m_lsDayList[0].dayList[i].day == self.m_lsDaysInMon[self.m_lsDayList[0].currentMon]){
                    self.m_objClickState.secondClickMon = 1;
                    for(let j = 0; j < self.m_lsDayList[1].dayList.length; j++){
                        if(self.m_lsDayList[1].dayList[j].dayCode != 0){
                            self.m_objClickState.secondClickIndex = j;
                            break;
                        }
                    }
                } else {
                    self.m_objClickState.secondClickMon = 0;
                    self.m_objClickState.secondClickIndex = i + 1;
                }
                break;
            }
        }
        this.setDefaultDate();
    }

    //设置默认入住离店日期
    private setDefaultDate(){
        console.log(this.m_objClickState);
        //this.m_objMyDateService.m_bIsExist  是否被选过
        if(this.m_objMyDateService.m_bIsExist){
            let defaultDate = this.m_objMyDateService.m_objSelectedDate;
            this.m_lsDayList[defaultDate.firstClickMon].dayList[defaultDate.firstClickIndex].selected = true;
            this.m_lsDayList[defaultDate.secondClickMon].dayList[defaultDate.secondClickIndex].selected = true;
            this.m_lsDayList[defaultDate.firstClickMon].dayList[defaultDate.firstClickIndex].checkInState = true;
            this.m_lsDayList[defaultDate.secondClickMon].dayList[defaultDate.secondClickIndex].checkOutState = true;
            this.setBetweenSelectedStyle(defaultDate);
        }else{
            this.m_lsDayList[this.m_objClickState.firstClickMon].dayList[this.m_objClickState.firstClickIndex].selected = true;
            this.m_lsDayList[this.m_objClickState.firstClickMon].dayList[this.m_objClickState.firstClickIndex].checkInState = true;
            this.m_lsDayList[this.m_objClickState.secondClickMon].dayList[this.m_objClickState.secondClickIndex].selected = true;
            this.m_lsDayList[this.m_objClickState.secondClickMon].dayList[this.m_objClickState.secondClickIndex].checkOutState = true;
        }
    }

    //设置dayCode最值
    private setCode(){
        this.minDayCode = this.m_nCurrentDay + 100;
        this.maxDayCode = this.m_nCurrentDay + 100 + this.defaultOptions.maxDate - 1;
    }

    //选中
    private selected(code: number,monIndex: number, index: number){
        //在预订区间内才可选
        if(code >= this.minDayCode && code <= this.maxDayCode){
            //第一次点击
            if(this.m_nSelectedCount == 0){
                this.resetDateList();
                this.m_lsDayList[monIndex].dayList[index].selected = true;
                this.m_nSelectedCount = 1;
                this.m_nFirst = code;
                this.m_objClickState.firstClickMon = monIndex;
                this.m_objClickState.firstClickIndex = index;
                this.m_lsDayList[monIndex].dayList[index].checkInState = true;
            
            //第二次点击
            }else if(this.m_nSelectedCount = 2){
                this.m_nSecond = code;

                //如果第一次选中的日期大于等于第二次选中的日期
                if(this.m_nFirst >= this.m_nSecond){
                    this.resetDateList();
                    this.m_lsDayList[monIndex].dayList[index].selected = true;
                    this.m_nSelectedCount = 1;
                    this.m_nFirst = code;
                    this.m_objClickState.firstClickMon = monIndex;
                    this.m_objClickState.firstClickIndex = index;
                    this.m_lsDayList[monIndex].dayList[index].checkInState = true;

                //如果第一次选中的日期小于第二次选中的日期
                }else{
                    this.m_lsDayList[monIndex].dayList[index].selected = true;
                    this.m_nSelectedCount = 0;
                    this.m_objClickState.secondClickIndex = index;
                    this.m_objClickState.secondClickMon = monIndex;
                    this.m_lsDayList[monIndex].dayList[index].checkOutState = true;
                    this.setBetweenSelectedStyle(this.m_objClickState);
                    this.saveClickDate(this.m_objClickState);
                    let self = this;
                    let back = setTimeout(function(){
                        self.navCtrl.pop();
                    },100);
                }
            }
        } 
    }

    //重置m_lsDayList
    private resetDateList(){
        for(let i = 0; i < this.m_lsDayList.length; i++){
            for(let j = 0; j < this.m_lsDayList[i].dayList.length; j++){
                this.m_lsDayList[i].dayList[j].selected = false;
                this.m_lsDayList[i].dayList[j].betweenSelected = false;
                this.m_lsDayList[i].dayList[j].checkInState = false;
                this.m_lsDayList[i].dayList[j].checkOutState = false;
            }
        }
    }

    private setBetweenSelectedStyle(clickState: any){
        
        if(clickState.firstClickMon == clickState.secondClickMon){
            for(let i = clickState.firstClickIndex+1; i < clickState.secondClickIndex; i++){
                if(this.m_lsDayList[clickState.firstClickMon].dayList[i].dayCode != 0){
                    this.m_lsDayList[clickState.firstClickMon].dayList[i].betweenSelected = true;
                }
            }
        }else{
            for(let i = clickState.firstClickIndex+1; i < this.m_lsDayList[clickState.firstClickMon].dayList.length; i++){
                if(this.m_lsDayList[clickState.firstClickMon].dayList[i].dayCode != 0){
                    this.m_lsDayList[clickState.firstClickMon].dayList[i].betweenSelected = true;
                }
            }
            for(let j = 0; j < clickState.secondClickIndex; j++){
                if(this.m_lsDayList[clickState.secondClickMon].dayList[j].dayCode != 0){
                    this.m_lsDayList[clickState.secondClickMon].dayList[j].betweenSelected = true;
                }
            }
        }
    }

    //保存两次选择日期
    private saveClickDate(clickState: any): void{
        let firstCurYear = this.m_lsDayList[clickState.firstClickMon].currentYear;
        let firstCurMon = this.m_lsDayList[clickState.firstClickMon].currentMon;
        let firstCurDay = this.m_lsDayList[clickState.firstClickMon].dayList[clickState.firstClickIndex].day;

        let secondCurYear = this.m_lsDayList[clickState.secondClickMon].currentYear;
        let secondCurMon = this.m_lsDayList[clickState.secondClickMon].currentMon;
        let secondCurDay = this.m_lsDayList[clickState.secondClickMon].dayList[clickState.secondClickIndex].day;

        let firstClickDate = new Date(new Date(new Date().setFullYear(firstCurYear)).setMonth(firstCurMon)).setDate(firstCurDay);
        let secondClickDate = new Date(new Date(new Date().setFullYear(secondCurYear)).setMonth(secondCurMon)).setDate(secondCurDay);

        this.m_objMyDateService.bindDate(firstClickDate, secondClickDate);
        this.m_objMyDateService.bindDateIndex(clickState);
    }
}

class dayListObj {
    currentYearAndMon: string;
    currentYear: number;
    currentMon: number;
    dayList :Array<any> = [];

    constructor(currentYearAndMon:string,currentYear:number,currentMon:number, list:Array<any>){
        this.currentYearAndMon = currentYearAndMon;
        this.dayList = list;
        this.currentYear = currentYear;
        this.currentMon = currentMon;
    }
}

class dayCodeList {
    day: any;
    dayCode: number;
    selected: boolean;
    betweenSelected: boolean;
    monIndex: number;
    checkInState: boolean;
    checkOutState: boolean;

    constructor(day:any, dayCode: number, selected: boolean, betweenSelected: boolean, monIndex:number, checkInState:boolean, checkOutState: boolean){
        this.day = day;
        this.dayCode = dayCode;
        this.selected = selected;
        this.betweenSelected = betweenSelected;
        this.monIndex = monIndex;
        this.checkInState = checkInState;
        this.checkOutState = checkOutState;
    }
}

class clickState {
    firstClickMon: number;
    firstClickIndex: number;
    secondClickMon: number;
    secondClickIndex: number;

    constructor(
        firstClickMon: number,
        firstClickIndex: number,
        secondClickMon: number,
        secondClickIndex: number
    ){
        this.firstClickMon = firstClickMon;
        this.firstClickIndex = firstClickIndex;
        this.secondClickMon = secondClickMon;
        this.secondClickIndex = secondClickIndex;
    }
}