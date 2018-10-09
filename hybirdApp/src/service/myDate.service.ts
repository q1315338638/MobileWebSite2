import { Injectable } from '@angular/core';
import { formatWeek } from '../util/util';

@Injectable()
export class MyDateService {

    public m_bIsExist: boolean = false;
    public m_objDate: dateClass;
    public m_objSelectedDate: any;

    constructor() {
        this.defaultDate();
    }

    public bindDate(checkInDate: number, checkOutDate: number){
        this.m_bIsExist = true;
        let inDate: formatDateClass = this.formatDate(checkInDate);
        let outDate: formatDateClass = this.formatDate(checkOutDate);
        let count = Math.floor(new Date(checkOutDate - checkInDate).getTime() / 24 / 3600 / 1000);
        let dateClassObj = new dateClass(inDate, outDate, count);
        this.m_objDate = dateClassObj;
        console.log(this.m_objDate);
    }

    public bindDateIndex(dateIndexObj: any){
        this.m_objSelectedDate = dateIndexObj;
    }

    public defaultDate(): void{
        let defaultInDate: formatDateClass = this.formatDate(new Date().getTime());
        let defaultoutDate: formatDateClass = this.formatDate(new Date(new Date().getTime() + 24*3600*1000).getTime());
        let defaultCount = 1;
        let defaultDateClassObj = new dateClass(defaultInDate, defaultoutDate, defaultCount);
        this.m_objDate = defaultDateClassObj;
    }

    private formatDate(date: number): any{
        let _dateObj = new Date(date);
        let _year: any = _dateObj.getFullYear();
        let _mon: any = _dateObj.getMonth() + 1;
        if(_mon < 10){
            _mon = '0' + _mon;
        }
        let _week: any = formatWeek(_dateObj.getDay());
        let _day: any = _dateObj.getDate();
        if(_day < 10){
            _day = '0' + _day;
        }
        let obj = new formatDateClass(_year, _mon, _week, _day);
        return obj;
    }
}

export class dateClass{
    checkInDate: formatDateClass;
    checkOutDate: formatDateClass;
    dayCount: number;

    constructor(
        checkInDate: any,
        checkOutDate: any,
        dayCount: number
    ){  
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.dayCount = dayCount;
    }
}

export class formatDateClass{
    year: any;
    mon: any;
    week: any;
    day: any;
    _date: any;

    constructor(
        year: any,
        mon: any,
        week: any,
        day: any
    ){
        this.year = year;
        this.mon = mon;
        this.week = week;
        this.day = day;
        this._date = year + '-' + mon + '-' + day;
    }
}
