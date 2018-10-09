import { Injectable } from '@angular/core';
import { getLocalData } from '../util/util';
import { ApiurlService } from '../service/apiurl.service';
import { AlertService } from './alert.service';
import { HotelDetailsItem } from '../model/hoteldetailsitem';

@Injectable()
export class HotelInfoService {

    public m_objHotelInfo: HotelDetailsItem[] = [];
    public m_bIsMaskShow: boolean = false;
    public m_IsEmpty: boolean = false;
    public m_bPriceEmpty: boolean = false;
    public m_sActived: string = 'down';
    public m_sPriceActive: string = 'down';
    public m_sFilterModalState: string = 'close';
    public m_lsChainService: Array<any> = [];
    public m_nPageCount: number;
    public m_lsSelectedIndex: number; // 价格区间选中下标
    public m_nMinPrice: number;
    public m_nMaxPrice: number;

    constructor(
        public apiUrl: ApiurlService,
        public m_objAlert: AlertService,
    ) {}
    
    getHotelInfo(Tag, CityNo, PageIndex, PageSize, Arrive, Depart,callback?:any): void{
        let loading = this.m_objAlert.loading('');
        this.apiUrl.getHotelInfo(Tag, CityNo, PageIndex, PageSize, Arrive, Depart).subscribe(u => {
            loading.dismiss();
            this.m_nPageCount = u.Data.PageCount;
            this.setHotelInfo(u);
            if(callback) (callback())
        })
    }

    setHotelInfo(data: any){
        data.Data.DataSet.forEach(item => {
            this.m_objHotelInfo.push(item);
        });
        if(this.m_objHotelInfo.length == 0){
            this.m_IsEmpty = true;
        }else{
            this.m_IsEmpty = false;
            let arr: Array<any> = [];
            this.m_objHotelInfo.forEach(item => {
                arr.push(item.Chain.ChainID);
            })
            this.m_objHotelInfo.forEach(ele => {
                this.apiUrl.getHotelComment(ele.Chain.ChainID,0,1,1,0).subscribe(u => {
                    ele.CommentCount = u.Data.RowCount;
                })
                // //初始化数组
                // ele.AttachedInfo.ChainRoomService = [];
                // let arr = ele.AttachedInfo.ChainService.split(',');
                // let length = arr.length;
                // if(length>3) length = 3;
                // for(let i=0; i<length; i++){
                //     ele.AttachedInfo.ChainRoomService.push(arr[i].split('_')[0]);
                // }
            });
            console.log(this.m_objHotelInfo);
            // this.getChainRommService(arr, this.m_objHotelInfo);
        }
        localStorage.setItem('[hotelInfo]', JSON.stringify(data));
    }
    // getChainRommService(arr: Array<any>, hotelInfo: any): void{
    //     let objChainServiceCondition: objQueryChainServiceCondition = new objQueryChainServiceCondition;
    //     objChainServiceCondition.chainIDList = arr;
    //     this.apiUrl.getChainRoomServiceInfo(objChainServiceCondition).subscribe(u => {
    //         let list = [];
    //         hotelInfo.forEach(item => {
    //             u.Data.forEach(ele => {
    //                 if(ele.ChainID == item.Chain.ChainID && ele.ServiceTypeID !=0 && ele.Flag == 1 && list.length < 3){
    //                     list.push(ele);
    //                 }
    //             });
    //             item.ChainRoomService = list;
    //         });
    //         localStorage.setItem('ChainRoomService',JSON.stringify(hotelInfo));
    //     })
    // }
    // price-filter模态弹窗价格区间初始值
    initPriceModal(): void {
        this.m_lsSelectedIndex = 0;
    }

    public getChainRoomTypeRemark(arr: Array<any>, hotelId: number, callback?:Function){
        let obj: objChainRoomTypeRemarkCondition = new objChainRoomTypeRemarkCondition;
        obj.roomTypeIDList = arr;
        this.apiUrl.getChainRoomTypeRemark(obj ,hotelId).subscribe(u => {
            localStorage.setItem('ChainRoomTypeRemark', JSON.stringify(u));
            if(callback) callback();
        })
    }
}

class objQueryChainServiceCondition{
    chainIDList: Array<any>
}

class objChainRoomTypeRemarkCondition{
    roomTypeIDList: Array<any>
}
