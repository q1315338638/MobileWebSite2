import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { getQueryString } from '../../util/ui';
import { initGoogleMap } from '../../util/util';
import { ContextService } from '../../service/context.service';

declare var BMap;
declare var BMap_Symbol_SHAPE_POINT;

@IonicPage()
@Component({
    selector: 'page-map',
    templateUrl: 'map.html',
})
export class MapPage {

    @ViewChild('map') map_container: ElementRef;

    m_sBrandName: string;
    m_sChainName: string;
    m_sAddress: string;
    m_sMapUrl: string;

    m_longitude: number = 0; //经度 
    m_latitude: number = 0; //纬度

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
		public m_objSanitizer: DomSanitizer,
		private m_objContextSetvice: ContextService,
    ) {
        this.m_sBrandName = navParams.get('brandName');
        this.m_sChainName = navParams.get('chainName');
        this.m_sAddress = navParams.get('address');
        this.m_sMapUrl = navParams.get('mapUrl');
    }

    ionViewDidEnter() {
        this.map();
    }

    googleMap(){
        let nLongitude = parseFloat(getQueryString('longitude', this.navParams.get('mapUrl')));
        let nLatitude = parseFloat(getQueryString('latitude', this.navParams.get('mapUrl')));
        if (this.m_longitude == nLongitude && nLatitude == this.m_latitude) return;
        this.m_latitude = nLatitude;
        this.m_longitude = nLongitude;
        initGoogleMap('map_container', nLongitude, nLatitude, this.m_sChainName);
    }
    map(){
        let nLongitude = parseFloat(getQueryString('longitude', this.navParams.get('mapUrl')));
        let nLatitude = parseFloat(getQueryString('latitude', this.navParams.get('mapUrl')));
        let map = new BMap.Map(this.map_container.nativeElement, { enableMapClick: true });//创建地图实例
        let point = new BMap.Point(113.143501,23.045767);
        map.centerAndZoom(point, 19); //设置中心和地图显示级别
        map.addControl(new BMap.NavigationControl());
        map.enableScrollWheelZoom(true); //启动滚轮放大缩小，默认禁用
        map.enableContinuousZoom(true); //连续缩放效果，默认禁用
        let infoWindow = new BMap.InfoWindow(this.m_sAddress); // 创建信息窗口对象
        map.openInfoWindow(infoWindow,point); //开启信息窗口
    }
}
