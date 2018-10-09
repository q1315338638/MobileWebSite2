import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalRoomDetailsPage } from './modal-room-details';

@NgModule({
  declarations: [
    ModalRoomDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalRoomDetailsPage),
  ],
})
export class ModalRoomDetailsPageModule {}
