import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DiscountCoupons } from '../../centerdataclass/discountcoupons';
import { ApiurlService } from '../../service/apiurl.service';
import { UtilService } from '../../service/utilservice.service';
import { ThemeService } from '../../service/theme.service';
import { AlertService } from '../../service/alert.service';
import { ContextService } from '../../service/context.service';
import { ECouponsState } from '../../centerdataclass/ecouponstate';

@IonicPage()
@Component({
    selector: 'page-select-coupon',
    templateUrl: 'select-coupon.html',
})
export class SelectCouponPage {

    m_lsCouponTypeList: Array<any> = [];
    m_bIsActived: boolean = false;
    m_nMaxAmount: number;
    m_nPageSize: number = 30;
    m_nPageNo: number = 1;
    m_nRowCount: number = 0;
    m_lsQueryDiscountCouponsCondition: ECouponsState[] = [];
    m_lsCouponsEffective: DiscountCoupons[] = [];
    m_lsSelectedList: Array<boolean> = [];
    m_lsCouponCode: Array<string> = [];
	m_bHaveCoupon: boolean = false;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public m_objApiUrl: ApiurlService,
        public m_objUtilService: UtilService,
        public m_objThemeService: ThemeService,
        public m_objAlertService: AlertService,
        public m_objContextService: ContextService
    ) {
        this.m_nMaxAmount = this.navParams.get('maxAmount');
        this.m_objContextService.m_nDiscountAmount = 0;
    }

    ionViewDidLoad() {
        this.getCoupon();
    }

    back(){
        if(this.m_lsCouponCode.length != 0){
            this.m_objContextService.m_bIsUsedCoupon = true;
            this.m_objContextService.m_lsCouponCode = this.m_lsCouponCode;
        }else{
            this.m_objContextService.m_bIsUsedCoupon = false;
        }
        this.dismiss();
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }
	//获取优惠券
    getCoupon(){
        let dtNowDate = this.m_objUtilService.m_objDatePipe.transform(new Date(), 'yyyy-MM-dd');
        this.m_lsQueryDiscountCouponsCondition = [ECouponsState.Published];
        this.m_objApiUrl.getCoupons(this.m_nPageSize, this.m_nPageNo, this.m_lsQueryDiscountCouponsCondition).subscribe(u => {
            console.log(u);
			if (u.Data.DataSet != null) {
				u.Data.DataSet.forEach(s => {
					if (this.m_objUtilService.m_objDatePipe.transform(s.EndDate, 'yyyy-MM-dd') > dtNowDate) { //获取有效期内的优惠券
						this.m_lsCouponsEffective.push(s);
						this.m_lsSelectedList.push(false);
					}
				});
				//当优惠券列表为空时显示无优惠券
				if (this.m_lsCouponsEffective.length == 0) this.m_bHaveCoupon = true;
			}
        })
        console.log(this.m_lsCouponsEffective);
    }

    selectCoupon(code: string,i:number, value: number){
        //取消选中
        if(this.m_lsSelectedList[i]){
            let index = this.m_lsCouponCode.indexOf(code);
            if(index >= 0){
                this.m_lsCouponCode.splice(index,1);
                this.m_lsSelectedList[i] = !this.m_lsSelectedList[i];
                this.m_objContextService.m_nDiscountAmount -= value;
            }
        }else{
            if(this.m_lsCouponCode.length < this.m_nMaxAmount){
                this.m_lsCouponCode.push(code);
                this.m_lsSelectedList[i] = !this.m_lsSelectedList[i];
                this.m_objContextService.m_nDiscountAmount += value;
            }else{
                let msg = '本次最多可使用' + this.m_nMaxAmount + '张优惠券';
                this.m_objAlertService.tipsAlert(msg);
            }
        }
    }
    notUseCoupon(){
        this.m_bIsActived = true;
        this.m_lsCouponCode = [];
        this.m_objContextService.m_bIsUsedCoupon = false;
        this.m_objContextService.m_nDiscountAmount = 0;
        this.m_lsSelectedList.forEach(s => {
            s = false;
        })
        this.dismiss();
    }
}
