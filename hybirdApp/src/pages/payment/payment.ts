import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController, ViewController, App } from 'ionic-angular';
import { ThemeService } from '../../service/theme.service';
import { ApiurlService } from '../../service/apiurl.service';
import { RoomFolio } from '../../frontofficedataclass/roomfolio';
import { ContextService } from '../../service/context.service';
import { ErrorEnum } from '../../model/enumclasses';
import { getSessionData } from '../../util/util';
import { AlertService } from '../../service/alert.service';
import { FolioPayTrans } from '../../frontofficedataclass/foliopaytrans';
import { getQueryString } from '../../util/ui';
declare var CreatePayObj;
declare var jsApiCall:any;
declare var callpay:any;

@IonicPage()
@Component({
    selector: 'page-payment',
    templateUrl: 'payment.html',
})
export class PaymentPage {
    m_sOpenID: string;
    m_lsPayType: number = 0;
    m_objOrderDetails: RoomFolio = new RoomFolio();
    m_nFolioId: any;
    m_nRoomRate: number;//房价
    m_nRoomCount: number;//住多少间
    m_nNightCount: number;//住多少晚
    m_nDiscountAmount: number;//优惠券优惠金额
    m_nAmount: number;//实际支付金额
    m_objFolioPayTrans: FolioPayTrans[] = [];
    m_lsFunctionList: boolean[] = [false, false, false, false, false];
    m_objCoupon: any;
    constructor(
        public m_objNavCtrl: NavController,
        public m_objThemeService: ThemeService,
        public m_objModalCtrl: ModalController,
        public m_objActionSheetCtrl: ActionSheetController,
        public m_objApiUrl: ApiurlService,
        public m_objNavParams: NavParams,
        public m_objContextService: ContextService,
        private m_objAlertService: AlertService,
        private m_objApp: App,
	) {

	}
	//即将进入页面时执行
    ionViewDidLoad() {
		let objTime = setInterval(() => {
            //微信支付獲取OPEN_ID
			this.m_sOpenID = getQueryString("PropertyValue");
			if (this.m_sOpenID != null && this.m_sOpenID != undefined && this.m_sOpenID != "null") {
				this.m_nFolioId = window.sessionStorage.getItem("m_nFolioID");
				this.getFolioInfo(this.m_nFolioId);
				clearInterval(objTime);
			}
		}, 500)
		if (this.m_sOpenID == null || this.m_sOpenID == undefined || this.m_sOpenID == "null") {
			this.m_nFolioId = getSessionData('folioId');
			this.getFolioInfo(this.m_nFolioId);
		} else {
			this.m_nFolioId = window.sessionStorage.getItem("m_nFolioID");
			this.getFolioInfo(this.m_nFolioId);
		}
		/*微信支付页面跳转后执行*/
		this.functionList();
		setInterval(() => {
			this.m_nAmount = this.m_nRoomRate * this.m_nRoomCount * this.m_nNightCount - this.m_objContextService.m_nDiscountAmount;
			if (this.m_nAmount < 0) this.m_nAmount = 0;
		}, 1000)
    }
    //離開頁面后執行
    ionViewDidLeave() {
        this.m_objContextService.m_lsCouponCode = [];
        this.m_objContextService.m_nDiscountAmount = 0;
        this.m_objContextService.m_bIsUsedCoupon = false;
	}
	//支付列表
	functionList(): void {
        let lsFeatures = this.m_objContextService.m_objFeatures.PayOrgin.split(",");
		let nLength = lsFeatures.length;
		for (let i = 0; i < nLength; i++) {
			switch (lsFeatures[i]) {
				case "107":
					//微信支付
					this.m_lsFunctionList[0] = true;
					break;
				case "108":
					//第三方支付
					this.m_lsFunctionList[3] = true;
					break;
				case "1":
					//储值支付
					this.m_lsFunctionList[1] = true;
			}
		}
		//前台支付
		this.m_lsFunctionList[2] = true;

        let nFunctionListLength = this.m_lsFunctionList.length;
        for(let i=0;i<nFunctionListLength;i++){
            if(this.m_lsFunctionList[i]){
                //默认支付方式设置为第一个
                this.m_lsPayType = i;
                return;
            }
        }
        
        
	}
	//获取房单信息
    getFolioInfo(folioId: number) {
        this.m_objApiUrl.getOrder(this.m_nFolioId).subscribe(u => {
            if (u.Code == ErrorEnum.successfully) {
                this.m_objOrderDetails = u.Data;
                //debugger;
                this.m_nRoomRate = u.Data.RoomRate;
                this.m_nRoomCount = u.Data.RoomCount;
                this.m_nNightCount = Number(u.Data.NightCount);
				//获取支付记录，查看是否有使用优惠券
                this.m_objApiUrl.getFolioPayTrans(folioId).subscribe(data => {
                    if (data.Code == ErrorEnum.successfully) {
                        //大于一证明使用了优惠券，而且是第二次进来支付页面的
                        if (data.Data != null) {
                            if (data.Data.length > 1) {
                                //清空优惠券编号列表
                                this.m_objContextService.m_lsCouponCode = [];
                                this.m_objContextService.m_nDiscountAmount = 0;
                                this.m_objContextService.m_bIsUsedCoupon = false;
                                for (var list of data.Data) {
                                    //获取优惠券编号及优惠价格
                                    if (list.OriginID == 4) {
                                        this.m_objContextService.m_lsCouponCode.push(list.OriginTransNo);
                                        this.m_objContextService.m_nDiscountAmount += list.Amount;
                                    }
                                }
                            }
                        }
							//计算应付金额
                            this.m_nAmount = this.m_nRoomRate * this.m_nRoomCount * this.m_nNightCount - this.m_objContextService.m_nDiscountAmount;
                        if (this.m_nAmount < 0) this.m_nAmount = 0;
                        if (this.m_sOpenID != null) this.weChatPay();
                    }
                });
            }
        });
    }

