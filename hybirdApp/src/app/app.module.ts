
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DatePipe } from '@angular/common';

import { MyApp } from './app.component';
import { HttpService } from '../http/http.service';
import { ApiurlService } from '../service/apiurl.service';
import { AlertService } from '../service/alert.service';
import { HttpModule } from '@angular/http';
import { ThemeService } from '../service/theme.service';
import { ContextService } from '../service/context.service';
import { GetLocationService } from '../service/getLocation.service';
import { MyDateService } from '../service/myDate.service';
// import { ModalHotelFilterPage } from '../pages/modal-hotel-filter/modal-hotel-filter';
import { ComponentsModule } from '../components/components.module'
import { HotelInfoService } from '../service/hotelInfo.service'
// import { ModalRoomDetailsPage } from '../pages/modal-room-details/modal-room-details'
//import { SelectCouponPage } from '../pages/select-coupon/select-coupon';
import { UtilService } from '../service/utilservice.service';
import { ProhibitedPopService } from '../service/prohibitedpop.service';
// import { PriceFilterPage } from '../pages/price-filter/price-filter';
@NgModule({
    declarations: [
        MyApp,
        // ModalHotelFilterPage,
        // ModalRoomDetailsPage,
        //SelectCouponPage,
        // PriceFilterPage,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        IonicModule.forRoot(MyApp, {
            backButtonText: ""
        }),
        BrowserAnimationsModule,
		ComponentsModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        // ModalHotelFilterPage,
        // ModalRoomDetailsPage,
        //SelectCouponPage,
        // PriceFilterPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        HttpService,
        ApiurlService,
        AlertService,
        DatePipe,
        ThemeService,
        GetLocationService,
        ContextService,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        MyDateService,
        HotelInfoService,
        UtilService,
        ProhibitedPopService,
    ]
})
export class AppModule { }
