import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ApiurlService } from '../../service/apiurl.service';
import { ThemeService } from '../../service/theme.service';
import { ErrorEnum } from '../../model/enumclasses';
import { StoreValue } from '../../centerdataclass/storevalue';
import { PageAbleList } from '../../centerdataclass/pageablelist';
import { PresentStoreValue } from '../../centerdataclass/presentstorevalue';
import { StoreValueSummary } from '../../centerdataclass/storevaluesummary';
import { PresentStoreValueSummary } from '../../centerdataclass/presentstorevaluesummary';
import { Chain } from '../../centerdataclass/chain';
import { ContextService } from '../../service/context.service';
import { AlertService } from '../../service/alert.service';

@IonicPage()
@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage {
    m_nShowTabs: number = 0;
    m_bShowTabsStyle: Array<boolean> = [true, false];
    m_lsStoreValueList: PageAbleList<StoreValue> = new PageAbleList<StoreValue>();
    m_lsPresentStoreValueList: PageAbleList<PresentStoreValue> = new PageAbleList<PresentStoreValue>();
    m_objStoreValueSummary: StoreValueSummary = new StoreValueSummary();
    m_objPresentStoreValueSummary: PresentStoreValueSummary = new PresentStoreValueSummary();
    m_lsHotelList: Chain[] = [];
    m_nPageSize: number = 20;
    m_nStoreValueListPageNo: number = 1;
    m_nPresentStoreValueListPageNo: number = 1;
    m_bRefreshList: boolean = true;
    m_bRefreshListForPresentStoreValue: boolean = true;
    m_nStoreValueListPageCount: number = 1;
    m_nPresentStoreValueListPageCount: number = 1;
    m_nStoreValueHaveMoreData = false;
    m_nPresentStoreValueHaveMoreData = false;
    m_objLoading: any;
    //数据是否加载完成
    m_objLoadingCompleted: any = {
        storeValueList: false,
        presentStoreValueList: false,
        presentStoreValueSummary: false,
        StoreValueSummary: false
    }
    constructor(
        private m_objApiUrlService: ApiurlService,
        private m_objThemeService: ThemeService,
        private m_objContextService: ContextService,
        private m_objAlertService: AlertService

    ) {
        this.m_objLoading = this.m_objAlertService.loading("");
        this.queryStoreValueList(this.m_nPageSize,this.m_nStoreValueListPageNo);
        this.getPresentStoreValueSummary();
        this.getStoreValueSummary();
        this.getHotelList();
		//加载动画
        let Datalength = 0;
        let loadingCompletedDataLength = 0;
        let timeOut = setInterval(() => {
            for (let key of this.m_objLoadingCompleted) {
                ++Datalength;
                if (key)++loadingCompletedDataLength;
            }
            if (Datalength === loadingCompletedDataLength) {
                this.m_objLoading.dismiss();
                clearInterval(timeOut);
            }
        }, 500)
    }
    changeTabs(id:number): void {
        this.m_nShowTabs = id;
        for (let i = 0; i < this.m_bShowTabsStyle.length; i++) {
            this.m_bShowTabsStyle[i] = false;
        }
        this.m_bShowTabsStyle[id] = true;
    }
    //获取储值列表
    queryStoreValueList(nPageSize: number, nPageNo: number, fn?:any): void {
        if (nPageNo <= this.m_nStoreValueListPageCount) {
            this.m_objApiUrlService.queryStoreValueList(nPageSize, nPageNo).subscribe(data => {
                if (data.Code == ErrorEnum.successfully) {
                    if (data.Data.RowCount != 0) {
                        this.m_nStoreValueListPageCount = data.Data.PageCount;
                        if (nPageNo == 1) {
                            this.m_lsStoreValueList = data.Data;
                            this.getPaythod(this.m_lsStoreValueList.DataSet);
                            this.m_objLoadingCompleted.storeValueList = true;
                        } else {
                            var Datalength = data.Data.DataSet.length;
                            for (var i = 0; i < Datalength; i++) {
                                this.getPaythod(data.Data.DataSet);
                                this.m_lsStoreValueList.DataSet.push(data.Data.DataSet[i]);
                            }
                        }
                        this.m_bRefreshList = true;
                        if (fn) fn();
                        if (data.Data.PageNo >= data.Data.PageCount) this.m_nStoreValueHaveMoreData = true;
                    }
                }
            })
        } else {
            this.m_nStoreValueHaveMoreData = true;
        }
    }
    //获取储值赠送列表
    queryPresentStoreValueList(nPageSize: number, nPageNo: number,fn?:any): void {
        if (nPageNo <= this.m_nPresentStoreValueListPageCount) {
            this.m_objApiUrlService.queryPresentStoreValueList(nPageSize, nPageNo).subscribe(data => {
                if (data.Code == ErrorEnum.successfully) {
                    if (data.Data.RowCount != 0) {
                        this.m_nPresentStoreValueListPageCount = data.Data.PageCount;
                        if (nPageNo == 1) {
                            this.getHotelName(data.Data.DataSet);
                            this.m_lsPresentStoreValueList = data.Data;
                            this.m_objLoadingCompleted.presentStoreValueList = true;
                        } else {
                            var Datalength = data.Data.DataSet.length;
                            for (var i = 0; i < Datalength; i++) {
                                this.getPaythod(data.Data.DataSet);
                                this.m_lsPresentStoreValueList.DataSet.push(data.Data.DataSet[i]);
                            }
                        }
                        this.m_bRefreshListForPresentStoreValue = true;
                        if (fn) fn();
                        if (data.Data.PageNo >= data.Data.PageCount) this.m_nPresentStoreValueHaveMoreData = true;
                    }
                }
            })
        } else {
            this.m_nPresentStoreValueHaveMoreData = true;
        }
    }
    //获取赠送储值信息
    getPresentStoreValueSummary(): void {
        this.m_objApiUrlService.getPresentStoreValueSummary().subscribe(data => {
            if (data.Code == ErrorEnum.successfully) {
                this.m_objPresentStoreValueSummary = data.Data;
                this.m_objLoadingCompleted.presentStoreValueSummary = true;
            }
        })
    }
    //获取储值信息
    getStoreValueSummary(): void {
        this.m_objApiUrlService.getStoreValueSummary().subscribe(data => {
            if (data.Code == ErrorEnum.successfully) {
                this.m_objStoreValueSummary = data.Data;
                this.m_objLoadingCompleted.storeValueSummary = true;
            }
        })
    }
    //获取酒店列表
    getHotelList(): void {
        this.m_objApiUrlService.getHotelList("",0).subscribe(data => {
            if (data.Code == ErrorEnum.successfully) {
                this.m_lsHotelList = data.Data;
                this.queryPresentStoreValueList(this.m_nPageSize, this.m_nPresentStoreValueListPageNo);
            }
        })
    }
    //下滑动加载会员储值数据
    doInfinite(): Promise<any> {
        return new Promise((resolve) => {
            if (this.m_bRefreshList) {
                this.m_bRefreshList = false;
                this.queryStoreValueList(this.m_nPageSize, ++this.m_nStoreValueListPageNo, () => {
                    resolve();
                });
            }
        })
    }
    //下滑加载会员储值赠送数据
    doInfiniteForPresentStoreValue(): Promise<any> {
        return new Promise((resolve) => {
            if (this.m_bRefreshListForPresentStoreValue) {
                this.m_bRefreshListForPresentStoreValue = false;
                this.queryPresentStoreValueList(this.m_nPageSize, ++this.m_nPresentStoreValueListPageNo, () => {
                    resolve();
                });
            }
        })
    }

    //获取支付方式
    getPaythod(StoreValueList: any):void {
        for (let list of StoreValueList) {
            switch (list.PayMethod) {
                case 1:
                    list.PayMethodName = "现金";
                    break;
                case 2:
                    list.PayMethodName = "信用卡";
                    break;
                case 3:
                    list.PayMethodName = "第三方";
                    break;
                case 4:
                    list.PayMethodName = "储值退还";
                    break;
                case 5:
                    list.PayMethodName = "储值赠送";
                    break;
                case 6:
                    list.PayMethodName = "支付宝";
                    break;
                case 7:
                    list.PayMethodName = "微信";
                    break;
                case 8:
                    list.PayMethodName = "银行卡";
                    break;
                default:
                    list.PayMethodName = "储值支付";
                    break;
            }
        }
    }

    //循环酒店名称
    getHotelName(PresentStoreValueList:any): void {
        for (let storeValueList of PresentStoreValueList) {
            for (let hotelList of this.m_lsHotelList) {
                if (storeValueList.ChainID == hotelList.ChainID) {
                    storeValueList.ChainName = hotelList.ChainName;
                }
            }
        }
    }
}
