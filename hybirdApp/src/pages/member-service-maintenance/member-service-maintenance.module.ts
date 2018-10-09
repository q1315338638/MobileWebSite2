import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberServiceMaintenancePage } from './member-service-maintenance';

@NgModule({
  declarations: [
    MemberServiceMaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(MemberServiceMaintenancePage),
  ],
})
export class MemberServiceMaintenancePageModule {}
