import { Component, ElementRef } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';
import { ErrorEnum } from '../../model/enumclasses';
import { ApiurlService } from '../../service/apiurl.service';
import { RoomFolio } from '../../frontofficedataclass/roomfolio';
import { PageAbleList } from '../../model/pageablelist';
import { setSessionData, getSessionData } from '../../util/util';
import { ThemeService } from '../../service/theme.service';
import { AlertService } from '../../service/alert.service';
import { ContextService } from '../../service/context.service';
import { FolioCommentResult } from '../../centerdataclass/foliocommentresult';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  	m_nSourcePage: number = getSessionData("source") || 0;
	m_nShowTabs: number = 0;
	m_bShowTabsStyle: Array<boolean> = [true, false, false];
	m_lsOrderList: any[] = [];
	m_lsBookOrderList: PageAbleList<RoomFolio> = new PageAbleList<RoomFolio>();
	m_lsDepartureOrderList: any[] = [];
	m_nPageSize: number = 20;
	m_nPageNo: number = 1;
	m_nPageNoBook: number = 1;
	m_nPageNoDeparture: number = 1;
	m_bRefreshList: boolean = true;
	m_bRefreshBook: boolean = true;
	m_bRefreshDeparture: boolean = true;
	m_nPageCount: number = 1;
	m_nPageCountBook: number = 1;
	m_nPageCountDeparture: number = 1;
	m_bHaveMoreData = false;
	m_bBookHaveMoreData = false;
	m_bDepartureHaveMoreData = false;
	m_lsFolioCommentResult: FolioCommentResult[] = [];
	m_lsFolioCommentResultCopy: FolioCommentResult[] = [];
	constructor(
		private m_objApiUrlService: ApiurlService,
		private m_objNavCtrl: NavController,
		private m_objThemeService: ThemeService,
		private m_objAlertService: AlertService,
		private m_objContextService: ContextService,
		private m_objElementRef: ElementRef,
		private m_objApp:App,
	) {
		if (this.m_objContextService.isLogin()) {
			this.m_objContextService.m_objLoadingCtrl = this.m_objAlertService.loading();
			this.getOrders(0, this.m_nPageSize, this.m_nPageNo);
			this.getOrders(1, this.m_nPageSize, this.m_nPageNo);
			this.getOrders(5, this.m_nPageSize, this.m_nPageNo);
			this.m_objContextService.m_objLoadingCtrl.dismiss();
		};
		this.changeTabs(this.m_nSourcePage);


		if (this.m_objContextService.isLogin()) {
			setTimeout(() => {
				this.getData();
			}, 2000);
		}
	}
	
	//tabs切换
	changeTabs(id: number): void {
		this.m_nShowTabs = id;
		for (let i = 0; i < this.m_bShowTabsStyle.length; i++) {
			this.m_bShowTabsStyle[i] = false;
		}
		this.m_bShowTabsStyle[id] = true;
		//removeSessionData("m_nOrderSource");
	}
	//订单是否已经评论
	GetCommentResult(callback: any): void {
		this.m_objApiUrlService.getCommentResult(this.m_lsFolioCommentResult).subscribe(data => {
			if (data.Code == ErrorEnum.successfully) {
				//this.m_lsFolioCommentResultCopy = data.Data;
				callback(data.Data);
			}
		})
	}


	//获取订单列表 State 0.不限 1	预订	 2	取消   	3	未到  	4	入住 	5	退房 返回数据+1

	//获取订单列表
	getOrders(nState: number, nPageSize: number, nPageNo: number, fn?: any): void {
		this.m_objApiUrlService.getOrders(nState, nPageSize, nPageNo).subscribe(data => {
			//数据获取成功
			if (data.Code == ErrorEnum.successfully) {
				//总数不为0
				if (data.Data.RowCount != 0) {
					//全部订单
					if (nState == 0) {
						this.m_nPageCount = data.Data.PageCount;
						this.folioCommentResult(data.Data.DataSet, data => {
							for (let list of data) this.m_lsOrderList.push(list);
						});
						this.m_bRefreshList = true;
						if (data.Data.PageNo >= data.Data.PageCount) this.m_bHaveMoreData = true;
						//预定订单
					} else if (nState == 1) {
						this.m_nPageCountBook = data.Data.PageCount;
						if (nPageNo == 1) {
							this.m_lsBookOrderList = data.Data;
						} else {
							let Datalength = data.Data.DataSet.length;
							for (let i = 0; i < Datalength; i++) {
								this.m_lsBookOrderList.DataSet.push(data.Data.DataSet[i]);
							}
						}
						this.m_bRefreshBook = true;
						if (data.Data.PageNo >= data.Data.PageCount) this.m_bBookHaveMoreData = true;
						//退房订单
					} else if (nState == 5) {
						this.m_nPageCountDeparture = data.Data.PageCount;
						this.folioCommentResult(data.Data.DataSet, data => {
							for (let list of data) this.m_lsDepartureOrderList.push(list);
						});
						this.m_bRefreshDeparture = true;
						if (data.Data.PageNo >= data.Data.PageCount) this.m_bDepartureHaveMoreData = true;
					}
					if (fn) fn();
				} else {
					if (nState == 0) {
						this.m_bHaveMoreData = true;
					} else if (nState == 1) {
						this.m_bBookHaveMoreData = true;
					} else if (nState == 5) {
						this.m_bDepartureHaveMoreData = true;
					}
				}
			}
		})
	}
	//下滑动加载全部订单数据
	getData(): void {

		let objElement = this.m_objElementRef.nativeElement.querySelector("#OrderList");
		var scroll = this.m_objElementRef.nativeElement.querySelector(".scroll-content");
		
		objElement.addEventListener('touchend', (e) => {
			//解決tabs訂單頁面不刷新問題
			if ((scroll.scrollTop + scroll.offsetHeight) - scroll.scrollHeight * 0.75 > 0) this.doInfinite(1);
		
		}, false)
	}
	doInfinite(listID: number): Promise<any> {
		return new Promise((resolve) => {
			if (this.m_bRefreshList && listID == 0) {
				this.m_bRefreshList = false;
				this.getOrders(0, this.m_nPageSize, ++this.m_nPageNo, () => {
					resolve();
				});
			} else if (this.m_bRefreshBook && listID == 1) {
				this.m_bRefreshBook = false;
				this.getOrders(1, this.m_nPageSize, ++this.m_nPageNoBook, () => {
					resolve();
				});
			} else if (this.m_bRefreshDeparture && listID == 2) {
				this.m_bRefreshDeparture = false;
				this.getOrders(5, this.m_nPageSize, ++this.m_nPageNoDeparture, () => {
					resolve();
				});
			}
		})
	}
	//获取订单状态中文
	parseStateText(State, PayTransState): string {
		let stateText = "";
		State += 1;
		switch (State) {
			case 1: stateText = "预订"; break;
			case 2: stateText = "取消"; break;
			case 3: stateText = "未到"; break;
			case 4: stateText = "入住"; break;
			case 5: stateText = "退房"; break;
			default: return '未知';
		}
		if (State == 1 && PayTransState == 3) stateText += "(已支付)";
		return stateText;
	}
	//查看订单
	goDetails(folioID: number): void {
		this.m_objApiUrlService.getOrder(folioID).subscribe(data => {
			if (data.Code == ErrorEnum.successfully) {
				setSessionData("m_objOrderDetails", data.Data, () => {
					setSessionData("folioId", folioID);
					setSessionData("source", 1);
					this.m_objApp.getRootNav().push('DetailsPage');
				});
			}
		});
	}
	//评价订单
	goCommentHotel(data: RoomFolio): void {
		setSessionData("m_objOrderDetails", data, () => {
			this.m_objApp.getRootNav().push('CommentPage');
		});
	}
	//删除订单
	delMebFolio(nChainID: number, nFolioID: number, state: number): void {
		let load = this.m_objAlertService.loading();
		let index = 0;
		this.m_objAlertService.yesNoButtonTipsAlert("您确定要删除该订单吗？", () => {
			this.m_objApiUrlService.delMebFolio(nChainID, nFolioID).subscribe(data => {
				load.dismiss();
				if (data.Code == ErrorEnum.successfully) {
					this.m_objAlertService.tipsToast("订单删除成功！", "top");
					switch (state) {
						case 0:
							index = 0;
							let loaderA = this.m_objAlertService.loading();
							for (let list of this.m_lsOrderList) {
								if (list.FolioID == nFolioID) {
									this.m_lsOrderList.splice(index, 1);
									loaderA.dismiss();
								}
								index++;
							}
							break;
						case 1:
							index = 0;
							let loaderB = this.m_objAlertService.loading();
							for (let list of this.m_lsBookOrderList.DataSet) {
								if (Number(list.FolioID) == nFolioID) {
									this.m_lsBookOrderList.DataSet.splice(index, 1);
									loaderB.dismiss();
								}
								index++;
							}
							break;
						case 5:
							index = 0;
							let loaderC = this.m_objAlertService.loading();
							for (let list of this.m_lsDepartureOrderList) {
								if (list.FolioID == nFolioID) {
									this.m_lsDepartureOrderList.splice(index, 1);
									loaderC.dismiss();
								}
								index++;
							}
							break;

					}
				} else {
					this.m_objAlertService.tipsToast(data.Data, "top");
				}
			});
		}, () => {
			load.dismiss();
		})
	}
	//判断是否有评论
	folioCommentResult(data, callback): any {
		//判断是否有评论
		//重置
		this.m_lsFolioCommentResult = this.m_lsFolioCommentResultCopy;
		for (let list of data) {
			let objFolioCommentResult: FolioCommentResult = new FolioCommentResult();
			objFolioCommentResult.FolioID = Number(list.FolioID);
			objFolioCommentResult.ChainID = Number(list.ChainID);
			this.m_lsFolioCommentResult.push(objFolioCommentResult)
		}
		//判断是否有评论 x 2
		this.GetCommentResult((returnData) => {
			for (let list of returnData) {
				for (let lorderList of data) {
					if (list.FolioID == lorderList.FolioID) {
						lorderList.bCommented = list.bCommented;
						break;
					}
				}
			}
		})
		callback(data);
	}
	//立即支付
	goPay(nFolioID): void {
		setSessionData("folioId", nFolioID);
		this.m_objApp.getRootNav().push('PaymentPage');
	}
	goLogin(): void {
		this.m_objApp.getRootNav().push('LoginPage');
  }
}