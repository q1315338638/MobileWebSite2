import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PriceFilterPage } from './price-filter';

@NgModule({
  declarations: [
    PriceFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(PriceFilterPage),
  ],
})
export class PriceFilterPageModule {}
