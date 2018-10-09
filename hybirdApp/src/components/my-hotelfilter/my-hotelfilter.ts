import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetLocationService } from '../../service/getLocation.service';
import { ContextService } from '../../service/context.service';
import { MyDateService } from '../../service/myDate.service';
import { AlertService } from '../../service/alert.service';
import { ThemeService } from '../../service/theme.service';

@Component({
    selector: 'my-hotelfilter',
    templateUrl: 'my-hotelfilter.html'
})
export class MyHotelfilterComponent {
	m_lsFunction: Array<boolean> = [false, false];
    constructor(
		private m_objNavCtrl: NavController,
		private m_objGetLocationService: GetLocationService,
		private m_objContextService: ContextService,
		private m_objMyDateService: MyDateService,
		private m_objAlertService: AlertService,
        private m_objThemeService: ThemeService,
    ) {}

    // 城市选择页面
    goCityPicker() :void{
        this.m_objNavCtrl.push('CityPickerPage');
    }

    // 日期选择页面
    goDatePicker() :void{
        this.m_objNavCtrl.push('DatePickerPage');
    }

    // 获取定位
    getLocation(): void{
        let loader = this.m_objAlertService.loading('');
        if (localStorage.getItem("[cityList]")) {
            this.m_objGetLocationService.getLocationCity('baiduLocation', () => {
                loader.dismiss();
            });
        } else {
            this.m_objContextService.getCity(() => {
                this.m_objGetLocationService.getLocationCity('baiduLocation', () => {
                    loader.dismiss();
                });
            });
        }
    }

    getLocationCity (): void {

    }

    onKey(event: any){
        this.m_objContextService.m_sSearchTag = event.target.value;
    }
}
