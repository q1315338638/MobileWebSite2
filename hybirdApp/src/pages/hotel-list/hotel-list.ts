import { Component, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { ApiurlService } from '../../service/apiurl.service';
import { ContextService } from '../../service/context.service';
// import { ModalHotelFilterPage } from '..//modal-hotel-filter/modal-hotel-filter';
import { HotelInfoService } from '../../service/hotelInfo.service';
import { ThemeService } from '../../service/theme.service';
import { trigger, transition, state, style, animate } from '@angular/animations';
// import { PriceFilterPage } from '../price-filter/price-filter';
import { onLineBookApiNew } from '../../config/apiurl';
import { MyDateService } from '../../service/myDate.service';
import { GetLocationService } from '../../service/getLocation.service';

@IonicPage()
@Component({
    selector: 'page-hotel-list',
    templateUrl: 'hotel-list.html',
    animations: [
        trigger('triRotage',[
            state('down', style({
                'transform': 'rotate(0deg)',
            })),
            state('up', style({
                'transform': 'rotate(180deg)',
            })),
            transition('down => up',animate(300)),
            transition('up => down',animate(300))
        ]),
        trigger('filterModal',[
            state('close', style({
                'transform': 'translateY(-5rem)',
            })),
            state('open', style({
                'transform': 'translateY(0rem)',
            })),
            transition('close => open', animate('500ms 16ms ease-in-out')),
            transition('open => close', animate('500ms 16ms ease-in-out'))
        ]),
        trigger('mask',[
            state('close', style({
                'visibility': 'hidden',
                'opacity': '0',
            })),
            state('open', style({
                'visibility': 'visible',
                'opacity': '.7',
            })),
            transition('close => open', animate('500ms 100ms ease-in-out')),
            transition('open => close', animate('500ms 100ms ease-in-out'))
        ])
    ]
})
export class HotelListPage{

    m_nCityNo: number; // 城市id
    m_sTag: string; // 搜索内容
    m_nPageIndex: number = 1; // 获取第几页数据
    m_nPageSize: number = 20; // 每页获取数据条数
    m_sArrive: string; // 到店时间
    m_sDepart: string; // 离店时间
    m_nDisplayType: number; // 酒店列表显示模式
    // m_false: boolean = false;
    // m_nCommentCount: number; 
    m_sUrl: string = onLineBookApiNew; // 接口地址
    m_nScreenHeight: number; // 屏幕高度
    m_nHeaderHeight: number; // headera高度
    m_nFilterBarHeight: number; // filterBar高度
    m_nFilterModalType: number; // filterBar显示内容类型
    m_lsFilterTypeList: Array<SortType> = [
        {sTypeName: '推荐排序', nTypeId: 1},
        {sTypeName: '低价优先', nTypeId: 2},
        {sTypeName: '高价优先', nTypeId: 3},
        {sTypeName: '最高评分', nTypeId: 4},
    ];
    m_nSortTypeSelectedId: number;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public apiUrl: ApiurlService,
        public m_objContextService: ContextService,
        public modalCtrl: ModalController,
        public m_objHotelInfoService: HotelInfoService,
        public m_objThemeService: ThemeService,
        public m_objElement: ElementRef,
        public m_objMyDateService: MyDateService,
        public m_objGetLocationService: GetLocationService,
    ) {
    }

    ionViewDidLoad() {
        this.getHotel(this.m_nPageIndex,this.m_nPageSize);
        this.m_objHotelInfoService.initPriceModal(); // price-filter模态弹窗价格区间初始值初始化
        this.m_nSortTypeSelectedId = 1;
        this.m_nDisplayType = 2;
        this.checkDom('.pq-filterBar', 100, () => {
            this.initMaskHeight();
        });
    }
	
	ionViewWillUnload() {
        this.m_objHotelInfoService.m_objHotelInfo = [];
    }

    // 检测DOM元素是否存在(el: 选择器, time: 检测间隔时间, 检测到DOM存在后，执行回调函数);
    checkDom(el: string, time: number, callback: any):void {
        const DOM = this.m_objElement.nativeElement.querySelector(el);
        if (DOM) {
            callback();
        } else {
            const timeout = setTimeout(() => {
                this.checkDom(el, time, callback);
            }, time);
        }
    }

    initMaskHeight(): void {
        this.m_nScreenHeight = window.screen.height;
        this.m_nFilterBarHeight = this.m_objElement.nativeElement.querySelector('.pq-filterBar').offsetHeight;
        if (!this.m_objContextService.m_isWeiXin) {
            this.m_nHeaderHeight = 0;
        } else {
            this.checkDom('.header', 100, () => {
                this.m_nHeaderHeight = this.m_objElement.nativeElement.querySelector('.header').offsetHeight;
            })
        }
        this.m_objElement.nativeElement.querySelector('#mask').style.height = (this.m_nScreenHeight - this.m_nHeaderHeight - this.m_nFilterBarHeight) + 'px';
    }

    //获取酒店列表
    getHotel(index: number,size: number, callback?:any): void{
        let hotelListParams = JSON.parse(sessionStorage.getItem('getHotelListParams'));
        this.m_sTag = hotelListParams.tag;
        this.m_nCityNo = hotelListParams.cityNo;
        this.m_sArrive = hotelListParams.arrive;
        this.m_sDepart = hotelListParams.depart;
        this.m_objHotelInfoService.getHotelInfo(this.m_sTag, this.m_nCityNo, index, size, this.m_sArrive, this.m_sDepart, callback);
        this.m_objContextService.m_sSearchTag = "";
    }

    // 上拉加载
    doInfinite(infiniteScroll): Promise<any>{
        return new Promise((reslove) => {
            if(this.m_nPageIndex < this.m_objHotelInfoService.m_nPageCount){
                this.m_nPageIndex+=1;
                this.getHotel(this.m_nPageIndex,this.m_nPageSize, () => {
                    reslove();
                });
            }else{
                infiniteScroll.enable(false);
            }
        })
    }

    // 进入酒店页
    goHotelDetails(hotelId: number): void{
        this.navCtrl.push('HotelPage');
        let HotelDetailsParams = {
            hotelId: hotelId,
            arrive: this.m_sArrive,
            depart: this.m_sDepart,
        }
        sessionStorage.setItem('hotelDetailsParams', JSON.stringify(HotelDetailsParams));
    }

    // 打开酒店筛选模态框
    openHotelFilter (No: number): void {
        this.m_nFilterModalType = No;
        // 判断模态框状态
        if (this.m_objHotelInfoService.m_sFilterModalState == 'open') {
            if (No == 0) { // 判断模态框类型
                this.m_objHotelInfoService.m_sActived = 'down';
            } else {
                this.m_objHotelInfoService.m_sPriceActive = 'down';
            }
            this.m_objHotelInfoService.m_sFilterModalState = 'close';
        } else {
            if (No == 0) {
                this.m_objHotelInfoService.m_sActived = 'up';
            } else {
                this.m_objHotelInfoService.m_sPriceActive = 'up';
            }
            this.m_objHotelInfoService.m_sFilterModalState = 'open';
        }
    }

    search(){
        this.closeModal();
        let inDate = this.m_objMyDateService.m_objDate.checkInDate;
        let outDate = this.m_objMyDateService.m_objDate.checkOutDate;
        let cityNo = this.m_objGetLocationService.m_nCityNo;
        let checkInDate = inDate.year + '-' + inDate.mon + '-' + inDate.day;
        let checkOutDate = outDate.year + '-' + outDate.mon + '-' + outDate.day;
		let searchTag = this.m_objContextService.m_sSearchTag;
		this.m_objHotelInfoService.m_objHotelInfo = [];
        this.m_objHotelInfoService.getHotelInfo(searchTag,cityNo,this.m_nPageIndex,this.m_nPageSize,checkInDate,checkOutDate);
    }

    // 关闭模态框
    closeModal (): void {
        this.m_objHotelInfoService.m_sActived = 'down';
        this.m_objHotelInfoService.m_sPriceActive = 'down';
        this.m_objHotelInfoService.m_sFilterModalState = 'close';
    }

    // 酒店列表排序
    hotelListSort(id: number): void {
        this.m_nSortTypeSelectedId = id;
        switch (id)
        {
            case 1:
                this.hotelListSortByDefault();
            break;
            case 2:
                this.hotelListSortByLowPrice();
            break;
            case 3:
                this.hotelListSortByHignPrice();
            break;
            case 4:
                this.hotelListSortByScore();
            break;
        }
        this.closeModal();
    }

    // 推荐排序
    hotelListSortByDefault(): void {
        this.m_objHotelInfoService.m_objHotelInfo = [];
        this.getHotel(this.m_nPageIndex,this.m_nPageSize);
    }

    // 低价优先排序
    hotelListSortByLowPrice(): void {
        this.m_objHotelInfoService.m_objHotelInfo.sort(this.sortByPrice);
    }

    // 高价优先排序
    hotelListSortByHignPrice(): void {
        this.m_objHotelInfoService.m_objHotelInfo.sort(this.sortByPrice).reverse();
    }

    // 最高评分排序
    hotelListSortByScore(): void {
        this.m_objHotelInfoService.m_objHotelInfo.sort(this.sortByScore).reverse();
    }

    // 价格升序序排序
    private sortByPrice(a:any, b:any): any {
        return a.MinRate - b.MinRate;
    }

    // 评分降序序排序
    private sortByScore(a:any, b:any): any {
        return a.CommentScore - b.CommentScore;
    }

    // modal模式的酒店筛选弹窗（暂不用）
    // filter(){
    //     let hotelFilterModal = this.modalCtrl.create(ModalHotelFilterPage,{
    //         opts: {
    //             showBackdrop: true,
    //             enableBackdropDismiss: true,
    //         }
    //     });
    //     hotelFilterModal.present();
    //     this.m_objHotelInfoService.m_sActived = 'up';
    // }

    // modal模式的价格筛选弹窗（暂不用）
    // priceFilter (): void {
    //     let priceFilterModal = this.modalCtrl.create(PriceFilterPage);
    //     priceFilterModal.present();
    //     this.m_objHotelInfoService.m_sPriceActive = 'up';
    // }

    //酒店别恋显示方式切换
    changeShowType(){
        if(this.m_nDisplayType == 1) {
            this.m_nDisplayType = 2;
        } else {
            this.m_nDisplayType = 1;
        }
    }
}

class SortType {
    sTypeName: string;
    nTypeId: number;
}

// let url = 'http://183.6.104.189:9011' + '/api/MebAbout/CheckMarketIsFeasibility?nMarketID=6&nMebID='+ mebID +'&objFilterSet=' + JSON.stringify(FilterSet) 
// 			+ '&lsActionParam=[]&objMarketContextInfo=' + JSON.stringify(MarketContextInfo);


// let url = 'http://183.6.104.189:9011' + '/api/MebAbout/MebMarketExecute?nMarketID=6&&nMebID='+ mebID +'&lsActionParam=' + JSON.stringify(lsActionParam)
// 	+ '&objContextInfo='+ JSON.stringify(MarketContextInfo) +'&nExecuteUserID=710&sExecuteUserName=微信';