import { Component } from '@angular/core';
import { IonicPage, NavController, IonicApp, App, Alert } from 'ionic-angular';
import { ContextService } from '../../service/context.service';
import { ApiurlService } from '../../service/apiurl.service';
import { ErrorEnum } from '../../model/enumclasses';
import { AlertService } from '../../service/alert.service';
import { ThemeService } from '../../service/theme.service';
import { setSessionData, getLocalData, getSessionData } from '../../util/util';
@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage { 
	tab1Root = "HomePage";
	tab2Root = 'OrderPage';
	tab3Root = 'MemberCenterPage';
	tabs:any = [
		{
			root : "HomePage",
			title: '首页',
			icon:'icon-ic_index',
		},{
			root : "OrderPage",
			title: '预订',
			icon:'icon-ic_book',
		},{
			root : "MemberCenterPage",
			title: '我的账户',
			icon:'icon-ic_me',
		},
	];
	constructor(
		private m_objNavCtrl: NavController,
		private m_objContextService: ContextService,
		private m_objApiUrlService: ApiurlService,
		private m_objThemeService: ThemeService,
		private m_objAlertService: AlertService,
		private m_objIonicApp:IonicApp,
		private m_objAppCtrl: App,
	) {
		//恢复登录状态
		if (m_objContextService.isLogin()) {
			this.m_objApiUrlService.recoverLogin().subscribe(data => {
				// this.m_objAlertService.tipsAlert(JSON.stringify(data));
				// this.m_objAlertService.tipsAlert(JSON.stringify(this.m_objContextService.m_objPersonMember));
				if (data.Code == ErrorEnum.successfully) {
					this.m_objContextService.setCurrentUser(data.Data);
				} else {
					this.m_objContextService.loginOFF();
					//解决ios微信端恢复登录一直失效的问题(重新执行一遍登录程序)
					if(this.m_objContextService.m_bIsIosWeChat){
						let objUserPassword = getLocalData('m_objUserPassword');
						this.m_objApiUrlService.login(objUserPassword.mobile,objUserPassword.password).subscribe(u =>{
							if(u.Code == ErrorEnum.successfully){
								this.m_objContextService.setCurrentUser(u.Data);
							}	
						})
						return;
					}
					this.m_objApiUrlService.loginOff().subscribe(data => {
						this.m_objAlertService.tipsAlert('登录过期，请重新登录', () => {
							this.m_objNavCtrl.push('LoginPage');
						})
					})
				}
			});
		};
		if(!this.m_objContextService.isWeiXin){
			//侦听返回上一个页面
			window.onpopstate = (evt) => {
				var activePortal = this.m_objIonicApp._loadingPortal.getActive() ||
					this.m_objIonicApp._modalPortal.getActive() ||
					this.m_objIonicApp._toastPortal.getActive() ||
					this.m_objIonicApp._overlayPortal.getActive();
				if (activePortal) {
					activePortal.dismiss();
					return;
				}
				this.m_objAppCtrl.goBack();
			}
			//一直会执行
			this.m_objAppCtrl.viewDidEnter.subscribe((app) => {
				if (this.m_objContextService.m_bCanBack) {
					//设置上一页为空
					//加了这个 1、可以让别的页面返回的时候只触发一次，也就是正常返回一次   2、有个BUG，就是在调用ionic自带返回函数的时候回再次触发一次，就导致会返回到当前页面，具体就是Setting页面
					history.pushState(null, null, "");
				}else{
					//加了定时器后，唯一问题就是——如果登录之后再点击退出登录，会先返回会员中心页面再返回登录页面
					//不加定时器，1、退出登录后会再次回到setting页面并且不能返回  2、退出后再登录，再进行主题切换回回到setting页面
					setTimeout(()=>{
						this.m_objContextService.m_bCanBack = true;
					},700)
				}
				
			});
		}

	}
	ionViewWillEnter(){
		//设置预定页面tabs显示
		setSessionData('source',1);
	}
}
