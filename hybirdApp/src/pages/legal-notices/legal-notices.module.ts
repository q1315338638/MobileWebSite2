import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LegalNoticesPage } from './legal-notices';

@NgModule({
  declarations: [
    LegalNoticesPage,
  ],
  imports: [
    IonicPageModule.forChild(LegalNoticesPage),
  ],
})
export class LegalNoticesPageModule {}
