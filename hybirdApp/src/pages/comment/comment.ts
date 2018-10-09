import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ApiurlService } from '../../service/apiurl.service';
import { QueryHotelComment } from '../../model/queryhotelcomment';
import { RoomFolio } from '../../frontofficedataclass/roomfolio';
import { getSessionData } from '../../util/util';
import { ThemeService } from '../../service/theme.service';
import { AlertService } from '../../service/alert.service';
import { last } from 'rxjs/operators';
import { EApi, api, onLineBookApi } from '../../config/apiurl';
import { ErrorEnum } from '../../model/enumclasses';
import { ContextService } from '../../service/context.service';
import * as $ from "jquery";
declare var lrz: any;

@IonicPage()
@Component({
    selector: 'page-comment',
    templateUrl: 'comment.html',
})
export class CommentPage {
    m_objComment: QueryHotelComment = new QueryHotelComment();
    m_objOrderDetails: RoomFolio = new RoomFolio();
    m_sImgUrl: string = "";
    m_objStarState: any = {
        title: "",
        chooseStar: [false, false, false, false, false]
    }
    // 调用相册时传入的参数
    private m_objImagePickerOpt = {
        maximumImagesCount: 1,//选择一张图片
        width: 800,
        height: 800,
        quality: 80  //质量
    };
    constructor(
        public m_objNavCtrl: NavController,
        private m_objApiUrlService: ApiurlService,
        public m_objThemeService: ThemeService,
        public m_objAlertService: AlertService,
        private m_objElementRef: ElementRef,
        private m_objContextService: ContextService
    ) {
		this.m_objOrderDetails = getSessionData("m_objOrderDetails");
		this.m_objOrderDetails.CreateTime = this.m_objOrderDetails.CreateTime.replace("T", " ");
        this.m_objComment.Comment = "";
        this.m_objComment.FolioID = getSessionData("m_objOrderDetails").FolioID;
        this.m_objComment.KeyID = getSessionData("m_objOrderDetails").ChainID;
    }

    //评论订单
    commentHotel(): any {
        if (!this.m_objComment.Score) return this.m_objAlertService.tipsAlert("满意的话请点亮五颗星星哦！");
        let formElement: any = document.querySelector("form");
        let fileData = formElement.querySelector('input').files[0];
        let rstData: any = "";
        let bCanUpload = false;
        lrz(fileData,{
            width:300
        }).then(function(rst){
            rst.formData.append('base64img', rst.base64);
            rstData = rst;
            bCanUpload = true;
        }).catch(function(err){
            //失败后处理
        }).always(function(){
            //必执行
        })
        let loader = this.m_objAlertService.loading("正在上传评论，请稍候");
        let timer = setInterval(()=>{
            if(bCanUpload){
                clearInterval(timer);
                let request = new XMLHttpRequest;
                request.open("POST", `${onLineBookApi}Account/CommentHotel?objReviews=${JSON.stringify(this.m_objComment)}`, true);
                request.withCredentials = true;
                //提交form表单
                request.send(rstData.formData);
                let objAlertService = this.m_objAlertService;
                let objNavCtrl = this.m_objNavCtrl;
                request.onload = function () {
                    if (request.readyState == 4 && request.status == 200) {
                        let data = JSON.parse(request.response);
                        loader.dismiss();
                        if (data.Code == ErrorEnum.successfully) {
                            objAlertService.tipsAlert("评论成功！", () => {
                                objNavCtrl.pop();
                            })
                        } else {
                            objAlertService.tipsAlert(data.Msg, () => {
                                objNavCtrl.pop();
                            })
                        }
                    }
                }
            }
        },500)
    }
    //选择星星
    chooseStar(starNumber: number): void {
        let length = this.m_objStarState.chooseStar.length;
        for (let i = 0; i < length; i++) {
            this.m_objStarState.chooseStar[i] = false;
        }
        for (let i = 0; i < length; i++) {
            if (starNumber > i) this.m_objStarState.chooseStar[i] = true;
        }
        this.m_objComment.Score = starNumber;
        switch (starNumber) {
            case 1:
                this.m_objStarState.title = '非常差';
                break;
            case 2:
                this.m_objStarState.title = '差';
                break;
            case 3:
                this.m_objStarState.title = '一般';
                break;
            case 4:
                this.m_objStarState.title = '满意';
                break;
            case 5:
                this.m_objStarState.title = '超赞';
                break;
        }
    }
    //删除照片
    delImg(): void {
		this.m_sImgUrl = "";
		//清空file的值就不會同一張圖片刪除了就不能再上傳這張圖片了
		//document.querySelector("#showImg").remove();
		//let file = document.createElement(`<input type="file" accept="image/png, image/jpeg, image/gif, image/jpg" (change)="showImg()" id="showImg" name="img">`)
		//document.querySelector("#form").appendChild(file);
    }
    //加载图片
    showImg() {
        // var file = this.m_objElementRef.nativeElement.querySelector('#showImg').files[0];//获取input file控件选择的文件
        //var file = (<any>document.querySelector('#showImg')).files[0];//获取input file控件选择的文件
        const files: any = document.querySelector('#showImg');//获取input file控件选择的文件
        let file = files.files[0];
        this.ImgToBase64(file, 300, (base64) => {
            this.m_sImgUrl = base64;//预览页面上预留一个img元素，载入base64
            //$("#img1")[0].width = 300;//设定宽高，不然会自动按照压缩过的图片宽高设定，有可能超出预想的范围。
            //直接利用ajax上传base64到服务器，完毕
        });
    }
    //图片压缩并转换成base64并显示出来，但此处的base只做显示用途，上传还是通过form表单上传
    ImgToBase64(file, maxLen, callBack) {
        var img = new Image();
        var reader = new FileReader();//读取客户端上的文件
        reader.onload = function () {
            var url = reader.result;//读取到的文件内容.这个属性只在读取操作完成之后才有效,并且数据的格式取决于读取操作是由哪个方法发起的.所以必须使用reader.onload，
            img.src = url;//reader读取的文件内容是base64,利用这个url就能实现上传前预览图片
        };
        img.onload = function () {
            //生成比例
            var width = img.width, height = img.height;
            //计算缩放比例
            var rate = 1;
            if (width >= height) {
                if (width > maxLen) {
                    rate = maxLen / width;
                }
            } else {
                if (height > maxLen) {
                    rate = maxLen / height;
                }
            };
            img.width = width * rate;
			img.height = height * rate;
			//console.log("width==" + img.width + "+++Height==" + img.height);
            //生成canvas
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
			var base64 = canvas.toDataURL('image/jpeg', 0.9);
            callBack(base64);
        };
        reader.readAsDataURL(file);
    }


}
