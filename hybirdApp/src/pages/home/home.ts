import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, IonicPage, App } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ApiurlService } from '../../service/apiurl.service';
import { ContextService } from '../../service/context.service';
import { MyDateService } from '../../service/myDate.service';
import { ThemeService } from '../../service/theme.service';
import { AlertService } from '../../service/alert.service';
import { GetLocationService } from '../../service/getLocation.service';
import { ShowLoading } from '../../util/util';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
	m_bIsLogin: boolean = this.m_objContextService.isLogin();
	m_bMarkShow: boolean = false;
	m_lsFunction: Array<boolean> = [false]; //企业配置功能列表
	constructor(
		public navCtrl: NavController,
		public m_objGetLocationService: GetLocationService,
		public apiUrl: ApiurlService,
		public m_objContextService: ContextService,
		public m_objMyDateService: MyDateService,
		private m_objThemeService: ThemeService,
		private m_objAlert: AlertService,
		private m_objApp:App,
	) {
		
	}

	ionViewDidLoad() {
		this.slides.autoplayDisableOnInteraction = false;
	}

	ionViewDidEnter() {
		
	}

	

	// 登录跳转
	goLogin(): void {
		this.navCtrl.push('LoginPage');
	}

	// 酒店列表链接
	goHotelList(): void {
		let inDate = this.m_objMyDateService.m_objDate.checkInDate._date;
		let outDate = this.m_objMyDateService.m_objDate.checkOutDate._date;
		this.setHotelListStorage(inDate, outDate);

		this.m_objApp.getRootNav().push('HotelListPage');
	}

	// 酒店列表查询参数放到缓存
    setHotelListStorage (inDate: string, outDate: string): void {
        let HotelListParams = {
            cityNo: this.m_objGetLocationService.m_nCityNo,
            tag: this.m_objContextService.m_sSearchTag,
            arrive: inDate,
            depart: outDate,
        }
        sessionStorage.setItem('getHotelListParams', JSON.stringify(HotelListParams));
    }

	goPersonal(): void {
		this.navCtrl.push('MemberCenterPage');
	}
}
