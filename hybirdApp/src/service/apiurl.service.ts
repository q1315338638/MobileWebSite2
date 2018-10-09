import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { api, EApi } from '../config/apiurl';
import { Result } from '../model/result';
import { HttpService } from '../http/http.service';
import { RegPersonMember } from '../class/RegPersonMember';
import { PersonMember } from '../centerdataclass/personmember';
import { DiscountCoupons } from '../centerdataclass/discountcoupons';
import { PageAbleList } from '../centerdataclass/pageablelist';
import { PointGatherInfo } from '../centerdataclass/pointgatherinfo';
import { StoreValueSummary } from '../centerdataclass/storevaluesummary';
import { Chain } from "../centerdataclass/chain"; 
import { GainPoint } from '../centerdataclass/gainpoint';
import { StoreValue } from '../centerdataclass/storevalue';
import { UsedPoint } from '../centerdataclass/usedpoint';
import { PresentStoreValue } from '../centerdataclass/presentstorevalue'; 
import { PresentStoreValueSummary } from '../centerdataclass/presentstorevaluesummary';
import { HotelDetailsItem } from "../model/hoteldetailsitem";
import { RoomFolio } from '../frontofficedataclass/roomfolio';
import { QueryHotelComment } from '../model/queryhotelcomment';
import {RoomRateMebType} from '../frontofficedataclass/roomratemebtype';
import {AddPersonBookFolio} from '../frontofficedataclass/addpersonbookfolio';
import {AddGuestFolio} from '../frontofficedataclass/addguestFolio';
import { BookInfo } from '../model/bookinfo'
import { FolioCommentResult } from '../centerdataclass/foliocommentresult';
import { ECouponsState } from '../centerdataclass/ecouponstate';
import { CompanyInfo } from '../centerdataclass/companyinfo';
import { FolioPayTrans } from '../frontofficedataclass/foliopaytrans';
import { PayForMidtrans } from '../frontofficedataclass/payformidtrans';
import { Theme } from '../frontofficedataclass/theme';
import { ChainRoomTypeRemark } from '../centerdataclass/ChainRoomTypeRemark';
import { GetFeatures } from '../centerdataclass/getfeatures';

@Injectable() 
export class ApiurlService {
    constructor(
        public m_objHttpService: HttpService,
    ) { }
    //获取某个酒店房型详细信息
    getChainRoomTypeAttInfo(nChainID: number, nRoomTypeID: number): Observable<Result<ChainRoomTypeRemark>> {
        var apiUrl = `${api(EApi.getChainRoomTypeAttInfo)}`;
        apiUrl+=`?nChainID=${nChainID}`;
        apiUrl+=`&nRoomTypeID=${nRoomTypeID}`;
		return this.m_objHttpService.get<Result<ChainRoomTypeRemark>>(apiUrl); 
    }

	//获取功能列表（要显示的功能）
	getFeatures(): Observable<Result<GetFeatures>> {
		var apiUrl = `${api(EApi.getFeatures)}`;
		return this.m_objHttpService.get<Result<GetFeatures>>(apiUrl); 
	}
	//获取公司标记信息
    getCompanyMarkdownInfo(eRequestSource:number): Observable<Result<any>> {
        var apiUrl = `${api(EApi.getCompanyMarkdownInfo)}`;
        apiUrl += `?eRequestSource=${eRequestSource}`;
        return this.m_objHttpService.get<Result<any>>(apiUrl);
	}
	//获取支付记录 如果有优惠券使用记录 不能再使用优惠券
    getFolioPayTrans(nFolioID: number): Observable<Result<FolioPayTrans[]>> {
        var apiUrl = `${api(EApi.getFolioPayTrans)}`;
        apiUrl += `?nFolioID=${nFolioID}`;
        return this.m_objHttpService.get<Result<FolioPayTrans[]>>(apiUrl);
    }
	//绑定用户ID
    bindUserWithOpenID(sOpenID: string): Observable<Result<string>> {
        var apiUrl = `${api(EApi.bindUserWithOpenID)}`;
        apiUrl += `?sOpenID=${sOpenID}`;
        return this.m_objHttpService.post<Result<string>>(apiUrl);
    }
	//获取用户OpenID
    getOpenID(sCallbackURL:string): Observable<Result<any>> {
        var apiUrl = `${api(EApi.getOpenID)}`;
        apiUrl += `?sCallbackURL=${sCallbackURL}`;
        return this.m_objHttpService.get<Result<any>>(apiUrl);
    }
    //
    getCallback(url: string): Observable<Result<any>> {
        var apiUrl = url;
        return this.m_objHttpService.get<Result<any>>(apiUrl); 
    }

