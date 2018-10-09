import { CountrySomeInfo } from "./countrysomeinfo";

export class Theme extends CountrySomeInfo {
    public MapViewEngine: string;  //地图引擎
    public UserViewStyle: string;  //用户界面主题
    public MgemntType: number;
    public PayMethodTypeList: string; //付款方式列表
    public CountrySomeInfo: CountrySomeInfo; //国家信息
}
