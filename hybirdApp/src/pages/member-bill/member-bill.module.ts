import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberBillPage } from './member-bill';

@NgModule({
  declarations: [
    MemberBillPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberBillPage),
  ],
})
export class MemberBillPageModule {}
