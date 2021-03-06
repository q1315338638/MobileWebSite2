import { Component } from '@angular/core';
import { NavController, ModalController, App, Platform, IonicPage } from 'ionic-angular';
import { ThemeService } from '../../service/theme.service';
import { PersonMember } from '../../centerdataclass/personmember';
import { getLocalData, setSessionData, removeSessionData, dateDifference } from '../../util/util';
import { ApiurlService } from '../../service/apiurl.service';
import { ErrorEnum } from '../../model/enumclasses';
import { ECouponsState } from '../../centerdataclass/ecouponstate';
import { PointGatherInfo } from '../../centerdataclass/pointgatherinfo';
import { StoreValueSummary } from '../../centerdataclass/storevaluesummary';
import { ContextService } from '../../service/context.service';
import { AlertService } from '../../service/alert.service';
import { PageJump } from '../../enum/enum';

@IonicPage()
@Component({
  selector: 'page-member-center',
  templateUrl: 'member-center.html',
})
export class MemberCenterPage {
	m_objMemberInfo: PersonMember = new PersonMember();
	//优惠券搜索条件
	m_lsQueryDiscountCouponsCondition: ECouponsState[] = [];
	m_lsFunctionList: boolean[] = [false, false, false, false, false, false, false, false, false, false];
	constructor(
		private m_objThemeService: ThemeService,
		private m_objApiUrlService: ApiurlService,
		private m_objContextService: ContextService,
		private m_objApp: App,
	) {
		setInterval(() => {
			this.m_objMemberInfo = getLocalData("m_objPersonMember");
		},1000)
		this.m_lsQueryDiscountCouponsCondition = [ECouponsState.Published];
		this.functionList();
		var a:any = document.styleSheets[0];
		a.addRule('.pq-flex::after',"color:green");
		alert(1);
	}
	//将要进入页面触发
	ionViewWillEnter() {
		//初始化有效優惠券數量
		this.m_objContextService.m_nCouponsNumber = 0;
		this.m_objContextService.m_nEndCoupon = 0;
		this.m_objMemberInfo = getLocalData("m_objPersonMember");
		this.m_lsQueryDiscountCouponsCondition = [];
		this.m_objContextService.m_objPointGatherInfo = new PointGatherInfo();
		this.m_objContextService.m_objStoreValueSummary = new StoreValueSummary();
		setTimeout(()=>{
			this.getCoupons();
			this.getPointGatherInfo();
			this.getStoreValueSummary();
		},1000);
	}
	//获取积分信息
	getPointGatherInfo(): void {
		this.m_objApiUrlService.getPointGatherInfo().subscribe(data => {
			if (data.Code == ErrorEnum.successfully) {
				this.m_objContextService.m_objPointGatherInfo = data.Data;
			}
		})
	}
	//获取储值信息
	getStoreValueSummary(): void {
		this.m_objApiUrlService.getStoreValueSummary().subscribe(data => {
			if (data.Code == ErrorEnum.successfully) {
				this.m_objContextService.m_objStoreValueSummary = data.Data;
			}
		})
	}
	//获取可用优惠券总数
	getCoupons(): void {
		this.m_objApiUrlService.getCoupons(100, 1, this.m_lsQueryDiscountCouponsCondition).subscribe(data => {
			if (data.Code == ErrorEnum.successfully) {
				let nLength = data.Data.RowCount;
				let today = new Date();
				for (let i = 0; i < nLength; i++) {
					//未过期的优惠券
					let endDate = new Date(data.Data.DataSet[i].EndDate);
					if (endDate > today) {
						this.m_objContextService.m_nCouponsNumber++;
						//快过期的优惠券，一个礼拜内
						if (dateDifference(endDate, today) <= 7) this.m_objContextService.m_nEndCoupon++;
					}
				}
			}
		})
	}
	//功能性列表
	functionList(): void {
		let nLength = this.m_lsFunctionList.length;
		for (let i = 0; i < nLength; i++) {
			this.m_lsFunctionList[i] = true;
		}
		//账单
		this.m_lsFunctionList[4] = this.m_objContextService.m_objFeatures.ExpensesRecord;
		//服务
		this.m_lsFunctionList[5] = this.m_objContextService.m_objFeatures.UserService;
		//投诉与建议
		this.m_lsFunctionList[6] = this.m_objContextService.m_objFeatures.ComplaintBox;
	}
	//登陆
	goLogin(): void {
		this.m_objApp.getRootNav().push('LoginPage');
		setSessionData("source", 'MemberCenterPage');
	}
	//跳转到优惠券列表
	goCoupon(): void {
		this.m_objApp.getRootNav().push('CouponPage');
	}
	//跳转到储值列表
	goDeposit(): void {
		this.m_objApp.getRootNav().push('DepositPage');
	}
	//跳转到积分列表
	goPoints(): void {
		this.m_objApp.getRootNav().push('PointsPage');
	}
	//跳转到全部订单
	goOrder(): void {
		//this.m_objApp.getRootNav().push('OrderPage');
		this.m_objApp.getRootNav().push('OrderPage');
		removeSessionData("source");
	}
	//跳转到离店订单
	goAway(): void {
		this.m_objApp.getRootNav().push('OrderPage');
		setSessionData("source", 2);
	}
	//跳转到会员资料
	goMemberInfo(): void {
		this.m_objApp.getRootNav().push('MemberInfoPage');
	}
	//跳转到修改密码
	goChangePassword(): void {
		setSessionData('pq_PageJump', PageJump.ForgetLoginPassword);
		this.m_objApp.getRootNav().push('MsgPage');
		setSessionData("source", "MemberCenterChangePWD");
	}
	//跳转到账单页面
	goBill(): void {
		this.m_objApp.getRootNav().push('MemberBillPage');
	}
	//跳转到设置页面
	goSetting(): void {
		this.m_objApp.getRootNav().push('SettingPage');
	}
	//跳到投诉与建议页面
	goSuggestions(): void {
		this.m_objApp.getRootNav().push('SuggestionsPage');
	}
	//跳到服务页面
	goService(): void {
		this.m_objApp.getRootNav().push('MemberServicePage')
	}
}
