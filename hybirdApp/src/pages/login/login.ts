import { Component } from '@angular/core';
import { IonicPage, NavController, App } from 'ionic-angular';
import { ApiurlService } from '../../service/apiurl.service';
import { AlertService } from '../../service/alert.service';
import { ThemeService } from '../../service/theme.service';
import { setLocalData, setSessionData, getSessionData, dateDifference } from '../../util/util';
import { ContextService } from '../../service/context.service';
import { PageJump } from '../../enum/enum';
import { ErrorEnum } from '../../model/enumclasses';
import { ECouponsState } from '../../centerdataclass/ecouponstate';
import { PointGatherInfo } from '../../centerdataclass/pointgatherinfo';
import { StoreValueSummary } from '../../centerdataclass/storevaluesummary';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    m_objAccount: { mobile: string, password: string } = {
        mobile: "",
        password: ""
    };
    m_nLanguage: number;
	//页面来源
	m_sPageSource: string = getSessionData('source');
	//优惠券搜索条件
    m_lsQueryDiscountCouponsCondition: ECouponsState[] = [];
    constructor(
        private m_objApiUrlService: ApiurlService,
        private m_objNavCtrl: NavController,
        private m_objAlertService: AlertService,
        private m_objThemeService: ThemeService,
        private m_objContextService: ContextService,
        private m_objApp: App,
    ) {
        this.m_objAccount.mobile = "13698785451";
        this.m_objAccount.password = "123456";
        this.m_nLanguage = getSessionData("language");
    }
    ionViewCanEnter() {
        return !this.m_objContextService.isLogin();
    }
    login(): void {
        if (this.m_objAccount.mobile == "") return this.m_objAlertService.tipsAlert('账号不能为空，请重新输入');
        if (this.m_objAccount.password == "") return this.m_objAlertService.tipsAlert('密码不能为空，请重新输入');
        this.m_objAccount.mobile = this.m_objAccount.mobile.trim();
        let loading = this.m_objAlertService.loading();
        this.m_objApiUrlService.login(this.m_objAccount.mobile, this.m_objAccount.password).subscribe(u => {
            switch (u.Code) {
                case ErrorEnum.successfully:
                    loading.dismiss();
                    this.m_objContextService.setCurrentUser(u.Data);
                    //如果是ios微信版就把账号密码存到本地（为解决恢复登录失效问题）
                    if(this.m_objContextService.m_bIsIosWeChat) setLocalData('m_objUserPassword',this.m_objAccount);
                    //登录成功页面跳转判定
                    switch (this.m_sPageSource) {
                        case "MemberCenterPage":
                            this.m_objContextService.m_nCouponsNumber = 0;
                            this.m_objContextService.m_nEndCoupon = 0;
                            this.m_objContextService.m_objPointGatherInfo = new PointGatherInfo();
                            this.m_objContextService.m_objStoreValueSummary = new StoreValueSummary();
                            this.getPointGatherInfo();
                            this.getStoreValueSummary();
                            this.getCoupons();
                            this.m_objNavCtrl.pop();
                            break;
                        case "HotelPage":
                            this.m_objNavCtrl.pop();
                            break;
                        default:
                            this.m_objApp.getRootNav().push('TabsPage');
                    } 
                    break;
                case -1:
                    loading.dismiss();
                    this.m_objAlertService.tipsAlert('账号或密码错误，请重新输入');
                    break;
                default:
                    loading.dismiss();
                    this.m_objAlertService.tipsAlert(u.Msg);
                    break;
            }
        })
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
    //短信登录
    goMsgLogin(): void {
        this.pageJump(PageJump.MsgLogin);
    }
    //会员注册
    mebRegister(): void {
        this.pageJump(PageJump.MebRegister);
    }
    //忘记密码
    forgetPassword(): void {
        this.pageJump(PageJump.ForgetLoginPassword);
    }
    goConfirm() {
        this.m_objNavCtrl.push('SubmitOrderPage');
    }
    pageJump(pageJump: number): void {
        setSessionData('pq_PageJump', pageJump);
        this.m_objNavCtrl.push('MsgPage');
    }
}
