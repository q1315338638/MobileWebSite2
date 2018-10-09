import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ContextService } from '../../service/context.service';
import { MyDateService } from '../../service/myDate.service';
import { HotelInfoService } from '../../service/hotelInfo.service';
import { ThemeService } from '../../service/theme.service';
import { GetLocationService } from '../../service/getLocation.service';

@IonicPage()
@Component({
    selector: 'page-modal-hotel-filter',
    templateUrl: 'modal-hotel-filter.html',
})
export class ModalHotelFilterPage {

    m_nPageIndex: number = 1;
    m_nPageSize: number = 20;

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        public m_objGetLocationService: GetLocationService,
        public m_objContextService: ContextService,
        public m_objMyDateService: MyDateService,
        public m_objHotelInfoService: HotelInfoService,
        public viewCtrl: ViewController,
        public m_objThemeService: ThemeService,
        public m_objElement: ElementRef,
    ) {
    }

    ionViewDidLoad() {
    }

    search(){
        this.dismiss();
        let inDate = this.m_objMyDateService.m_objDate.checkInDate;
        let outDate = this.m_objMyDateService.m_objDate.checkOutDate;
        let cityNo = this.m_objGetLocationService.m_nCityNo;
        let checkInDate = inDate.year + '-' + inDate.mon + '-' + inDate.day;
        let checkOutDate = outDate.year + '-' + outDate.mon + '-' + outDate.day;
		let searchTag = this.m_objContextService.m_sSearchTag;
		this.m_objHotelInfoService.m_objHotelInfo = [];
        this.m_objHotelInfoService.getHotelInfo(searchTag,cityNo,this.m_nPageIndex,this.m_nPageSize,checkInDate,checkOutDate);
    }

    dismiss() {
        this.viewCtrl.dismiss();
        this.m_objHotelInfoService.m_bIsMaskShow = false;
        this.m_objHotelInfoService.m_sActived = 'down';
    }

}
