import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaitingForEvaluationPage } from './waiting-for-evaluation';

@NgModule({
  declarations: [
    WaitingForEvaluationPage,
  ],
  imports: [
    IonicPageModule.forChild(WaitingForEvaluationPage),
  ],
})
export class WaitingForEvaluationPageModule {}