    //第三方支付
    onLinePayForMidtrans(nChainID: number, nFolioID: number, dmAmount: number): Observable<Result<PayForMidtrans>> {
        var apiUrl = `${api(EApi.onLinePayForMidtrans)}`;
        apiUrl += `?nChainID=${nChainID}`;
        apiUrl += `&nFolioID=${nFolioID}`;
        apiUrl += `&dmAmount=${dmAmount}`;
        return this.m_objHttpService.post<Result<PayForMidtrans>>(apiUrl);
    }
	//优惠券支付
    onLinePayForDisCount(nChainID: number, nFolioID: number, lsCouponCode:string[]): Observable<Result<string>> {
        var apiUrl = `${api(EApi.onLinePayForDisCount)}`;
        apiUrl += `?nChainID=${nChainID}`;
        apiUrl += `&nFolioID=${nFolioID}`;
        apiUrl += `&lsCouponCode=${JSON.stringify(lsCouponCode)}`;
        return this.m_objHttpService.post<Result<string>>(apiUrl);
    }
	//储值支付
    onLinePayForStoreBalance(nChainID: number, nFolioID: number, dmAmount: number, sPayPassword: string): Observable<Result<any>> {
        var apiUrl = `${api(EApi.onLinePayForStoreBalance)}`;
        apiUrl += `?nChainID=${nChainID}`;
        apiUrl += `&nFolioID=${nFolioID}`;
        apiUrl += `&dmAmount=${dmAmount}`;
        apiUrl += `&sPayPassword=${sPayPassword}`;
        return this.m_objHttpService.post<Result<any>>(apiUrl);
    }
	//微信支付
    onLinePayForWeChat(nChainID: number, nFolioID: number, dmAmount: number, sOpenID:string): Observable<Result<any>> {
        var apiUrl = `${api(EApi.onLinePayForWeChat)}`;
        apiUrl += `?nChainID=${nChainID}`;
        apiUrl += `&nFolioID=${nFolioID}`;
        apiUrl += `&dmAmount=${dmAmount}`;
        apiUrl += `&sOpenID=${sOpenID}`;
        return this.m_objHttpService.post<Result<string>>(apiUrl);
    }
	//设置当前语言
    setLanguage(eLanguage:number): Observable<Result<string>> {
        var apiUrl = `${api(EApi.setLanguage)}`;
        apiUrl += `?eLanguage=${eLanguage}`;
        return this.m_objHttpService.post<Result<string>>(apiUrl);
    }
	//获取当前语言
    getLanguage(): Observable<Result<string>> {
        var apiUrl = `${api(EApi.getLanguage)}`;
        return this.m_objHttpService.post<Result<string>>(apiUrl);
    }
    //获取当前主题
    getTheme(): Observable<Theme> {
        var apiUrl = `${api(EApi.getTheme)}`;
        return this.m_objHttpService.get<Theme>(apiUrl);
    }
    //设置当前主题
    setTheme(nTheme: Theme): Observable<Result<string>> {
        var apiUrl = `${api(EApi.setTheme)}`;
        apiUrl += `?nTheme=${JSON.stringify(nTheme)}`;
        return this.m_objHttpService.post<Result<string>>(apiUrl);
    }
	//获取公司简介
    getCompanyInfo(eRequestSource: number): Observable<Result<CompanyInfo>> {
        var apiUrl = `${api(EApi.getCompanyInfo)}`;
        apiUrl += `?eRequestSource=${eRequestSource}`;
        return this.m_objHttpService.get<Result<CompanyInfo>>(apiUrl);
    }
	//判断是否已经评论
    getCommentResult(lsFolioCommentResult: FolioCommentResult[]): Observable<Result<FolioCommentResult[]>> {
        var apiUrl = `${api(EApi.getCommentResult)}`;
        apiUrl += `?lsFolioCommentResult=${JSON.stringify(lsFolioCommentResult)}`;
        return this.m_objHttpService.get<Result<FolioCommentResult[]>>(apiUrl);
    }

