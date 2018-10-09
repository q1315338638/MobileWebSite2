import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HotelInfoService } from '../../service/hotelInfo.service';
import { ThemeService } from '../../service/theme.service';
import { ContextService } from '../../service/context.service';
import { HotelDetailsItem } from "../../model/hoteldetailsitem";

@IonicPage()
@Component({
    selector: 'page-price-filter',
    templateUrl: 'price-filter.html',
})
export class PriceFilterPage {

    private m_lsPriceRange: Array<any> = [0,100,300,500,800]; // 价格区间

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public m_objHotelInfoService: HotelInfoService,
        public m_objElement: ElementRef,
        public m_objThemeService: ThemeService,
    ) {
    }

    ionViewDidLoad() {
    }
    // 关闭modal
    dismiss() {
        this.viewCtrl.dismiss();
        this.m_objHotelInfoService.m_bIsMaskShow = false;
        this.m_objHotelInfoService.m_sPriceActive = 'down';
    }
    // 选择价格区间
    selectPriceRange(index: number): void {
        this.m_objHotelInfoService.m_lsSelectedIndex = index;
        // this.hotelListSort(index);
    }
    // 酒店列表根据价格排序
    // hotelListSort(index: number): void {
    //     // 每次排序都重新赋值
    //     this.m_objHotelInfoService.m_objHotelInfo = this.m_objHotelInfoService.m_objHotelInfoBySort;
    //     let arr: HotelDetailsItem[] = [];
    //     // index==0，即不作排序
    //     if (index == 0) {
    //         this.m_objHotelInfoService.m_objHotelInfo = this.m_objHotelInfoService.m_objHotelInfoBySort;
    //     // index == this.m_lsPriceRange.length， 即价格区间最大值至无穷大
    //     } else if (index == this.m_lsPriceRange.length) {
    //         this.m_objHotelInfoService.m_objHotelInfo.forEach(item => {
    //             if(item.MinRate > this.m_lsPriceRange[index]){
    //                 arr.push(item);
    //             }
    //         });
    //         this.m_objHotelInfoService.m_objHotelInfo = arr;
    //     } else {
    //         this.m_objHotelInfoService.m_objHotelInfo.forEach(item => {
    //             if(item.MinRate > this.m_lsPriceRange[index-1] && item.MinRate <= this.m_lsPriceRange[index]){
    //                 arr.push(item);
    //             }
    //         });
    //         this.m_objHotelInfoService.m_objHotelInfo = arr;
    //     }
    //     // 如果m_objHotelInfo为空，显示提示语
    //     if(this.m_objHotelInfoService.m_objHotelInfo.length == 0){
    //         this.m_objHotelInfoService.m_bPriceEmpty = true;
    //     }else{
    //         this.m_objHotelInfoService.m_bPriceEmpty = false;
    //     }
    //     this.dismiss();
    // }
    // hotelFilterByPrice(): void {
    //     let minPrice = this.m_objHotelInfoService.m_nMinPrice;
    //     let maxPrice = this.m_objHotelInfoService.m_nMaxPrice;
    //     let arr: HotelDetailsItem[] = [];
    //     if (minPrice != undefined || maxPrice != undefined) {
    //         // 每次排序都重新赋值
    //         this.m_objHotelInfoService.m_objHotelInfo = this.m_objHotelInfoService.m_objHotelInfoBySort;
    //         if (minPrice != undefined && maxPrice == undefined) {
    //             this.m_objHotelInfoService.m_objHotelInfo.forEach(item => {
    //                 if(item.MinRate >= minPrice){
    //                     arr.push(item);
    //                 }
    //             });
    //             console.log('min有值');
    //             this.m_objHotelInfoService.m_objHotelInfo = arr;
    //         } else if (minPrice != undefined && maxPrice != undefined) {
    //             this.m_objHotelInfoService.m_objHotelInfo.forEach(item => {
    //                 if(item.MinRate >= minPrice && item.MinRate <= maxPrice){
    //                     arr.push(item);
    //                 }
    //             });
    //             console.log('两个都有值');
    //             this.m_objHotelInfoService.m_objHotelInfo = arr;
    //         } else {
    //             this.m_objHotelInfoService.m_objHotelInfo.forEach(item => {
    //                 if(item.MinRate <= maxPrice){
    //                     arr.push(item);
    //                 }
    //             });
    //             console.log('max有值');
    //             this.m_objHotelInfoService.m_objHotelInfo = arr;
    //         }
    //     } else {
    //         this.m_objHotelInfoService.m_objHotelInfo = this.m_objHotelInfoService.m_objHotelInfoBySort;
    //     }
    //     this.dismiss();
    // }
}
