import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiurlService } from '../../service/apiurl.service';
import { QueryHotelComment } from '../../model/queryhotelcomment';
import { onLineBookApiNew, api, EApi } from '../../config/apiurl';
import { ContextService } from '../../service/context.service';
import { ThemeService } from '../../service/theme.service';

@IonicPage()
@Component({
    selector: 'page-hotel-comment',
    templateUrl: 'hotel-comment.html',
})
export class HotelCommentPage {
    m_nChainId: number = this.m_objNavParams.get('hotelId');
    m_nPageIndexAll: number = 1;
    m_nPageIndex: number = 1;
    m_nPageSize: number = 10;
    m_lsHotelCommentAll: QueryHotelComment[] = [];
    m_lsHotelComment: QueryHotelComment[] = [];
    m_bHotelCommentAllHaveMoreData: boolean = true;
    m_bHotelCommentHaveMoreData: boolean = true;
    m_nPageCountAll: number = null;
    m_nPageCount: number = null;
    m_bCommentSelected: boolean = true;
    m_bShowBigImg: boolean = false;
    m_sShowBigImgSrc: string;
    constructor(
        private m_objNavCtrl: NavController, 
        private m_objNavParams: NavParams,
        private m_objApiUrl: ApiurlService,
        private m_objContextServive: ContextService,
        private m_objThemeService: ThemeService
    ) { }

    ionViewDidLoad() {
        this.getCommentFn(0, this.m_nPageIndexAll);
        this.getCommentFn(1, this.m_nPageIndex);
    }
    chooseTabs(tabs: number):void {
        if (tabs == 0) {
            this.m_bCommentSelected = true;
        } else {
            this.m_bCommentSelected = false;
        }
    }
	//点击图片显示大图
    showBigImg(sImgSrc:string): void {
        this.m_sShowBigImgSrc = sImgSrc;
        this.m_bShowBigImg = true;
        console.log(this.m_bShowBigImg)
    }
	//隐藏图片大图
    hideBigImg(): void {
        this.m_bShowBigImg = false;
    }
	//下滑更新数据
    doInfinite(type:number): Promise<any> {
        return new Promise((resolve) => {
            if (this.m_bHotelCommentAllHaveMoreData && type == 0) {
                this.m_bHotelCommentAllHaveMoreData = false;
                this.getCommentFn(type, ++this.m_nPageIndexAll, () => {
                    resolve();
                });
            } else if (this.m_bHotelCommentHaveMoreData && type == 1) {
                this.m_bHotelCommentHaveMoreData = false;
                this.getCommentFn(type, ++this.m_nPageIndex, () => {
                    resolve();
                });
            }
            
        })
    }
    getCommentFn(type: number, nPageIndex:number, callback?:any): void {
        this.m_objApiUrl.getHotelComment(this.m_nChainId, type, this.m_nPageSize, nPageIndex, 0).subscribe(u => {
            if (type == 0) {
                //总数不为0
                if (u.Data.RowCount != 0) {
					//如果传进来的页码小于等于总页码
                    if (nPageIndex <= u.Data.PageCount) {
						//页码 == 0
                        if (u.Data.PageNo == 1) {
                            this.m_lsHotelCommentAll = u.Data.DataSet;
                            this.m_lsHotelCommentAll.forEach(obj => {
                                obj.ImgUrl = api(EApi.getMebHead) + '?nMebID=' + obj.MebID; //获取用户头像
								obj.CreateTime = obj.CreateTime.toString().replace("T", " ").replace(/\..*/, " "); //时间日期格式替换
								obj.StarNumber = `${(obj.Score / 5) * 100}`;//好评星星数量
                            });
                            this.m_lsHotelCommentAll.forEach(obj => {
                                if (obj.ImageCount > 0) {
                                    obj.CommentImg = onLineBookApiNew + '/images/Comment/' + obj.ReviewsID + '-' + obj.ImageCount + '.jpg';//获取评论图片
                                }
							});
                        }
                        else {
                            for (let list of u.Data.DataSet) {
                                list.ImgUrl = api(EApi.getMebHead) + '?nMebID=' + list.MebID; //获取用户头像
								list.CreateTime = list.CreateTime.toString().replace("T", " ").replace(/\..*/, " ");//时间日期格式替换
								list.StarNumber = `width:${(list.Score / 5) * 100}%`;//好评星星数量
                                if (list.ImageCount > 0) {
                                    list.CommentImg = onLineBookApiNew + '/images/Comment/' + list.ReviewsID + '-' + list.ImageCount + '.jpg';//获取评论图片
                                }
                                this.m_lsHotelCommentAll.push(list);
                            }
                        }
                        if (this.m_nPageCountAll == null) this.m_nPageCountAll = u.Data.PageCount;
                        nPageIndex < this.m_nPageCountAll ? this.m_bHotelCommentAllHaveMoreData = true : this.m_bHotelCommentAllHaveMoreData = false;
                    } else {
                        this.m_bHotelCommentAllHaveMoreData = false;
                    }
                } else {
                    this.m_bHotelCommentAllHaveMoreData = false;
                }
            } else {
                //总数不为0
                if (u.Data.RowCount != 0) {
                    if (nPageIndex <= u.Data.PageCount) {
                        if (u.Data.PageNo == 1) {
                            this.m_lsHotelComment = u.Data.DataSet;
                            this.m_lsHotelComment.forEach(obj => {
                                obj.ImgUrl = api(EApi.getMebHead) + '?nMebID=' + obj.MebID; //获取用户头像
								obj.CreateTime = obj.CreateTime.toString().replace("T", " ").replace(/\..*/, " ");//时间日期格式替换
								obj.StarNumber = `${(obj.Score / 5) * 100}`;//好评星星数量
                            });
                            this.m_lsHotelComment.forEach(obj => {
                                if (obj.ImageCount > 0) {
                                    obj.CommentImg = onLineBookApiNew + '/images/Comment/' + obj.ReviewsID + '-' + obj.ImageCount + '.jpg';//获取评论图片
                                }
                            });
                        }
                        else {
                            for (let list of u.Data.DataSet) {
                                list.ImgUrl = api(EApi.getMebHead) + '?nMebID=' + list.MebID; //获取用户头像
								list.CreateTime = list.CreateTime.toString().replace("T", " ").replace(/\..*/, " ");//时间日期格式替换
								list.StarNumber = `${(list.Score / 5) * 100}`;//好评星星数量
                                if (list.ImageCount > 0) {
                                    list.CommentImg = onLineBookApiNew + '/images/Comment/' + list.ReviewsID + '-' + list.ImageCount + '.jpg';//获取评论图片
                                }
                                this.m_lsHotelComment.push(list);
                            }

                        }
                        if (this.m_nPageCount == null) this.m_nPageCount = u.Data.PageCount;
                        nPageIndex < this.m_nPageCount ? this.m_bHotelCommentHaveMoreData = true : this.m_bHotelCommentHaveMoreData = false;
                    } else {
                        this.m_bHotelCommentHaveMoreData = false;
                    }
                }
            }
            if (callback) callback();
        })
    }
}