    //选择支付方式
    choosePayType(num: number): void {
        this.m_lsPayType = num;
    }
    goCouponPage(){
        if (!(this.m_objContextService.m_nDiscountAmount > 0)) {
			var Modal = this.m_objModalCtrl.create("SelectCouponPage", {
                maxAmount: this.m_nRoomCount * this.m_nNightCount
            });
            Modal.present();
        }
    }
    toPay(){
        switch(this.m_lsPayType)
        {
            case 0:
                this.weChatPay();
                break;
            case 1:
                this.storagePay();
                break;
            case 2:
                this.frontPay();
                break;
            case 3:
                this.midTransPay();
                break;
        }
    }

    //微信支付
    weChatPay() {
        if (!this.m_sOpenID || this.m_sOpenID == "null") {
            if (window.sessionStorage.getItem("m_nFolioID") == null || window.sessionStorage.getItem("m_nFolioID") == undefined) {
                window.sessionStorage.setItem("m_nFolioID", this.m_nFolioId);
            };
            let loader = this.m_objAlertService.loading();
            //setSessionData("goPaymentPage", 1);
            if (this.m_objContextService.m_nDiscountAmount>0) {
                this.m_objApiUrl.onLinePayForDisCount(this.m_objOrderDetails.ChainID, Number(this.m_objOrderDetails.FolioID), this.m_objContextService.m_lsCouponCode).subscribe()
            }
            this.m_objApiUrl.getOpenID("").subscribe(data => {
                loader.dismiss();
                //let sUrl = window.location.href.split("#")[0] + "#/payment/%E9%A2%84%E5%AE%9A/hotel";
                let sUrl = data.Data + window.location.href.replace("order", "payment").replace("details", "payment").replace("#","%23");
                //debugger;
                location.href = sUrl;
            })
        } else {
            //如果有使用优惠券
            //if (this.m_objContextService.m_bIsUsedCoupon) {
            //    this.m_objApiUrl.onLinePayForDisCount(this.m_objOrderDetails.ChainID, Number(this.m_objOrderDetails.FolioID), this.m_objContextService.m_lsCouponCode).subscribe(data => {
            //        if (data.Code == ErrorEnum.successfully) {
            //            this.m_nAmount = (this.m_nRoomRate * this.m_nRoomCount * this.m_nNightCount) - Number(data.Data);
            //            this.m_objApiUrl.onLinePayForWeChat(this.m_objOrderDetails.ChainID, Number(this.m_objOrderDetails.FolioID), this.m_nAmount, this.m_sOpenID).subscribe(u => {
            //                if (data.Code == ErrorEnum.successfully) {
            //                    //loader.dismiss();
            //                    var objPayData = JSON.parse(u.Data);
            //                    var objPostURL = JSON.parse(objPayData.PostURL);
            //                    window.sessionStorage.removeItem("m_nFolioID");
            //                    callpay(objPostURL.appId, objPostURL.timeStamp, objPostURL.nonceStr, objPostURL.package, objPostURL.paySign, objPayData.nFolieID);
            //                }
            //            })
            //        }
            //    })
            //} else {
				//到了这里当然是要开始微信支付了啦
            this.m_objApiUrl.onLinePayForWeChat(this.m_objOrderDetails.ChainID, Number(this.m_objOrderDetails.FolioID), this.m_nAmount, this.m_sOpenID).subscribe(u => {
                if (u.Code == ErrorEnum.successfully) {
                    var objPayData = JSON.parse(u.Data);
                    var objPostURL = JSON.parse(objPayData.PostURL);
                    window.sessionStorage.removeItem("m_nFolioID");
                    callpay(objPostURL.appId, objPostURL.timeStamp, objPostURL.nonceStr, objPostURL.package, objPostURL.paySign, objPayData.nFolieID);
                } else {
                    this.m_objAlertService.tipsAlert(u.Msg);
                }
            })
            //}

        }
    }

    //储值支付
    storagePay(){
        this.m_objModalCtrl.create("EnterPasswordPage", { "m_objOrderDetails": this.m_objOrderDetails}).present();
    }

    //前台支付
    frontPay() {
        this.m_objAlertService.tipsAlert("订单提交成功", () => {
            this.m_objApp.getRootNav().push("TabsPage");
        })
    }

    //MidTrans 支付
    midTransPay() {
        let loader = this.m_objAlertService.loading();
        if (this.m_objContextService.m_bIsUsedCoupon) {
            this.m_objApiUrl.onLinePayForDisCount(this.m_objOrderDetails.ChainID, Number(this.m_objOrderDetails.FolioID), this.m_objContextService.m_lsCouponCode).subscribe(data => {
                loader.dismiss();
                if (data.Code == ErrorEnum.successfully) {
                    this.m_nAmount = (this.m_nRoomRate * this.m_nRoomCount * this.m_nNightCount) - Number(data.Data);
                    this.transPayFn();
                } else {
                    loader.dismiss();
                    this.m_objAlertService.tipsAlert(data.Msg);
                }
            })
        } else {
            loader.dismiss();
            this.transPayFn();
        }

        
    }
	//第三方支付函数
    transPayFn(): void {
        this.m_objApiUrl.onLinePayForMidtrans(this.m_objOrderDetails.ChainID, Number(this.m_objOrderDetails.FolioID), this.m_nAmount).subscribe(data => {
            if (data.Code == ErrorEnum.successfully) {
                window.open(data.Data.redirect_url);
            } else {
                this.m_objAlertService.tipsAlert(data.Msg);
            }
        })
    }
}
