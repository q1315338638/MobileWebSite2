import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, ViewController, App } from 'ionic-angular';
import { ApiurlService } from '../../service/apiurl.service';
import { verificationMobile, setSessionData, getSessionData } from '../../util/util';
import { ThemeService } from '../../service/theme.service';
import { AlertService } from '../../service/alert.service';
import { PageJump } from '../../enum/enum';
import { ErrorEnum } from '../../model/enumclasses';
import { ContextService } from '../../service/context.service';

@IonicPage()
@Component({
    selector: 'page-msg',
    templateUrl: 'msg.html',
})
export class MsgPage {
    m_objMsg: { sMobile: string, sCode: string } = {
        sMobile: "",
        sCode: ""
    };
    //发送验证码按钮
    m_bSMSButton: boolean = true;
    //下一步按钮
    m_bNext: boolean = true;
    //发送验证码按钮是否可用
    m_bSMSClick: boolean = true;
    //是否显示登录按钮
    m_bIsShowLoginButton: boolean = false;
    m_sSMSText: string = "发送验证码";
    m_sSMSCode: string;
    m_sMobile: string;
    constructor(
        public m_objNavCtrl: NavController,
        public m_objApiUrl: ApiurlService,
        public m_objThemeService: ThemeService,
        private m_objAlertService: AlertService,
        private m_objContextService: ContextService,
        private m_objModalCtrl: ModalController,
        private m_objNavParams: NavParams,
        private m_objViewCtrl: ViewController,
        private m_objApp: App,
    ) {
        if (getSessionData("pq_PageJump") == PageJump.MsgLogin) {
            this.m_bIsShowLoginButton = true;
        }
    }
    //验证手机号
    verificationMobile(): void {
        if (this.m_bSMSClick) {
            if (verificationMobile(this.m_objMsg.sMobile)) {
                this.m_bSMSButton = false;
            } else {
                this.m_bSMSButton = true;
            }
        }
    }
    //验证验证码
    verificationCode(): void {
        if (this.m_objMsg.sCode == this.m_sSMSCode && this.m_sMobile == this.m_objMsg.sMobile) {
            this.m_bNext = false;
        } else {
            this.m_bNext = true;
        }
    }
    //下一步
    goGetMsg(): void {
        if (this.m_sMobile != this.m_objMsg.sMobile) return this.m_objAlertService.tipsAlert("验证码错误")
        setSessionData("msgToMsgNext", this.m_objMsg);
		this.m_objNavCtrl.push('MsgNextPage');
    }
    //短信登录
    msgLogin(): void {
        let loader = this.m_objAlertService.loading('');
        this.m_objApiUrl.smsLogin(this.m_sMobile, this.m_sSMSCode).subscribe(u => {
            switch (u.Code){
                case ErrorEnum.successfully:
                    this.m_objContextService.loginOFF();
                    this.m_objContextService.setCurrentUser(u.Data);
                    this.m_objApp.getRootNav().push("TabsPage");
                    this.m_objViewCtrl.dismiss();
                    //this.m_objModalCtrl.create("TabsPage").present();
                    break;
                case ErrorEnum.loginError:
                    this.m_objAlertService.tipsAlert(u.Msg);
                    break;
            }
            loader.dismiss();
        });
    }
    //获取验证码
    getVerificationCode(): void {
        //发送验证码按钮变为不可用
        this.m_bSMSButton = true;
        //防止发送验证码后修改手机号可以再次发送验证码
        this.m_bSMSClick = false;
        //多久可以再次发送验证码
        let time = 61;
        //更改发送验证码文字
        this.m_sSMSText = (--time).toString();
        //定时器
        var countdown = setInterval(() => {
            //更改发送验证码文字
            this.m_sSMSText = (--time).toString();
            //倒计时结束时
            if (time == 0) {
                //发送验证码按钮变为可用
                this.m_bSMSButton = false;
                this.m_bSMSClick = true;
                this.m_sSMSText = "发送验证码";
                //清除定时器
                clearInterval(countdown);
            };
        }, 1000)
        this.m_objApiUrl.sendSMSCode(this.m_objMsg.sMobile).subscribe(u => {
            if (u.Code == 0) {
                //验证码
                this.m_sSMSCode = u.Data;
                this.m_objMsg.sCode = u.Data;
                //验证发送验证码的手机号跟验证码是否一致
                this.m_sMobile = this.m_objMsg.sMobile;
            }
        })
    }
}
