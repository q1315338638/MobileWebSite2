import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityPickerPage } from './city-picker';

@NgModule({
  declarations: [
    CityPickerPage,
  ],
  imports: [
    IonicPageModule.forChild(CityPickerPage),
  ],
})
export class CityPickerPageModule {}
