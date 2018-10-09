import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController, NavParams } from 'ionic-angular';
import { ThemeService } from '../../service/theme.service';
import { ApiurlService } from '../../service/apiurl.service';
import { ContextService } from '../../service/context.service';
import { MyDateService } from '../../service/myDate.service';
import { AlertService } from '../../service/alert.service';
import { AddPersonBookFolio } from '../../frontofficedataclass/addpersonbookfolio';
import { ErrorEnum } from '../../model/enumclasses';
import { setSessionData } from '../../util/util';

@IonicPage()
@Component({
  selector: 'page-submit-order',
  templateUrl: 'submit-order.html',
})
export class SubmitOrderPage {
    m_objMsg: { sMobile: string, sCode: string, sName } = {
        sMobile: "",
        sCode: "",
        sName: ""
    };
    m_bSMSButton: boolean = false;
    m_bSMSClick: boolean = true;
    m_sMobile: string;
    m_sSMSText: string = "发送验证码";
    m_sSMSCode: string;
    m_nRoomsNumber: number = 1;
    m_objMebInfo: any;
    m_objRoomTypesDetails: any;
    m_objRoomTypes: any;
    m_nHotelId: number;
    m_nRoomTypeId: number;
    m_sBrandName: string;
    m_sChainName: string;
    m_sChainAddress: string;
    m_sroomTypeName: string;
    m_lsCheckInNameList: Array<any> = [0];
    m_nMebPrice: number;
    m_objBookFolio: AddPersonBookFolio = new AddPersonBookFolio();
    m_lstAddGuestFolio: Array<any> = [];
    m_sMebAccDate: string;

    constructor(
        public m_objNavCtrl: NavController,
        public m_objThemeService: ThemeService,
        public m_objApiUrl: ApiurlService,
        private m_objActionSheetCtrl: ActionSheetController,
        public m_objNavParams: NavParams,
        public m_objMyDateService: MyDateService,
        public m_objContextService: ContextService,
        public m_objAlert: AlertService
    ) {
        this.m_nRoomTypeId = this.m_objNavParams.get('roomTypeId');
        this.m_sroomTypeName = this.m_objNavParams.get('roomTypeName');
        this.m_nHotelId = this.m_objNavParams.get('hotelId');
        this.m_sMebAccDate = this.m_objNavParams.get('accDate');
        this.getRoomData();
    }
    //获取数据
    getRoomData():void{
        this.m_objMebInfo = JSON.parse(localStorage["m_objPersonMember"]);
        this.m_objMsg.sName = this.m_objMebInfo.MebName;
        this.m_objMsg.sMobile = this.m_objMebInfo.Mobile;
        this.m_objRoomTypesDetails = JSON.parse(localStorage["[roomTypeDetails]"]).Data;
        this.m_sBrandName = this.m_objRoomTypesDetails.Chain.BrandName;
        this.m_sChainName = this.m_objRoomTypesDetails.Chain.ChainName;
        this.m_sChainAddress = this.m_objRoomTypesDetails.Chain.ChainAddress;
        this.m_objRoomTypes = JSON.parse(localStorage["[RoomTypes]"]);
        this.m_objBookFolio.ChainID = this.m_nHotelId;
        this.m_objBookFolio.RoomTypeID = this.m_nRoomTypeId;
        //计算单价
        this.m_objApiUrl.calculatRoomRate(this.m_nHotelId, this.m_sMebAccDate, this.m_nRoomTypeId).subscribe(u => {
            this.m_nMebPrice = u.Data;
        })
        this.initMebInfo();
    }

    //选择间数
    chooseNumber(): void {
        var arr = [];
        for (let i = 0; i < this.m_objContextService.m_nMaxBookNum; i++) {
            arr[i] = {
                text: i + 1,
                handler: () => {
                    this.m_nRoomsNumber = i + 1;
                    // this.refleshMebInfo(this.m_nRoomsNumber);
                }
            }
        }
        var actionSheet = this.m_objActionSheetCtrl.create({
            title: '',
            buttons: arr
        });
        actionSheet.present();
    }

    initMebInfo(): void{
        this.m_lstAddGuestFolio.push(new personalList(this.m_objMsg.sName,this.m_objMsg.sMobile));
        console.log(this.m_lstAddGuestFolio);
    }

