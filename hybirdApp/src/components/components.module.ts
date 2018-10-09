import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { MyDateComponent } from './my-date/my-date';
import { MyHotelfilterComponent } from './my-hotelfilter/my-hotelfilter';
import { HomeComponent } from './home/home';
import { MemberCenterComponent } from './member-center/member-center';
import { PipesModule } from '../pipe/pipes.module';
import { OrderComponent } from './order/order';

@NgModule({
	declarations: [
		MyDateComponent,
		MyHotelfilterComponent,
		HomeComponent,
		MemberCenterComponent,
		OrderComponent,
	],
	imports: [
		IonicModule,
		PipesModule
	],
	exports: [
		MyDateComponent,
		MyHotelfilterComponent,
		HomeComponent,
		MemberCenterComponent,
		OrderComponent,
	]
})
export class ComponentsModule { }
