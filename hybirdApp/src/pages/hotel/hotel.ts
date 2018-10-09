import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App, AlertController } from 'ionic-angular';
import { ContextService } from '../../service/context.service';
import { ApiurlService } from '../../service/apiurl.service';
import { RoomType } from '../../frontofficedataclass/roomtype';
import { MyDateService } from '../../service/myDate.service';
import { AlertService } from '../../service/alert.service';
import { ThemeService } from '../../service/theme.service';
import { ChainRoomService } from '../../centerdataclass/ChainRoomService';
import { onLineBookApiNew } from '../../config/apiurl';
import { HotelInfoService } from '../../service/hotelInfo.service';
import { setSessionData } from '../../util/util';

@IonicPage()
@Component({
    selector: 'page-hotel',
    templateUrl: 'hotel.html',
})
export class HotelPage{

    m_nHotelId: number;
    m_sCheckInDate: string;
    m_sCheckOutDate: string;
    m_sBrandName: string;
    m_sAddress: any;
    m_sChainName: string;
	m_nCommentScore: number;
	m_nStarNumber: number;
	m_nCommentCount: number;
    m_objRoomTypes: RoomType[] = [];
    m_nMebRoomType: number;
	m_nNightCount: number;
	m_nPageIndex: number = 1;
    m_nPageSize: number = 5;
    m_sMapUrl: string;
    m_lsChainIdList: Array<any> = [1,2,3];
    m_objChainRoomServiceInfo: ChainRoomService;
    m_sApiUrl:string = onLineBookApiNew;
    m_lsRoomTypeIdList: Array<any> = [];

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        public m_objContextService: ContextService,
        public apiUrl: ApiurlService,
        public modalCtrl: ModalController,
        public m_objMyDateService: MyDateService,
        private m_objApp: App,
        public m_objAlert: AlertService,
        public alertCtrl: AlertController,
        public m_objThemeService: ThemeService,
        public m_objHotelInfoService: HotelInfoService,
    ) {
        this.getNavParams();
        // JSON.parse(localStorage["ChainRoomService"]).forEach(item => {
		// 	if(item.Chain.ChainID == this.m_nHotelId){
		// 		this.m_objChainRoomServiceInfo = item.ChainRoomService;
		// 	}
        // });
    }

    ionViewDidLoad() {
		this.getRoomTypeDetails();
        this.getHotelComment();
    }

    getNavParams(): void {
        let hotelDetailsParams = JSON.parse(sessionStorage.getItem('hotelDetailsParams'));
        this.m_nHotelId = hotelDetailsParams.hotelId;
        this.m_sCheckInDate = hotelDetailsParams.arrive;
        this.m_sCheckOutDate = hotelDetailsParams.depart;
    }

	//获取评论
	private getHotelComment(): void {
        this.apiUrl.getHotelComment(this.m_nHotelId, 0, this.m_nPageSize, this.m_nPageIndex, 0).subscribe(u => {
			this.m_nCommentCount = u.Data.RowCount;
        })
    }

    // 日期选择页面
    private goDatePicker() :void{
        this.navCtrl.push('DatePickerPage');
    }

    private getRoomTypeDetails(): void{
        let loading = this.m_objAlert.loading('');
        this.apiUrl.getRoomTypeDetail(this.m_nHotelId,this.m_sCheckInDate,this.m_sCheckOutDate).subscribe(u => {
            loading.dismiss();
            localStorage["[roomTypeDetails]"] = JSON.stringify(u);
            this.m_sBrandName = u.Data.Chain.BrandName;
            this.m_sChainName = u.Data.Chain.ChainName;
			this.m_sAddress = u.Data.Chain.ChainAddress;
			this.m_nCommentScore = Number(((u.Data.CommentScore / 100) * 5).toFixed(1));
			this.m_nStarNumber = u.Data.CommentScore;
            this.m_objRoomTypes = u.Data.RoomTypes;
            this.m_nNightCount = u.Data.NightCount;
            this.m_sMapUrl = u.Data.AttachedInfo.BaiduMapUrl;
            this.m_objRoomTypes.forEach(s => {
                this.m_lsRoomTypeIdList.push(s.RoomTypeID);
                s.RoomAvailable = s.RoomTypeItem.RoomCount - s.RoomTypeItem.BookInCount - s.RoomTypeItem.CheckInCount - s.RoomTypeItem.StopSaleCount;
            });
            this.m_objRoomTypes.forEach(item => {
                item.RoomRateItems.forEach(s => {
                    if (s.RoomRateTypeID == 1) {
                        item.RetailPrice = s.RoomRate;
                    }
                })
            })
            this.getMebRoomType();
            // this.m_objHotelInfoService.getChainRoomTypeRemark(this.m_lsRoomTypeIdList,this.m_nHotelId);
        })
    }

    private getMebRoomType():void{
        this.apiUrl.getMebRoomRateType(this.m_nHotelId).subscribe(u => {
            this.m_nMebRoomType = u.Data.RoomRateTypeID;
            this.m_objRoomTypes.forEach(item => {
                item.RoomRateItems.forEach(r => {
                    if (r.RoomRateTypeID == this.m_nMebRoomType){
                        item.MebRoomRate = r.RoomRate;
                        item.AccDate = r.AccDate.toString();
                        item.MebRoomPriceName = r.RoomRateTypeName;
                    }
                })
            })
            this.m_objRoomTypes.sort(this.sortByPrice).reverse();
            localStorage['[RoomTypes]'] = JSON.stringify(this.m_objRoomTypes);
        })
    }

    private sortByPrice(a:any, b:any):any{
        return b.MebRoomRate - a.MebRoomRate;
    }

    private goHotelMap():void{
        this.m_objApp.getRootNav().push('MapPage',{
            mapUrl: this.m_sMapUrl,
            brandName: this.m_sBrandName,
            chainName: this.m_sChainName,
            address: this.m_sAddress
        });
        // window.location.href = this.m_sMapUrl;
    }

    private goHotelDetails():void{
        this.navCtrl.push('HotelDetailsPage');
    }

    private goHotelComment(): void{
        this.m_objApp.getRootNav().push('HotelCommentPage', {
            hotelId: this.m_nHotelId
        });
    }

    private openRoomDetails(roomTypeId:number, index:number, roomTypeName:string):void{
        localStorage['[RoomTypes]'] = JSON.stringify(this.m_objRoomTypes);
        this.m_objContextService.m_bRoomDetailsMask = true;
		let roomDetailsModal = this.modalCtrl.create("ModalRoomDetailsPage",{
            roomTypeId: roomTypeId,
            hotelId: this.m_nHotelId,
            index: index,
            roomTypeName: roomTypeName,
            roomTypeIdList: this.m_lsRoomTypeIdList
        },{
            showBackdrop: false
        });
        roomDetailsModal.present();
    }

    private goSubmitOrder(typeId:number, typeName: string, accDate: string){
        if(this.m_objContextService.isLogin()){
            this.m_objApp.getRootNav().push('SubmitOrderPage',{
                roomTypeId: typeId,
                roomTypeName: typeName,
                hotelId: this.m_nHotelId,
                accDate: accDate
            });
        }else{
            let alert = this.alertCtrl.create({
                title: '提示',
                message: '您还未登录！',
                buttons: [
                  {
                    text: '确定',
                    handler: () => {
                        this.goLogin();
                    }
                  }
                ]
            });
            alert.present();
        }
    }

    private goLogin(){
        this.navCtrl.push('LoginPage');
		setSessionData("source", 'HotelPage')
    }
}

class objChainRoomTypeRemarkCondition{
    roomTypeIDList: Array<any>
}
