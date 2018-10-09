import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ThemeService } from '../../service/theme.service';
import { ApiurlService } from '../../service/apiurl.service';
import { QueryDiscountCouponsCondition } from '../../centerdataclass/querydiscountcouponscondition';
import { ECouponsState } from '../../centerdataclass/ecouponstate';
import { ErrorEnum } from '../../model/enumclasses';
import { PageAbleList } from '../../centerdataclass/pageablelist';
import { DiscountCoupons } from '../../centerdataclass/discountcoupons';
import { ContextService } from '../../service/context.service';
import { AlertService } from '../../service/alert.service';

@IonicPage()
@Component({
  selector: 'page-coupon', 
  templateUrl: 'coupon.html',
})
export class CouponPage {
    m_lsQueryDiscountCouponsCondition: ECouponsState[] = [];
    m_sChooseTabs: number = 0;
    m_lsChooseTabsButton: Array<boolean> = [true, false, false];//tabs按钮下划线
    m_lsIsGetCoupons: Array<boolean> = [true, true, true];//是否获取数据（只获取一次数据）
    //可使用优惠券列表
    m_lsPublishedVoucherList: DiscountCoupons[] = [];
    //已使用以及预使用优惠券
    m_lsUsedVoucherList: DiscountCoupons[] = [];
    //已过期优惠券(通过有效优惠券来判断)
    m_lsVainVoucherList: DiscountCoupons[] = [];
    m_objLoading: any;
    m_nPageCount: number;
    m_nPageCountUsed: number;
    m_bLoadingMore: boolean = false;
    m_bLoadingMoreUsed: boolean = false;
    m_nPageNo: number = 1;
    m_nPageNoUsed: number = 1;
    constructor(
        private m_objNavCtrl: NavController,
        private m_objThemeService: ThemeService,
        private m_objApiUrlService: ApiurlService,
        private m_objContextService: ContextService,
        private m_objAlertService: AlertService
    ) {
        this.m_objLoading = this.m_objAlertService.loading("");
        this.getCoupons([ECouponsState.Published],1);
        this.m_lsIsGetCoupons[0] = false;
    }

    //改变tabs
    changeTabs(tabsID:number): void {
        this.m_sChooseTabs = tabsID;
        for (let i = 0; i < this.m_lsChooseTabsButton.length; i++) {
            this.m_lsChooseTabsButton[i] = false;
        }
        this.m_lsChooseTabsButton[tabsID] = true;
        switch (tabsID) {
            case 0:
                if (this.m_lsIsGetCoupons[tabsID]) {
                    this.getCoupons([ECouponsState.Published],1);
                    this.m_lsIsGetCoupons[tabsID] = false;
                } else {
                    break;
                }
                break;
            case 1:
                if (this.m_lsIsGetCoupons[tabsID]) {
                    this.getCoupons([ECouponsState.PreUseCoupons, ECouponsState.Used],1);
                    this.m_lsIsGetCoupons[tabsID] = false;
                } else {
                    break;
                }
                break;
        }
    }
    //优惠券列表
    getCoupons(StateList: Array<ECouponsState>, nPageNo): void {
        this.m_lsQueryDiscountCouponsCondition = StateList;
        this.m_objApiUrlService.getCoupons(20, nPageNo, this.m_lsQueryDiscountCouponsCondition).subscribe(data => {
            if (data.Code == ErrorEnum.successfully) {
                console.log(data);
                switch (JSON.stringify(StateList)) {
                    case "[1]":
                        if (!this.m_nPageCount) this.m_nPageCount = data.Data.PageCount;
                        if (data.Data.RowCount != 0) {
                            let today = new Date();
                            for (let list of data.Data.DataSet) {
                                //判断优惠券是否已经失效
                                if (new Date(list.EndDate) < today) {
                                    //已过期的优惠券
                                    this.m_lsVainVoucherList.push(list);
                                } else {
                                    //有效的优惠券
                                    this.m_lsPublishedVoucherList.push(list);
                                }
                            }
                            //日期替换成指定格式
                            for (let list of this.m_lsPublishedVoucherList) {
                                list.EndDate = this.replayData(list.EndDate)
                            }
                            //总页数大于等于页码，则还有更多数据未加载
                            if (this.m_nPageCount > nPageNo) this.m_bLoadingMore = true;
                        //数据总条数为0，则显示无更多数据
                        } else {
                            this.m_bLoadingMore = false
                        }
                        break;
                    case "[2,3]":
                        if (!this.m_nPageCountUsed) this.m_nPageCount = data.Data.PageCount;
                        if (data.Data.RowCount != 0) {
							//第一次加载数据
                            if (nPageNo == 1) {
                                this.m_lsUsedVoucherList = data.Data.DataSet;
                            } else {
                                let nLength = data.Data.DataSet.length;
                                for (let i = 0; i <= nLength;i++) {
                                    this.m_lsUsedVoucherList.push(data.Data.DataSet[i]);
                                }
                            }
                            //总页数大于等于页码，则还有更多数据未加载
                            if (this.m_nPageCountUsed > nPageNo) this.m_bLoadingMoreUsed = true
						//数据总条数为0，则显示无更多数据
                        } else {
                            this.m_bLoadingMoreUsed = false
                        }
                        break;
                }
                this.m_objLoading.dismiss();
            }
        })
    }
    replayData(str: string): string {
        return str.replace("T00:00:00", "");
    }

	//加载更多数据
    loadingMore(listID:number): Promise<any> {
        return new Promise((resolve) => {
            if (this.m_bLoadingMore && listID == 1) {
                this.m_bLoadingMore = false;
                this.getCoupons([ECouponsState.Published], ++this.m_nPageNo);
            } else if (this.m_bLoadingMoreUsed && listID == 2) {
                this.m_bLoadingMoreUsed = false;
                this.getCoupons([ECouponsState.PreUseCoupons, ECouponsState.Used], ++this.m_nPageNoUsed);
            }
        })
    }
}
