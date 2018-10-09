import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnterPasswordPage } from './enter-password';

@NgModule({
  declarations: [
    EnterPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(EnterPasswordPage),
  ],
})
export class EnterPasswordPageModule {}