    addMeb(): void{
        this.m_lstAddGuestFolio.push(new personalList("",""));
    }

    // refleshMebInfo(num): void{
    //     this.m_lstAddGuestFolio.length = 0;
    //     this.m_lstAddGuestFolio.push(new personalList(this.m_objMsg.sName,this.m_objMsg.sMobile));
    //     for(let i = 0;i < num-1; i++){
    //         this.m_lstAddGuestFolio.push(new personalList("",""));
    //     }
    // }

    //获取验证码
    getVerificationCode(): void {
        if(this.checkPhone()){
            //发送验证码按钮变为不可用
            this.m_bSMSButton = true;
            //防止发送验证码后修改手机号可以再次发送验证码
            this.m_bSMSClick = false;
            //多久可以再次发送验证码
            let time = 61;
            //更改发送验证码文字
            this.m_sSMSText = (--time).toString();
            this.m_objApiUrl.sendSMSCode(this.m_objMsg.sMobile).subscribe(u => {
                console.log(u);
                if (u.Code == 0) {
                    //验证码
                    this.m_sSMSCode = u.Data;
                    this.m_objMsg.sCode = u.Data;
                    //验证发送验证码的手机号跟验证码是否一致
                    this.m_sMobile = this.m_objMsg.sMobile;
                    //定时器
                    var countdown = setInterval(() => {
                        //更改发送验证码文字
                        this.m_sSMSText = (--time).toString();
                        //倒计时结束时
                        if (time == 0) {
                            //发送验证码按钮变为可用
                            this.m_bSMSButton = false;
                            this.m_bSMSClick = true;
                            this.m_sSMSText = "发送验证码";
                            //清除定时器
                            clearInterval(countdown);
                            console.log(time)
                        };
                    }, 1000)
                }
            })
        }     
    }

    // 日期选择页面
    private goDatePicker() :void{
        this.m_objNavCtrl.push('DatePickerPage');
    }

    checkName(){
        if(this.m_objMsg.sName == ""){
            this.m_objAlert.tipsAlert('请输入预定人姓名！');
        }else{
            // this.checkPhone();
            return true;
        }
    }

    checkPhone(){
        if(this.m_objMsg.sMobile == ""){
            this.m_objAlert.tipsAlert('请输入预定人联系方式！');
        }else{
            // this.checkCode();
            return true;
        }
    }

    checkCode(){
        if(this.m_objMsg.sCode != "" && this.m_objMsg.sCode != null){
            if(this.m_objMsg.sCode == this.m_sSMSCode){
                return true;
            }else{
                this.m_objAlert.tipsAlert('验证码不匹配!');
            }
        }else{
            this.m_objAlert.tipsAlert('验证码不能为空!');
        }
    }

    bookIn(){
        if(this.checkName()&&this.checkPhone()&&this.checkCode()){
            this.m_objBookFolio.Arrorig = this.m_objMyDateService.m_objDate.checkInDate._date;
            this.m_objBookFolio.Deporig = this.m_objMyDateService.m_objDate.checkOutDate._date;
            this.m_objBookFolio.ContractName = this.m_objMsg.sName;
            this.m_objBookFolio.Mobile = this.m_objMsg.sMobile;
            this.m_objBookFolio.RoomCount = this.m_nRoomsNumber;
            let loading = this.m_objAlert.loading('正在提交订单!');
            this.m_objApiUrl.bookIn(this.m_objBookFolio, this.m_lstAddGuestFolio, this.m_objMsg.sCode).subscribe(u => {
                if(u.Code == ErrorEnum.successfully){
                    loading.dismiss();
                    console.log(u);

                    this.goDetails(u.Data.FolioID);
                }else{
                    this.m_objAlert.tipsAlert(u.Msg);
                }
            })            
        }
    }

    goDetails(folioId){
        this.m_objApiUrl.getOrder(folioId).subscribe(data => {
            console.log(data);
            if (data.Code == ErrorEnum.successfully) {
				setSessionData("m_objOrderDetails", data.Data, () => {
					setSessionData("folioId", folioId);
                    this.m_objNavCtrl.push('DetailsPage');
                });
            }
        });
    }
}

class personalList {
    name: string;
    phone: string;

    constructor(name:string,phone:string){
        this.name = name;
        this.phone = phone;
    }
}
