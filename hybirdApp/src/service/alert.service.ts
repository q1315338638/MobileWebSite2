import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController, App } from "ionic-angular";

@Injectable()
export class AlertService {
    constructor(
        private m_objAlertCtrl: AlertController,
        private m_objToastCtrl: ToastController,
        private m_objLoadingCtrl: LoadingController,
        private m_objApp: App,
    ) { }

    //提示框
    tipsAlert(message: any, fn?: any): void {
        let tips = this.m_objAlertCtrl.create({
            title: '提示',
            message: message,
            buttons: [
                {
                    text: '确定',
                    handler: () => {
                        if (fn) fn();
                    }
                }
            ]
        }).present()
    }
 
    //多按钮提示框
    yesNoButtonTipsAlert(message: string, callback: any,callbackFn?:any): void {
        let tips = this.m_objAlertCtrl.create({
            title: '提示',
            message: message,
            buttons: [
                {
                    text: '取消',
                    handler: () => {
                        if (callbackFn)callbackFn();
                    }
                }, {
                    text: '确定',
                    handler: () => {
                        callback();
                    }
                }
            ]
        }).present()
    }

    //会自动消失的提示框
    tipsToast(message: string, position: string, duration?: number): void {
        let toast = this.m_objToastCtrl.create({
            message: message,
            duration: duration ? duration : 2000,
            position: position
        }).present();
    }

	//加载
    loading(message?: string,duration?:number): any {
        let loader = this.m_objLoadingCtrl.create({
            content: message ? message:"",
            duration: duration ? duration : null
        });
        loader.present();
        return loader;
    }
}
