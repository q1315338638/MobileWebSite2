import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ContextService } from '../../service/context.service';
import { ThemeService } from '../../service/theme.service';
import { ApiurlService } from '../../service/apiurl.service';
import { ChainRoomTypeRemark } from '../../centerdataclass/ChainRoomTypeRemark';
import { HotelInfoService } from '../../service/hotelInfo.service';

@IonicPage()
@Component({
  	selector: 'page-modal-room-details',
  	templateUrl: 'modal-room-details.html',
})
export class ModalRoomDetailsPage {

	m_objRoomDetails: any;
	m_nRoomTypeId: number;
	m_nRoomDetailsIndex: number;
	m_nHotelId: number;
	m_sRoomTypeName: string;
	m_lsRoomDescription: ChainRoomTypeRemark = new ChainRoomTypeRemark;
	m_nDefaultPrice: number;
	m_nMebPrice: number;
	m_sMebPriceName: string;
	public m_lsRoomTypeIdList: Array<any> = [];
	public m_lsRoomImg: Array<any> = [];

  	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController,
		public m_objContextService: ContextService,
		public m_objThemeService: ThemeService,
		public m_objApiurl: ApiurlService,
		public m_HotelInfoService: HotelInfoService,
		public m_objElement: ElementRef,
	) {
  	}

  	ionViewDidLoad() {
		this.getRoomData();
	}

	getRoomData(): void{
		this.m_nHotelId = this.navParams.get('hotelId');
		this.m_nRoomTypeId = this.navParams.get('roomTypeId');
		this.m_nRoomDetailsIndex = this.navParams.get('index');
		this.m_sRoomTypeName = this.navParams.get('roomTypeName');
		this.m_lsRoomTypeIdList = this.navParams.get('roomTypeIdList');
		this.m_objRoomDetails = JSON.parse(localStorage["[RoomTypes]"])[this.m_nRoomDetailsIndex];
		this.m_nDefaultPrice = this.m_objRoomDetails.RoomRate;
		this.m_nMebPrice = this.m_objRoomDetails.MebRoomRate;
		this.m_sMebPriceName = this.m_objRoomDetails.MebRoomPriceName;
		this.m_lsRoomDescription = JSON.parse(localStorage.getItem('ChainRoomTypeRemark'));
		this.getRoomDescription(this.m_nRoomTypeId, this.m_nHotelId);
	}
	dismiss() {
        this.viewCtrl.dismiss();
        this.m_objContextService.m_bRoomDetailsMask = false;
	}
	
	public getRoomDescription(roomTypeId: number,hotelId: number): void {
		this.m_objApiurl.getChainRoomTypeAttInfo(hotelId, roomTypeId).subscribe(u => {
			console.log(u);
		})
	}

	private goSubmitOrder(){
        if(this.m_objContextService.isLogin()){
            this.navCtrl.push('SubmitOrderPage',{
                // hotelId: this.m_nHotelId,
                roomTypeId: this.m_nRoomTypeId,
                roomTypeName: this.m_sRoomTypeName
            });
        }else{
            this.navCtrl.push('LoginPage');
        }
    }
}