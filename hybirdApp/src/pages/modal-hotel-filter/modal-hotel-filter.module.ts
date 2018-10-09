import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalHotelFilterPage } from './modal-hotel-filter';
import { ComponentsModule } from "./../../components/components.module";

@NgModule({
  declarations: [
    ModalHotelFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalHotelFilterPage),
    ComponentsModule
  ],
})
export class ModalHotelFilterPageModule {}
