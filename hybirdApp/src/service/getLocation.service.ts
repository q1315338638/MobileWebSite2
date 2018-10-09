import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

declare var BMap;
declare var BMAP_STATUS_SUCCESS;

@Injectable()
export class GetLocationService {

    m_sCurrentCity:string = "";
    m_sSelectedCity:string = "全部";
    m_nCityNo:number = 0;

    constructor(
        private toastCtrl: ToastController,
    ) {}
    
	public getLocationCity(el: string, callback?: any) {
        let self = this;
        let map = new BMap.Map(el);
		let point = new BMap.Point(116.331398,39.897445);
		map.centerAndZoom(point,12);
        let geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function (r) {
			if(this.getStatus() == BMAP_STATUS_SUCCESS){
				var mk = new BMap.Marker(r.point);
				map.addOverlay(mk);
                map.panTo(r.point);
				self.currentLocationCity(r.address.city);
                if (callback) {
                    callback();
                };
			};
        });
    }

    public currentLocationCity(cityName:string){
        this.m_sCurrentCity = cityName;
        this.m_sSelectedCity = cityName;
        this.bindCityId(cityName);
    }

    public selectedCity(name:string){
        this.m_sSelectedCity = name;
    }

    private bindCityId(cityName:string){
        let cityData = JSON.parse(localStorage["[cityList]"]).Data;
        let flag = false;
        for(let i = 0; i < cityData.length; i++){
            if(cityData[i].objCity.CityName == cityName){
                this.m_nCityNo = cityData[i].objCity.CityID;
                flag = true;
            }
        }
        if(!flag){
            this.m_nCityNo = 0;
            console.log(0);
            let msg = '您所在的城市' + cityName + '暂时还没有我们的酒店，请打开城市列表，选择您要预定本酒店的城市！';
            let toast = this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
    }
}
