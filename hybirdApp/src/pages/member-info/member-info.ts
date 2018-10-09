import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, ActionSheetController } from 'ionic-angular';
import { getLocalData, setLocalData, fileToBase64 } from '../../util/util';
import { PersonMember } from '../../centerdataclass/personmember';
import { ThemeService } from '../../service/theme.service';
import { ApiurlService } from '../../service/apiurl.service';
import { ErrorEnum } from '../../model/enumclasses';
import { AlertService } from '../../service/alert.service';
import { ContextService } from '../../service/context.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { api, EApi } from '../../config/apiurl';

@IonicPage()
@Component({ 
    selector: 'page-member-info',
    templateUrl: 'member-info.html',
})
export class MemberInfoPage {
    m_objPersonMember: PersonMember = new PersonMember();
    m_objEditMebInfo: PersonMember = new PersonMember();
    m_sImgUrl: SafeUrl = api(EApi.getMebHead);
    m_sHeadUrl: string;
    constructor(
        private m_objNavCtrl: NavController,
        private m_objThemeService: ThemeService,
        private m_objModalCtrl: ModalController,
        private m_objActionsheetCtrl: ActionSheetController,
        private m_objApiUrlService: ApiurlService,
        private m_objAlertService: AlertService,
        private m_objContextService: ContextService,
        private m_objSanitizer: DomSanitizer

    ) {
        this.m_objPersonMember = getLocalData("m_objPersonMember");
        switch (this.m_objPersonMember.Sex) {
            case 0:
                this.m_objPersonMember.SexName = "保密";
                break;
            case 1:
                this.m_objPersonMember.SexName = "男";
                break;
            case 2:
                this.m_objPersonMember.SexName = "女";
                break;
        }

    }
    //选择性别
    ChooseSex(): void {
        var actionSheet = this.m_objActionsheetCtrl.create({
            title: '请选择您的性别',
            buttons: [
                {
                    text: "男",
                    handler: () => {
                        this.m_objEditMebInfo.Sex = 1;
                        this.changeMebInfo();
                    }
                }, {
                    text: "女",
                    handler: () => {
                        this.m_objEditMebInfo.Sex = 2;
                        this.changeMebInfo();
                    }
                }
            ]
        });
        actionSheet.present(); 
    }
    //修改会员名
    changeMebName(): void {
        let modal = this.m_objModalCtrl.create('ChangeMebNamePage', {
            MebName: this.m_objPersonMember.MebName,
            Sex: this.m_objPersonMember.Sex
        });
        modal.onDidDismiss(data => {
            if (data) {
                this.m_objPersonMember.MebName = data.MebName;
                console.log(this.m_objPersonMember);
                let timer = setInterval(() => {
                    setLocalData("m_objPersonMember", this.m_objPersonMember);
                    if (getLocalData("m_objPersonMember") === this.m_objPersonMember) clearInterval(timer);
                },300)
                
            }
        })
        modal.present();
    }
	//修改会员性别
    changeMebInfo(): void {
        this.m_objEditMebInfo.MebName = this.m_objPersonMember.MebName;
        let loader = this.m_objAlertService.loading();
        this.m_objApiUrlService.editMebInfo(this.m_objEditMebInfo).subscribe(data => {
            loader.dismiss();
            if (data.Code == ErrorEnum.successfully) {
                this.m_objPersonMember.Sex = this.m_objEditMebInfo.Sex;
                this.m_objPersonMember.Sex == 1 ? this.m_objPersonMember.SexName = "男" : this.m_objPersonMember.SexName = "女";
                this.m_objAlertService.tipsToast("性别修改成功", "top");
                setLocalData("m_objPersonMember", this.m_objPersonMember);
            } else {
                this.m_objAlertService.tipsAlert(data.Msg);
            }
        })
    }
	//上传用户头像
    uploadMebHeadImg(event): void {
        let objFile = event.target.files[0];
        let sImgUrl = window.URL.createObjectURL(objFile);
        let sSanitizerUrl = this.m_objSanitizer.bypassSecurityTrustUrl(sImgUrl);
        this.m_sImgUrl = sSanitizerUrl;
        fileToBase64(objFile, this, function (sResult) {
            this.m_objApiUrlService.uploadMebHeadImg(sResult);
        });
    }
}
