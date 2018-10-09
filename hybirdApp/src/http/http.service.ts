/**
 * @license PMS v1.0
 * (c) 2018 浦雀, Inc. http://www.puque-tech.com/#/
 * The author: xueguanghan
 * create time:18-05-10
 * last modify 18-05-26
 * modify name:xue. http服务 包装一层是为了方便以后在请求入口作一些全局性的处理
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContextService } from '../service/context.service';
import { Observable } from "rxjs";
import { of } from 'rxjs/observable/of';
import * as $ from 'jquery';
@Injectable()
export class HttpService {
    constructor(public m_objHttpService: HttpClient) {
    }
    get<T>(sUrl: string, bCache?: boolean): Observable<T> {
        if (sUrl == null || sUrl == undefined) throw 'get请求错误 url参数不能为空';
        if (localStorage["[cache]" + sUrl] != null && bCache) {
            // console.log(localStorage["[cache]" + sUrl]);
            return of(JSON.parse(localStorage["[cache]" + sUrl]));
        }
        var rs = this.m_objHttpService.get<T>(sUrl, { withCredentials: true });
        //console.log("[是否缓存]" + (bCache ? "是" : "否") + sUrl);
        if (bCache) {
            rs.subscribe(u => {
                console.log(u);
                localStorage["[cache]" + sUrl] = JSON.stringify(u);
            }
            );
        }
        return rs;
    }

    post<T>(sUrl: string): Observable<T> {
        console.log(sUrl);
        if (sUrl == null || sUrl == undefined) throw 'post请求错误 url参数不能为空';
        var rs = this.m_objHttpService.post<T>(sUrl, undefined, { withCredentials: true });
        return rs;
    }
    //同步的http请求
    getNoAsync<T>(sUrl: string, bCache?: boolean): T {
        if (localStorage["[cache]" + sUrl] != null && bCache) {
            // console.log(localStorage["[cache]" + sUrl]);
            return JSON.parse(localStorage["[cache]" + sUrl]);
        }
        var objT = null;
        $.ajax({
            xhrFields: { withCredentials: true },
            async: false,
            dataType: 'JSON',
            type: 'get',
            url: sUrl,
            success: function (objData) {
                objT = objData;
                if (bCache)
                    localStorage["[cache]" + sUrl] = JSON.stringify(objT);
            }, error: function (error) {
                throw error;
            }
        });
        return objT;
    }

    postByJq(sUrl: string, objData: any, objCallbackFn?: Function): void {
        $.ajax({
            xhrFields: { withCredentials: true },
            async: false,
            dataType: 'JSON',
            type: 'post',
            data: objData,
            url: sUrl,
            success: function (objData) {
                if (objCallbackFn)
                    objCallbackFn(objData);
            }, error: function (error) {
                throw error;
            }
        });
    }


    //清空http缓存
    cleanCache(contextService: ContextService) {
        for (var i = 0; i < 10000; i++) {
            var key = localStorage.key(i);

            if (key == null) {
                return;
            }
            if (key.substr(0, 7) == "[cache]")
                localStorage.removeItem(key);
        }
    }
}
