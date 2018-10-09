import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MsgNextPage } from './msg-next';

@NgModule({
  declarations: [
    MsgNextPage,
  ],
  imports: [
    IonicPageModule.forChild(MsgNextPage),
  ],
})
export class MsgNextPageModule {}
