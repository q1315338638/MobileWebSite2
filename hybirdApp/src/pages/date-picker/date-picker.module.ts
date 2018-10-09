import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatePickerPage } from './date-picker';
import { ComponentsModule } from "./../../components/components.module";

@NgModule({
  declarations: [
    DatePickerPage
  ],
  imports: [
    IonicPageModule.forChild(DatePickerPage),
    ComponentsModule
  ],
})
export class DatePickerPageModule {}
