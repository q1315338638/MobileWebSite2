import { Injectable, ChangeDetectorRef, ApplicationRef, ViewRef } from '@angular/core';
import { HttpService } from '../http/http.service';
import { ContextService } from './context.service';
 import { debug } from 'util';
 import { ELanguage, Ekey, parseLanguage } from '../enum/logicerrorenum';
 //import { checkNull } from '../util/util';
 //import { ComponentMessageService, EventType } from './component-message.service';
 //import { YesNoDialogue, EShowType } from '../pages/util/yes-no-dialogue/yes-no-dialogue.component';
import { api, EApi } from '../config/apiurl';
import { I18NLanguage } from '../model/i18nlanguage'
 //import { EShowDiagleZIndex } from '../config/ezindex';
import { DatePipe } from '@angular/common';
declare let laydate;
@Injectable()
export class UtilService {
    m_lsLanguageResource: I18NLanguage[] = [];
    //民族api请求地址
    m_sGetNationApi: string;
    //国籍api请求地址
    m_sGetNationalityApi: string;
    //获取PMS字典数据api请求地址
    m_sGetPMSDictCodeApi: string;
    //获取字典数据api请求地址
    m_sGetDictCodeApi: string;
    //获取系统配置参数请求地址
    m_sGetPMSParamListApi: string;
     //m_objYesNoDialogue = new YesNoDialogue();
    constructor(
        public m_objHttpService: HttpService,
        public m_objContextService: ContextService,
         //public m_objMessageService: ComponentMessageService,
        public m_objDatePipe: DatePipe
    ) {
         //this.initYesNoDialogue();
    }
     //public initYesNoDialogue(): void {
     //    this.m_objYesNoDialogue.m_nGroup = 1;
     //    this.m_objYesNoDialogue.m_sContent = '内容待更改';
     //    this.m_objYesNoDialogue.m_eType = 1;
     //    this.m_objYesNoDialogue.m_sTitle = '标题待更改';
     //    this.m_objYesNoDialogue.m_lsButton = ['确认', '取消'];
     //    this.m_objYesNoDialogue.m_lsValue = ['按钮1的返回值', '按钮2的返回值'];

     //}

     //showYesNoDefault(sContent: string, nGroup: number, eShowType?: EShowType): void {
     //    this.m_objYesNoDialogue.m_nGroup = nGroup;
     //    this.m_objYesNoDialogue.m_sContent = sContent;
     //    this.m_objYesNoDialogue.m_eType = eShowType ? eShowType : 1;
     //    this.m_objYesNoDialogue.m_sTitle = '请确认';
     //    this.m_objYesNoDialogue.m_lsButton = ['确认', '取消'];
     //    this.m_objYesNoDialogue.m_lsValue = [true, false];
     //    this.m_objMessageService.pushEmptyGroup(EventType.showYesNO, this.m_objYesNoDialogue.m_nGroup);
     //}
     //showYesNoDefaultEkey(eKey: Ekey, nGroup: number, lsArr?: any, eShowType?: EShowType): void {
     //    this.m_objYesNoDialogue.m_nGroup = nGroup;
     //    this.m_objYesNoDialogue.m_sContent = parseLanguage(this.m_objContextService, eKey, lsArr);
     //    this.m_objYesNoDialogue.m_eType = eShowType ? eShowType : 1;
     //    this.m_objYesNoDialogue.m_sTitle = '请确认';
     //    this.m_objYesNoDialogue.m_lsButton = ['确认', '取消'];
     //    this.m_objYesNoDialogue.m_lsValue = [true, false];
     //    this.m_objMessageService.pushEmptyGroup(EventType.showYesNO, this.m_objYesNoDialogue.m_nGroup);
     //}
     //showYesNoDialogue(objYesNoDialogue: YesNoDialogue): void {
     //    this.m_objYesNoDialogue = objYesNoDialogue;
     //    this.m_objMessageService.pushEmptyGroup(EventType.showYesNO, objYesNoDialogue.m_nGroup);
     //}
     //showAlertEkey(ekey: Ekey, lsArr?: any): void {
     //    this.m_objYesNoDialogue.m_nGroup = EShowType.info;
     //    this.m_objYesNoDialogue.m_sContent = parseLanguage(this.m_objContextService, ekey, lsArr);
     //    this.m_objYesNoDialogue.m_eType = 1;
     //    this.m_objYesNoDialogue.m_sTitle = '提示';
     //    this.m_objYesNoDialogue.m_lsButton = ['确认'];
     //    this.m_objYesNoDialogue.m_lsValue = [true];
     //    this.m_objMessageService.pushEmptyGroup(EventType.showYesNO, this.m_objYesNoDialogue.m_nGroup);
     //}
     //showDiagle(eShowDiague: EShowDiagleZIndex): void {
     //    this.m_objMessageService.pushEmptyGroup(EventType.showDialogFrom, eShowDiague);
     //}
     showAlertWithI18N(sKey: string, sDefaultDisplay: string): void {
         var sI18NResult = this.getLanguage(sKey);
         //this.m_objYesNoDialogue.m_nGroup = EShowType.info;
         console.error(sI18NResult || sDefaultDisplay || '找不到语言资源,并且没有设置默认显示字符串' + sKey);
         //this.m_objYesNoDialogue.m_eType = 1;
         //this.m_objYesNoDialogue.m_sTitle = '提示';
         //this.m_objYesNoDialogue.m_lsButton = ['确认'];
         //this.m_objYesNoDialogue.m_lsValue = [true];
         //this.m_objMessageService.pushEmptyGroup(EventType.showYesNO, this.m_objYesNoDialogue.m_nGroup);
     }
     //hideDiagle(eShowDiague: EShowDiagleZIndex): void {
     //    this.m_objMessageService.pushEmptyGroup(EventType.hideDialogFrom, eShowDiague);
     //}
     //showAlert(sContent: string): void {
     //    this.m_objYesNoDialogue.m_nGroup = EShowType.info;
     //    this.m_objYesNoDialogue.m_sContent = sContent;
     //    this.m_objYesNoDialogue.m_eType = 1;
     //    this.m_objYesNoDialogue.m_sTitle = '提示';
     //    this.m_objYesNoDialogue.m_lsButton = ['确认'];
     //    this.m_objYesNoDialogue.m_lsValue = [true];
     //    this.m_objMessageService.pushEmptyGroup(EventType.showYesNO, this.m_objYesNoDialogue.m_nGroup);
     //}

