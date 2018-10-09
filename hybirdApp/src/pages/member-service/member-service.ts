import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-member-service',
  templateUrl: 'member-service.html',
})
export class MemberServicePage {

    constructor(
        public m_objNavCtrl: NavController 
    ) { }
    goMaintenance(): void {
        this.m_objNavCtrl.push('MemberServiceMaintenancePage');
    }
}
