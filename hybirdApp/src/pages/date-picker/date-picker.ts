import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContextService } from '../../service/context.service';

@IonicPage()
@Component({
    selector: 'page-date-picker',
    templateUrl: 'date-picker.html',
})

export class DatePickerPage implements OnInit{

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public m_objContextService: ContextService,
    ) {}

    ngOnInit(){
        
    }

}
