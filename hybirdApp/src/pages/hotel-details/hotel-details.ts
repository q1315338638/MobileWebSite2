import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, App } from 'ionic-angular';
import { AttachedInfo } from '../../centerdataclass/attachedInfo';
import { Chain } from '../../centerdataclass/chain';
import { onLineBookApiNew } from '../../config/apiurl';
import { ThemeService } from '../../service/theme.service';

@IonicPage()
@Component({
	selector: 'page-hotel-details',
	templateUrl: 'hotel-details.html',
})
export class HotelDetailsPage {

	m_objHotelAttachedInfo: AttachedInfo = new AttachedInfo;
	m_objChainInfo: Chain = new Chain;
	m_lsChainFacilities: Array<any> = []; //酒店设施
	m_lsRoomFacilities: Array<any> = [];  //房间设施
	m_sUrl: string = onLineBookApiNew;
	m_lsChainSummary: Array<any> = [];
	m_lsSubway: Array<string> = [];//地铁站
	m_lsTrain: Array<string> = [];//火车站
	m_lsAirport: Array<string> = [];//机场
	m_lsOtherTraffic: Array<string> = [];//其他交通工具
	m_lsLeisure: Array<string> = [];//休闲娱乐
	m_lsAttractions: Array<string> = [];//景点
	m_lsOther: Array<string> = [];//其他
	m_lsPhone: Array<string> = [];//电话
	m_sOpeningTime: string; //开业时间
	m_sRoomNumber: string;//房间数量
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private m_objThemeService: ThemeService,
		private m_objActionSheetCtrl: ActionSheetController,
		private m_objApp: App,
	) { };

	ionViewDidLoad() {
		this.getHotelDetailsData();
	}

	getHotelDetailsData(): void {
		//酒店附加信息
		this.m_objHotelAttachedInfo = JSON.parse(localStorage["[roomTypeDetails]"]).Data.AttachedInfo;
		//酒店信息
		this.m_objChainInfo = JSON.parse(localStorage["[roomTypeDetails]"]).Data.Chain;
		//酒店服务
		if(this.m_objHotelAttachedInfo.ChainService != null) var chainFacilitiesList = this.m_objHotelAttachedInfo.ChainService.split(',');
		//房间服务
		if(this.m_objHotelAttachedInfo.RoomService != null) var roomFacilitiesList = this.m_objHotelAttachedInfo.RoomService.split(',');
		//地铁站
		if(this.m_objHotelAttachedInfo.TrafficMetro != null) this.m_lsSubway = this.m_objHotelAttachedInfo.TrafficMetro.split("、");
		//火车站
		if(this.m_objHotelAttachedInfo.TrafficTrain != null) this.m_lsTrain = this.m_objHotelAttachedInfo.TrafficTrain.split(",");
		//机场
		if(this.m_objHotelAttachedInfo.TrafficAirplane != null) this.m_lsAirport = this.m_objHotelAttachedInfo.TrafficAirplane.split(",");
		//其他交通工具
		if(this.m_objHotelAttachedInfo.TrafficOthers != null) this.m_lsOtherTraffic = this.m_objHotelAttachedInfo.TrafficOthers.split(",");
		//休闲娱乐
		if(this.m_objHotelAttachedInfo.AroundRecreation != null) this.m_lsLeisure = this.m_objHotelAttachedInfo.AroundRecreation.split(",");
		//景点
		if(this.m_objHotelAttachedInfo.AroundPub != null) this.m_lsAttractions = this.m_objHotelAttachedInfo.AroundPub.split(",");
		//其他
		if(this.m_objHotelAttachedInfo.AroundOther != null) this.m_lsOther = this.m_objHotelAttachedInfo.AroundOther.split(",");
		//电话
		if(this.m_objChainInfo.Telephone != null) this.m_lsPhone = this.m_objChainInfo.Telephone.split("/");
		//开业时间
		if(this.m_objChainInfo.Remark != null) this.m_sOpeningTime = this.m_objChainInfo.Remark.split(",")[0].replace("开业", "");
		//房间数量
		if(this.m_objChainInfo.Remark != null) this.m_sRoomNumber = this.m_objChainInfo.Remark.split(",")[1].replace("客房","");
		chainFacilitiesList.forEach(item => {
			let obj: Facilities = new Facilities;
			obj.imgUrl = item.split('_')[0];
			obj.name = item.split('_')[1];
			this.m_lsChainFacilities.push(obj); //酒店设施
		})
		roomFacilitiesList.forEach(item => {
			let obj: Facilities = new Facilities;
			obj.imgUrl = item.split('_')[0];
			obj.name = item.split('_')[1];
			this.m_lsRoomFacilities.push(obj); //酒店服务
		})
		this.m_lsChainSummary = this.m_objHotelAttachedInfo.Summary.split('^');
	}
	//拨打电话
	callPhone(): void {
		var arr = [];
		for (let i = 0; i < this.m_lsPhone.length; i++) {
			arr[i] = {
				text: this.m_lsPhone[i],
				handler: () => {
					window.location.href = "tel:" + this.m_lsPhone[i].replace("-", "");
				}
			}
		}
		this.m_objActionSheetCtrl.create({
			title: "",
			buttons: arr

		}).present();
	}
	//酒店地图
	goHotelMap(): void {
		this.m_objApp.getRootNav().push('MapPage', {
			mapUrl: this.m_objHotelAttachedInfo.BaiduMapUrl,
			brandName: this.m_objChainInfo.BrandName,
			chainName: this.m_objChainInfo.ChainName,
			address: this.m_objChainInfo.ChainAddress
		});
	}
}
class Facilities {
	imgUrl: string;
	name: string
}
