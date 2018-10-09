import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ErrorEnum } from '../../model/enumclasses';
import { ApiurlService } from '../../service/apiurl.service';
import { Chain } from '../../centerdataclass/chain';
import { PageAbleList } from '../../centerdataclass/pageablelist';
import { UsedPoint } from '../../centerdataclass/usedpoint';
import { GainPoint } from '../../centerdataclass/gainpoint';
import { PointGatherInfo } from '../../centerdataclass/pointgatherinfo';
import { ThemeService } from '../../service/theme.service';
import { ContextService } from '../../service/context.service';
import { AlertService } from '../../service/alert.service';

@IonicPage()
@Component({
  selector: 'page-points',
        templateUrl: 'points.html'
        //styleUrls: ['../deposit/deposit.scss']
})
export class PointsPage {
    m_nShowTabs: number = 0;
    m_bShowTabsStyle: Array<boolean> = [true, false];
    m_lsUsedPointList: PageAbleList<UsedPoint> = new PageAbleList<UsedPoint>();
    m_lsGainPointList: PageAbleList<GainPoint> = new PageAbleList<GainPoint>();
    m_objPointGatherInfo: PointGatherInfo = new PointGatherInfo();
    m_lsHotelList: Chain[] = [];
    m_nPageSize: number = 20;
    m_nUsedPointPageNo: number = 1;
    m_nGainPointPageNo: number = 1;
    m_bRefreshList: boolean = true;
    m_bRefreshGainPoint: boolean = true;
    m_nUsedPointPageCount: number = 1;
    m_nGainPointPageCount: number = 1;
    m_nUsedPointHaveMoreData = false;
    m_nGainPointHaveMoreData = false;
    m_objLoading: any;
	//数据是否加载完成
    m_objLoadingCompleted: any = {
        usedPoint: false,
        gatherPoint: false,
		pointGatherInfo: false 
    }
    constructor(
        private m_objApiUrlService: ApiurlService,
        private m_objThemeService: ThemeService,
        private m_objContextService: ContextService,
        private m_objAlertService: AlertService,

    ) {
        this.m_objLoading = this.m_objAlertService.loading("");
        this.getMemberUsedPoint(this.m_nPageSize, this.m_nUsedPointPageNo);
        this.getPointGatherInfo();
        this.getMemberGainPoint(this.m_nPageSize, this.m_nGainPointPageNo);
		//加载动画
        let Datalength = 0;
        let loadingCompletedDataLength = 0;
        let timeOut = setInterval(() => {
            for (let key of this.m_objLoadingCompleted) {
                ++Datalength;
                if (key) ++loadingCompletedDataLength;
            }
            if (Datalength === loadingCompletedDataLength) {
                this.m_objLoading.dismiss();
                clearInterval(timeOut);
            }
        },500)
    }
    changeTabs(id: number): void {
        this.m_nShowTabs = id;
        for (let i = 0; i < this.m_bShowTabsStyle.length; i++) {
            this.m_bShowTabsStyle[i] = false;
        }
        this.m_bShowTabsStyle[id] = true;
    }

    //获取赠送积分列表
    getMemberGainPoint(nPageSize: number, nPageNo: number, fn?: any): void {
        if (nPageNo <= this.m_nGainPointPageCount) {
            this.m_objApiUrlService.getMemberGainPoint(nPageSize, nPageNo).subscribe(data => {
                if (data.Code == ErrorEnum.successfully) {
                    if (data.Data.RowCount != 0) {
                        this.m_nGainPointPageCount = data.Data.PageCount;
                        if (nPageNo == 1) {
                            this.m_lsGainPointList = data.Data;
                            this.m_objLoadingCompleted.gatherPoint = true;
                        } else {
                            var Datalength = data.Data.DataSet.length;
                            for (var i = 0; i < Datalength; i++) {
                                this.getPaythod(data.Data.DataSet);
                                this.m_lsGainPointList.DataSet.push(data.Data.DataSet[i]);
                            }
                        }
                        this.m_bRefreshGainPoint = true;
                        if (fn) fn();
                        if (data.Data.PageNo >= data.Data.PageCount) this.m_nGainPointHaveMoreData = true;
                    } else {
                        this.m_nGainPointHaveMoreData = true;
                    }
                }
            })
        } else {
            this.m_nGainPointHaveMoreData = true;
        }
    }
    //获取积分使用列表
    getMemberUsedPoint(nPageSize: number, nPageNo: number, fn?: any): void {
        if (nPageNo <= this.m_nUsedPointPageCount) {
            this.m_objApiUrlService.getMemberUsedPoint(nPageSize, nPageNo).subscribe(data => {
                if (data.Code == ErrorEnum.successfully) {
                    if (data.Data.RowCount != 0) {
                        this.m_nUsedPointPageCount = data.Data.PageCount;
                        if (nPageNo == 1) {
                            this.m_lsUsedPointList = data.Data;
                            this.getPaythod(this.m_lsUsedPointList.DataSet);
                            this.m_objLoadingCompleted.usedPoint = true;
                        } else {
                            var Datalength = data.Data.DataSet.length;
                            for (var i = 0; i < Datalength; i++) {
                                this.getPaythod(data.Data.DataSet);
                                this.m_lsUsedPointList.DataSet.push(data.Data.DataSet[i]);
                            }
                        }
                        this.m_bRefreshList = true;
                        if (fn) fn();
                        if (data.Data.PageNo >= data.Data.PageCount) this.m_nUsedPointHaveMoreData = true;
                    } else {
                        this.m_nUsedPointHaveMoreData = true;
                    }
                }
            })
        } else {
            this.m_nUsedPointHaveMoreData = true;
        }
    }
    //获取积分信息
    getPointGatherInfo(): void {
        this.m_objApiUrlService.getPointGatherInfo().subscribe(data => {
            if (data.Code == ErrorEnum.successfully) {
                this.m_objPointGatherInfo = data.Data;
                this.m_objLoadingCompleted.pointGatherInfo = true;
            }
        })
    }
    //下滑动加载积分使用数据
    doInfinite(): Promise<any> {
        return new Promise((resolve) => {
            if (this.m_bRefreshList) {
                this.m_bRefreshList = false;
                this.getMemberUsedPoint(this.m_nPageSize, ++this.m_nUsedPointPageNo, () => {
                    resolve();
                });
            }
        })
    }
    //下滑加载会员赠送积分数据
    doInfiniteForGainPoint(): Promise<any> {
        return new Promise((resolve) => {
            if (this.m_bRefreshGainPoint) {
                this.m_bRefreshGainPoint = false;
                this.getMemberGainPoint(this.m_nPageSize, ++this.m_nGainPointPageNo, () => {
                    resolve();
                });
            }
        })
    }

    //获取消费方式
    getPaythod(StoreValueList: any): void {
        for (let list of StoreValueList) {
            switch (list.Type) {
                case 1:
                    list.TypeName = "转积分";
                    break;
                case 2:
                    list.TypeName = "房晚兑换";
                    break;
                case 3:
                    list.TypeName = "餐厅兑换";
                    break;
                case 4:
                    list.TypeName = "会员升级";
                    break;
                case 5:
                    list.TypeName = "会员升级";
                    break;
                case 6:
                    list.TypeName = "消费结算";
                    break;
                case 7:
                    list.TypeName = "积分调整";
                    break;
                default:
                    list.TypeName = "未知";
                    break;
            }
        }
    }
}
