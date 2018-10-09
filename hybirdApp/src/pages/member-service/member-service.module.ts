import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberServicePage } from './member-service';

@NgModule({
  declarations: [
    MemberServicePage,
  ],
  imports: [
    IonicPageModule.forChild(MemberServicePage),
  ],
})
export class MemberServicePageModule {}
