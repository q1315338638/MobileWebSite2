import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelCommentPage } from './hotel-comment';

@NgModule({
  declarations: [
    HotelCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelCommentPage),
  ],
})
export class HotelCommentPageModule {}
