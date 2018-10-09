import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ApiurlService } from '../../service/apiurl.service';
import { ContextService } from '../../service/context.service';
import { getLocalData, getSessionData, setSessionData } from '../../util/util'
import { MyDateService } from '../../service/myDate.service';
import { ProhibitedPopService } from '../../service/prohibitedpop.service';
import { ThemeService } from '../../service/theme.service';
import { getQueryString } from '../../util/ui';
import { AlertService } from '../../service/alert.service';
import { GetLocationService } from '../../service/getLocation.service';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
	@ViewChild(Slides) slides: Slides;
	m_bIsLogin: boolean = this.m_objContextService.isLogin();
	m_bMarkShow: boolean = false;
	m_lsFunction: Array<boolean> = [false]; //企业配置功能列表
	constructor(
		public navCtrl: NavController,
		public m_objGetLocationService: GetLocationService,
		public apiUrl: ApiurlService,
		public m_objContextService: ContextService,
		// private m_objPlatform: Platform,
		public m_objMyDateService: MyDateService,
		//private m_objProhibitedPopService: ProhibitedPopService, 
		private m_objThemeService: ThemeService,
		private m_objAlert: AlertService,
	) {
		//连续按两次退出app
		//this.m_objPlatform.ready().then(() => {
		//    this.m_objProhibitedPopService.registerBackButtonAction(null);
		//})
		this.isWeiXin();
	}

	ionViewDidLoad() {
		this.slides.autoplayDisableOnInteraction = false;
	}

	ionViewDidEnter() {
	}

	isWeiXin() {
		let agent = navigator.userAgent.toLowerCase();
		if (agent.match(/micromessenger/i) != null) {
			this.m_objContextService.m_isWeiXin = false;
		} else {
			this.m_objContextService.m_isWeiXin = true;
		}
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

		this.navCtrl.push('HotelListPage');
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
