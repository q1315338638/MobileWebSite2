import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ThemeService } from '../../service/theme.service';

@IonicPage()
@Component({
  selector: 'page-member-bill',
  templateUrl: 'member-bill.html',
})
export class MemberBillPage {
    m_lsjShow: boolean = false;
    constructor(
        private m_objNavCtrl: NavController,
        private m_objThemeService: ThemeService,
    ) { }
    clickBill(): void {
        this.m_lsjShow = !this.m_lsjShow;
    }


}