	//更新头像
    uploadMebHeadImg(sFileToBase64: string): void {
        var sMebHeadImg: string = api(EApi.uploadMebHeadImg); 
        this.m_objHttpService.postByJq(sMebHeadImg, { 'sFileToBase64': sFileToBase64 });
    }
    //会员登录 
    login(sMobile: string, sPassword: string): Observable<Result<PersonMember>> {
        var apiUrl = `${api(EApi.login)}`;
        apiUrl += `?sMobile=${sMobile}`;
        apiUrl += `&sPassword=${sPassword}`;
        return this.m_objHttpService.post<Result<PersonMember>>(apiUrl);
    }
    //发送验证码
    sendSMSCode(sMobile: string): Observable<Result<string>> {
        var apiUrl = `${api(EApi.sendSMSCode)}`;
        apiUrl += `?sMobile=${sMobile}`;
        return this.m_objHttpService.get<Result<string>>(apiUrl);
    }
    //会员注册
    register(sSMSCode: string, objRegPersonMember: RegPersonMember): Observable<Result<PersonMember>> {
        var apiUrl = `${api(EApi.register)}`;
        apiUrl += `?sSMSCode=${sSMSCode}`;
        apiUrl += `&objRegPersonMember=${JSON.stringify(objRegPersonMember)}`;
        return this.m_objHttpService.post<Result<PersonMember>>(apiUrl);
    }
    //获取本地主题配置文件
    getThemeConfig(): Observable<any> {
        var apiUrl = `${api(EApi.getThemeConfig)}`;
        return this.m_objHttpService.get<Observable<any>>(apiUrl); 
    }
    //短信登录
    smsLogin(sMobile: string, sSMSCode: string): Observable<Result<PersonMember>> {
        var apiUrl = `${api(EApi.smsLogin)}`;
        apiUrl += `?sMobile=${sMobile}`;
        apiUrl += `&sSMSCode=${sSMSCode}`;
        return this.m_objHttpService.post<Result<PersonMember>>(apiUrl);
    }
    //忘记密码——重设登录密码
    resetPwdBySMSCode(sMobile: string, sSMSCode: string, sNewpsd:string): Observable<Result<PersonMember>> {
        var apiUrl = `${api(EApi.resetPwdBySMSCode)}`;
        apiUrl += `?sMobile=${sMobile}`;
        apiUrl += `&sSMSCode=${sSMSCode}`;
        apiUrl += `&sNewpsd=${sNewpsd}`;
        return this.m_objHttpService.post<Result<PersonMember>>(apiUrl);
    }
    //恢复登录
    recoverLogin(): Observable<Result<PersonMember>> {
        var apiUrl = `${api(EApi.recoverLogin)}`;
        return this.m_objHttpService.post<Result<PersonMember>>(apiUrl);
    }
    //获取城市列表
    getCityList(): Observable<Result<string>> {
        var apiUrl = `${api(EApi.getCity)}`;
        return this.m_objHttpService.get<Result<string>>(apiUrl);
    }
    //获取优惠券列表
    getCoupons(nPageSize: number, nPageNo: number, lsECouponsState: ECouponsState[]): Observable<Result<PageAbleList<DiscountCoupons>>> {
        var apiUrl = `${api(EApi.getCoupons)}`;
        apiUrl += `?lsECouponsState=${JSON.stringify(lsECouponsState)}`;
        apiUrl += `&nPageSize=${nPageSize}`;
        apiUrl += `&nPageNo=${nPageNo}`;
        return this.m_objHttpService.get<Result<PageAbleList<DiscountCoupons>>>(apiUrl);
    }
    //修改会员基本信息
    editMebInfo(objPersonMember: PersonMember): Observable<Result<string>> {
        var apiUrl = `${api(EApi.editMebInfo)}`;
        apiUrl += `?objPersonMember=${JSON.stringify(objPersonMember)}`;
        return this.m_objHttpService.post<Result<string>>(apiUrl);
    }
    //查询单条订单
    getOrder(nFolioID: number): Observable<Result<RoomFolio>> {
        var apiUrl = `${api(EApi.getOrder)}`;
        apiUrl += `?nFolioID=${nFolioID}`;
        return this.m_objHttpService.get<Result<RoomFolio>>(apiUrl);
    }
    //查询订单列表
    getOrders(nState: number, nPageSize: number, nPageNo: number): Observable<Result<PageAbleList<RoomFolio>>> {
        var apiUrl = `${api(EApi.getOrders)}`;
        apiUrl += `?nState=${nState}`;
        apiUrl += `&PageSize=${nPageSize}`;
        apiUrl += `&PageNo=${nPageNo}`;
        return this.m_objHttpService.get<Result<PageAbleList<RoomFolio>>>(apiUrl);
    }
    //退出登录
    loginOff(): Observable<Result<string>> {
        var apiUrl = `${api(EApi.loginOff)}`;
        return this.m_objHttpService.post<Result<string>>(apiUrl);
    }
    //取消订单
    orderCancle(nHotelID: number, nFolioID: number): Observable<Result<string>> {
        var apiUrl = `${api(EApi.orderCancle)}`;
        apiUrl += `?nHotelID=${nHotelID}`;
        apiUrl += `&nFolioID=${nFolioID}`;
        return this.m_objHttpService.post<Result<string>>(apiUrl);
    }
    //删除订单 根据房单号删除预约订单 离店、取消和未到可删除
    delMebFolio(nChainID: number, nFolioID: number): Observable<Result<string>> {
        var apiUrl = `${api(EApi.delMebFolio)}`;
        apiUrl += `?nChainID=${nChainID}`;
        apiUrl += `&nFolioID=${nFolioID}`;
        return this.m_objHttpService.post<Result<string>>(apiUrl);
    }
    //评论订单
    commentHotel(objReviews: QueryHotelComment): Observable<Result<string>> {
        var apiUrl = `${api(EApi.commentHotel)}`;
        apiUrl += `?objReviews=${JSON.stringify(objReviews)}`;
        return this.m_objHttpService.post<Result<string>>(apiUrl);
    }
    //获取酒店列表
    getHotelList(sTag: string, nCityID: number): Observable<Result<Chain[]>> {
        var apiUrl = `${api(EApi.getChain)}`;
        apiUrl += "?CityID=" + nCityID + "&Tag=" + sTag;
        return this.m_objHttpService.get<Result<Chain[]>>(apiUrl);
    }
    //获取积分信息
    getPointGatherInfo(): Observable<Result<PointGatherInfo>> {
        var apiUrl = `${api(EApi.getPointGatherInfo)}`;
        return this.m_objHttpService.get<Result<PointGatherInfo>>(apiUrl);
    }
    //获取储值信息
    getStoreValueSummary(): Observable<Result<StoreValueSummary>> {
        var apiUrl = `${api(EApi.getStoreValueSummary)}`;
        return this.m_objHttpService.get<Result<StoreValueSummary>>(apiUrl);
    }
    //获取赠送储值信息
    getPresentStoreValueSummary(): Observable<Result<PresentStoreValueSummary>> {
        var apiUrl = `${api(EApi.getPresentStoreValueSummary)}`;
        return this.m_objHttpService.get<Result<PresentStoreValueSummary>>(apiUrl);
    }
    //获取积分赠送列表
    getMemberGainPoint(nPageSize: number, nPageNo: number): Observable<Result<PageAbleList<GainPoint>>> {
        var apiUrl = `${api(EApi.getMemberGainPoint)}`;
        apiUrl += `?nPageSize=${nPageSize}`;
        apiUrl += `&nPageNo=${nPageNo}`;
        return this.m_objHttpService.get<Result<PageAbleList<GainPoint>>>(apiUrl);
    }
    //获取积分使用列表
    getMemberUsedPoint(nPageSize: number, nPageNo: number): Observable<Result<PageAbleList<UsedPoint>>> {
        var apiUrl = `${api(EApi.getMemberUsedPoint)}`;
        apiUrl += `?nPageSize=${nPageSize}`;
        apiUrl += `&nPageNo=${nPageNo}`;
        return this.m_objHttpService.get<Result<PageAbleList<UsedPoint>>>(apiUrl);
    }
    //获取储值列表
    queryStoreValueList(PageSize: number, PageNo: number): Observable<Result<PageAbleList<StoreValue>>> {
        var apiUrl = `${api(EApi.queryStoreValueList)}`;
        apiUrl += `?nPageNo=${PageNo}`;
        apiUrl += `&nPageSize=${PageSize}`;
        return this.m_objHttpService.post<Result<PageAbleList<StoreValue>>>(apiUrl);
    }
    //获取储值赠送列表
    queryPresentStoreValueList(PageSize: number, PageNo: number): Observable<Result<PageAbleList<PresentStoreValue>>> {
        var apiUrl = `${api(EApi.queryPresentStoreValueList)}`;
        apiUrl += `?nPageNo=${PageNo}`;
        apiUrl += `&nPageSize=${PageSize}`;
        return this.m_objHttpService.post<Result<PageAbleList<PresentStoreValue>>>(apiUrl);
    }
    //获取酒店信息
    getHotelInfo(sTag: string, nCityID: number, nPageIndex: number, nPageSize: number, dtStartDate: string, dtEndDate: string): Observable<Result<PageAbleList<HotelDetailsItem>>>{
        var apiUrl = `${api(EApi.getHotel)}`;
        apiUrl += "?nCityID=" + nCityID;
        apiUrl += "&sTag=" + sTag;
        apiUrl += "&nPageSize=" + nPageSize;
        apiUrl += "&nPageNo=" + nPageIndex;
        apiUrl += "&dtStartDate=" + dtStartDate;
        apiUrl += "&dtEndDate=" + dtEndDate;
        return this.m_objHttpService.get<Result<PageAbleList<HotelDetailsItem>>>(apiUrl);
    }
    //获取会员对应的价格类型
    getMebRoomRateType(nChainID: number): Observable<Result<RoomRateMebType>>{
        var sGetMebRoomRateType: string = api(EApi.getMebRoomRateType);
        sGetMebRoomRateType += "?nChainID=" + nChainID;
        return this.m_objHttpService.get<Result<RoomRateMebType>>(sGetMebRoomRateType);        
    }
    //计算房价
    calculatRoomRate(nChainID:number,sArrive:string,nRoomTypeID:number):Observable<Result<number>>{
        var sCalculatRoomRate: string = api(EApi.calculatRoomRate);
        sCalculatRoomRate += "?nChainID=" + nChainID;
        sCalculatRoomRate += "&nRoomTypeID=" + nRoomTypeID;
        sCalculatRoomRate += "&dtArrive=" + sArrive;
        return this.m_objHttpService.get<Result<number>>(sCalculatRoomRate);     
    }
    //获取房型信息
    getRoomTypeDetail(nHotelID:number,sStartDate:string,sEndDate):Observable<Result<HotelDetailsItem>>{
        var sGetRoomTypeDetail: string = api(EApi.getRoomTypeDetail);
        sGetRoomTypeDetail += "?nHotelID=" + nHotelID;
        sGetRoomTypeDetail += "&dtStartDate=" + sStartDate;
        sGetRoomTypeDetail += "&dtEndDate=" + sEndDate;
        return this.m_objHttpService.get<Result<HotelDetailsItem>>(sGetRoomTypeDetail);
    }
    //获取酒店评论
    getHotelComment(nHotelID: number, nImageFlag: number, nPageSize: number, nPageNo: number ,nMebID:number): Observable<Result<PageAbleList<QueryHotelComment>>> {
        var sHotelComment: string = api(EApi.getHotelComment);
        sHotelComment += "?nHotelID=" + nHotelID;
        sHotelComment += "&nImageFlag=" + nImageFlag;
        sHotelComment += "&nPageSize=" + nPageSize;
        sHotelComment += "&nPageNo=" + nPageNo;
        sHotelComment += "&nMebID=" + nMebID;
        return this.m_objHttpService.get<Result<PageAbleList<QueryHotelComment>>>(sHotelComment);
    }
    //提交预订订单
    bookIn(objBookFolio:AddPersonBookFolio,lsAddGuestFolio:AddGuestFolio[],sSMSCode:string):Observable<Result<BookInfo>>{
        var sBookIn: string = api(EApi.bookIn);
        sBookIn += "?objBookFolio=" + JSON.stringify(objBookFolio);
        sBookIn += "&lsAddGuestFolio=" + JSON.stringify(lsAddGuestFolio);
        sBookIn += "&sSMSCode=" +sSMSCode;

        return this.m_objHttpService.post<Result<BookInfo>>(sBookIn);
    }
    //获取指定酒店服务信息
    getChainRoomServiceInfo(objChainServiceCondition: Object): Observable<Result<any>>{
        let ChainRoomService: string = api(EApi.getChainRoomService);
        ChainRoomService += "?objQueryChainServiceCondition=" + JSON.stringify(objChainServiceCondition);
        return this.m_objHttpService.get<Result<any>>(ChainRoomService);
    }
    //获取指定酒店房型信息
    getChainRoomTypeRemark(objChainRoomTypeRemarkCondition: object, chainId: number): Observable<Result<ChainRoomTypeRemark>>{
        let ChainRoomTypeRemark: string = api(EApi.GetChainRoomTypeRemark);
        ChainRoomTypeRemark += "?objChainRoomTypeRemarkCondition=" + JSON.stringify(objChainRoomTypeRemarkCondition);
        ChainRoomTypeRemark += "&chainID=" + chainId;

        return this.m_objHttpService.get<Result<ChainRoomTypeRemark>>(ChainRoomTypeRemark);
    }
}
