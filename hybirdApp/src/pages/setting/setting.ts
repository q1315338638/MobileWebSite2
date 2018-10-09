import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { ContextService } from '../../service/context.service';
import { ApiurlService } from '../../service/apiurl.service';
import { AlertService } from '../../service/alert.service';
import { ThemeService } from '../../service/theme.service';
import { ErrorEnum } from '../../model/enumclasses';
import { setLocalData } from '../../util/util';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
    m_lsFunctionList: boolean[] = [false, false, false, false, false, false, false];
    constructor(
        public m_objNavCtrl: NavController,
        public m_objNavParams: NavParams,
        public m_objContextService: ContextService,
        public m_objApiUrlService: ApiurlService,
        public m_objAlertService: AlertService,
        public m_objThemeService: ThemeService,
        private m_objActionsheetCtrl: ActionSheetController,
		private m_objPlatform: Platform,
    ) {
        this.functionList();
    }
    //功能性列表
    functionList(): void {
        let nLength = this.m_lsFunctionList.length;
        for (let i = 0; i < nLength; i++) {
            this.m_lsFunctionList[i] = true;
		}
		//this.m_lsFunctionList[1] = false;
        this.m_lsFunctionList[2] = false;
    }
	//颜色修改
    changeColor(): void {
        var actionSheet = this.m_objActionsheetCtrl.create({
            title: '请选择您要切换的主题',
            buttons: [
                {
                    text: "活力橙",
                    handler: () => {
                        this.m_objThemeService.m_objTheme.UserViewStyle = "1";
                        this.changeThemeApi();
                    }
                }, {
                    text: "魅惑紫",
                    handler: () => {
                        this.m_objThemeService.m_objTheme.UserViewStyle = "0";
                        this.changeThemeApi();
                    }
                }

            ]
        }).present();
    }
	//语言修改
    changeLanguage(): void {
        var actionSheet = this.m_objActionsheetCtrl.create({
            title: '请选择您要切换的语言',
            buttons: [
                {
                    text: "English",
                    handler: () => {
                        this.m_objContextService.language = 3;
                        this.changeLanguageApi();
                    }
                }, {
                    text: "中文",
                    handler: () => {
                        this.m_objContextService.language = 4;
                        this.changeLanguageApi();
                    }
                }

            ]
        }).present();
        
        //setTimeout(() => {

        //},500)

	}
	//改变主题颜色
    changeThemeApi(): void {
        this.m_objApiUrlService.setTheme(this.m_objThemeService.m_objTheme).subscribe(data => {
            setLocalData("pq_ThemePlan", this.m_objThemeService.m_objTheme);
            this.m_objContextService.m_bCanBack = false;
            this.m_objNavCtrl.pop();
        });
    }
    changeLanguageApi(): void {
        this.m_objApiUrlService.setLanguage(this.m_objContextService.language).subscribe(data => {
            this.m_objContextService.changeLanguage();
            this.m_objAlertService.tipsAlert("更换语言需要重启app，点击确定后将退出app", () => {
                this.m_objPlatform.exitApp();
            })
        })
    }
  goLegalNotices(): void {
    this.m_objNavCtrl.push("LegalNoticesPage");
  }
  goCopyright(): void {
    this.m_objNavCtrl.push("CopyrightPage");
  }
    //退出登录
    loginOFF(): void {
        this.m_objAlertService.yesNoButtonTipsAlert("您确定要退出登录吗？", () => {
            this.m_objContextService.loginOFF();
            let loading = this.m_objAlertService.loading("正在退出，请稍候！");
            this.m_objApiUrlService.loginOff().subscribe(data => {
                if (data.Code == ErrorEnum.successfully) {
                    loading.dismiss();
                    this.m_objContextService.m_bCanBack = false;
                    this.m_objNavCtrl.pop();
                    //this.m_objAlertService.tipsAlert("退出登录成功！", () => {
                    //    this.m_objNavCtrl.pop();
                    //})
                } else {
                    loading.dismiss();
                    this.m_objAlertService.tipsAlert("退出登录失败，请重试！")
                }
            });
        })
    }
}
