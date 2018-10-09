import { Injectable } from '@angular/core';
import { getLocalData, setLocalData } from '../util/util'
import { ApiurlService } from './apiurl.service';
import { Theme } from '../frontofficedataclass/theme';

@Injectable()
export class ThemeService{
    public m_objTheme: Theme = new Theme();
    constructor(
        private m_objApiUrlService: ApiurlService,
    ) {
        this.getTheme();
        setInterval(() => {
            this.getTheme();
        },500)
    }
    private m_lsColorThemeItem: string[] = [
        "secondary",
        "primary",
        "danger"
    ];
    private m_lsImgUrlItem: string[] = [
        "theme1",
        "theme2",
        "theme3"
    ];
    private imformationSrc: string[] = [
        "18plus",
		"Indonesia",
    ]
    //主题颜色
    colorTheme() {
        return this.m_lsColorThemeItem[Number(this.m_objTheme.UserViewStyle)];
    }
    //图片文件夹路径
    imgTheme() {
        return this.m_lsImgUrlItem[Number(this.m_objTheme.UserViewStyle)];
    }
	//获取主题
    getTheme(): void {
        if (getLocalData("pq_ThemePlan") == undefined || getLocalData("pq_ThemePlan") == "") {
            this.m_objApiUrlService.getTheme().subscribe(data => {
                this.m_objTheme = data;
                setLocalData("pq_ThemePlan", data);
            })
        } else {
            this.m_objTheme = getLocalData("pq_ThemePlan");
        }
    }
}
