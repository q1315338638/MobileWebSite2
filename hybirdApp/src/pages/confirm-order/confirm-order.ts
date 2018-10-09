import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { ThemeService } from '../../service/theme.service';

@IonicPage()
@Component({
  selector: 'page-confirm-order',
  templateUrl: 'confirm-order.html',
})
export class ConfirmOrderPage {

    constructor(
        public m_objNavCtrl: NavController,
        public m_objModalCtrl: ModalController,
        public m_objThemeService: ThemeService
    ) {
  }

    //确认订单按钮
    goOrderDetails(): void {
        let modal = this.m_objModalCtrl.create("OrderDetailsPage");
        modal.present();
    }

}
