import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectCouponPage } from './select-coupon';

@NgModule({
  declarations: [
    SelectCouponPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectCouponPage),
  ],
})
export class SelectCouponPageModule {}
