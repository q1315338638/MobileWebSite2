import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelListPage } from './hotel-list';
import { ComponentsModule } from "./../../components/components.module";
import { PipesModule } from '../../pipe/pipes.module';

@NgModule({
  declarations: [
    HotelListPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelListPage),
    ComponentsModule,
    PipesModule
  ],
})
export class HotelListPageModule {}
