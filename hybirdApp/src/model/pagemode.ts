export class PageModel {
  nPageNo: number = 1;//当前所在页码（页）
  PageCount: number = 0;//总页码（页）
  nPageSize: number = 25;//当页页容量（条）
  RowCount: number = 0;//总页容量（条）
  PageIndex: number = 1;
  IsNext: boolean = false;
  IsPrev: boolean = false;
}
