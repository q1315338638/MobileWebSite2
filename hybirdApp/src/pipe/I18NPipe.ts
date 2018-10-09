import { Pipe, PipeTransform } from '@angular/core';
import { ContextService } from '../service/context.service';
import { ELanguage } from '../enum/logicerrorenum';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { api, EApi } from '../config/apiurl';
import { UtilService } from '../service/utilservice.service';


class languageModel {
  ZH: string;
  EN: string;
}
const lsLM: languageModel[] = [
  { ZH: '广州浦雀科技有限公司', EN: 'Guang Zhou Co., LTD' },

];
@Pipe({
  name: 'i18n', pure: false
})
export class I18NPipe implements PipeTransform {
  constructor(public m_objContextService: ContextService,
    public m_objUtilService: UtilService) {
  }
  transform(value: string): string {
    var lsSplit = value.split('[');
    if (lsSplit.length > 1){
      if(!lsSplit[1].indexOf(']'))
      return '资源id配置错误 ' + value;
      lsSplit[1] = lsSplit[1].substring(0,lsSplit[1].length - 1);
      var sI18nResult = this.m_objUtilService.getLanguage(lsSplit[1]);
      return sI18nResult || lsSplit[0] || value;
    }
    return value;
  }

}
