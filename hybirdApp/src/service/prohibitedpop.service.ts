import { Injectable } from '@angular/core';
import { getLocalData, setLocalData } from '../util/util'
import { ToastController, App, Platform, ModalController, Tabs, NavController, Config } from 'ionic-angular';

@Injectable()
export class ProhibitedPopService {

	//控制硬件返回按钮是否触发，默认false
	m_bBackButtonPressed: boolean = false;
	constructor(
		// private m_objModalCtrl: ModalController,
		// private m_objPlatForm: Platform,
		// private m_objAppCrtl: App,
		// private m_objToastCtrl: ToastController,
		// private m_objIonicApp:IonicApp,
		// private m_objNavCtrl:NavController,
	) { }
	//注册安卓按键返回方法  //(首页进去可以正常返回，会员中心进去不能正常返回)  可以考虑吧tabs隐藏掉
	// registerBackButtonAction(): void {
	// 	window.onpopstate = (evt) => {
	// 		var activePortal  = this.m_objIonicApp._loadingPortal.getActive() || 
	// 		this.m_objIonicApp._modalPortal.getActive() ||
	// 		this.m_objIonicApp._toastPortal.getActive() ||
	// 		this.m_objIonicApp._overlayPortal.getActive();

	// 		if (activePortal) {
	// 			activePortal.dismiss();
	// 			return;
	// 		}
	// 		if (this.m_objNavCtrl.canGoBack()) {
	// 			this.m_objAppCrtl.goBack();
	// 		}else {
	// 			alert("没东西~");
	// 		}
	// 		};
		
	// 		// Fake browser history on each view enter
	// 		this.m_objAppCrtl.viewDidEnter.subscribe((app) => {
	// 		history.pushState(null, null, "");
	// 		});
	// 	}
	    // this.m_objPlatForm.registerBackButtonAction(() => {
	        //获取NavController
	        // let activeNav: NavController = this.m_objAppCrtl.getActiveNavs()[0];
	        //如果可以返回上一页，则执行pop
	        // if (activeNav.canGoBack()) {
	            // activeNav.pop();
	        // } else {
	        //     if (tabRef == null || tabRef._selectHistory[tabRef._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
	        //         //执行退出
	        //         this.showExit();
	        //     } else {
	        //         //选择首页第一个标签
	        //         tabRef.select(0);
	        //     }
	        // }
	    // });
	//}
	//首页按两次退出应用方法
	// showExit(): void {
	// 	//如果为Ture，退出
	// 	if (this.m_bBackButtonPressed) {
	// 		this.m_objPlatForm.exitApp();
	// 	} else {
	// 		//第一次按，弹出Toast
	// 		this.m_objToastCtrl.create({
	// 			message: '再按一次退出应用',
	// 			duration: 2000,
	// 			position: 'top'
	// 		}).present();
	// 		//标记为true
	// 		this.m_bBackButtonPressed = true;
	// 		//两秒后标记为false，如果退出的话，就不会执行了
	// 		setTimeout(() => this.m_bBackButtonPressed = false, 2000);
	// 	}
	// }
}