    getLanguage(sKey: string): string {
        var sTryAddItem = api(EApi.tryAddItem) + '?' + 'sKey=' + sKey
        if (this.m_lsLanguageResource.length > 0) {
            var objLanguage = this.m_lsLanguageResource.filter(u => u.key == sKey)[0];
            if (objLanguage)
                return objLanguage.value;
            this.m_lsLanguageResource.push({ key: sKey, value: null });
            this.m_objHttpService.post(sTryAddItem).subscribe(u => {
                console.log(sKey + "加入资源文件待处理项")
            });
            return '';
        }
        var sLanguageJSONResource: string = "languageJSON-" + this.m_objContextService.getLanguage();
        var sLanguageJSON = sessionStorage[sLanguageJSONResource];
        if (!sLanguageJSON) {
            var sI18NGet = api(EApi.getJSONResource) + '?' + 'eLanguage=' + this.m_objContextService.getLanguage()
            sLanguageJSON = this.m_objHttpService.getNoAsync<string>(sI18NGet);

        }
        if (sLanguageJSON) {
            sessionStorage[sLanguageJSONResource] = sLanguageJSON;
            this.m_lsLanguageResource = JSON.parse(sLanguageJSON);
            var objLanguage = this.m_lsLanguageResource.filter(u => u.key == sKey)[0];
            if (objLanguage)
                return objLanguage.value;
            else {
                this.m_objHttpService.post(sTryAddItem).subscribe(u => {
                    console.log(sKey + "加入资源文件待处理项")
                });
                return '';
            }

        } else {
            throw 'getJSONResource Error';
        }
    }


    //绑定时间选择 节点id 组件对象 组件双向绑定属性 最小日期 最大日期
     bindDataPicker(sElementID: string, objComponent: any, sPropertyName: string, minDate?: Date, maxDate?: Date): void {
         var sLang = '';
         if (this.m_objContextService.getLanguage() == ELanguage.zh)
             sLang = 'cn';

         window[sElementID] = {
             'Component': objComponent,
             'PropertyName': sPropertyName

         };
         laydate.render({
             elem: '#' + sElementID,
             lang: sLang,
             min: minDate == undefined ? '1900-01-01' : (minDate.getFullYear() + '-' + (minDate.getMonth() + 1) + '-' + minDate.getDate()),
             max: maxDate == undefined ? '2070-01-01' : (maxDate.getFullYear() + '-' + (maxDate.getMonth() + 1) + '-' + maxDate.getDate()),
             choose: function (sDate:any) {
                 var lsProperty: string[] = window[sElementID].PropertyName.split('.');
                 var sScriptDynamic = 'window[' + '\'' + sElementID + '\'].Component';
                 for (var i = 0; i < lsProperty.length; i++) {
                     sScriptDynamic += '[' + '"' + lsProperty[i] + '"' + ']';
                 }
                 sScriptDynamic += '= \'' + sDate + '\''
                 console.log('日期插件值更新');
                 console.log(sScriptDynamic)
                 eval(sScriptDynamic);
             }
         })
         console.log('#' + sElementID + "绑定时间选择器");
     }
}

