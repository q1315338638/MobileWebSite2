 export enum EBookState
    {
        /// <summary>
        /// 禁止
        /// </summary>
        Forbidden = 0,
        /// <summary>
        /// 预登记
        /// </summary>
        Register = 1,
        /// <summary>
        /// 空闲
        /// </summary>
        Free = 2,
        /// <summary>
        /// 借阅
        /// </summary>
        Out = 3,
        /// <summary>
        /// 冻结
        /// </summary>
        Frozen = 4,
        /// <summary>
        /// 解冻
        /// </summary>
        Thaw = 5
    }

    export enum EInvalidState
    {
        /// <summary>
        /// 报废
        /// </summary>
        Scrap = 1,
        /// <summary>
        /// 换书
        /// </summary>
        ChangeBook = 2,
        /// <summary>
        /// 捐赠
        /// </summary>
        Donation = 3,
        /// <summary>
        /// 卖出
        /// </summary>
        SellOut = 4,
        /// <summary>
        /// 丢失
        /// </summary>
        Lost = 5
    }

    //public class UpdateBooks
    //{
    //    public int BookID { get; set; }
    //    public string BookName { get; set; }
    //    public int Type { get; set; }
    //    public string BarCode { get; set; }

    //    public int Flag { get; set; }
    //}


    //public class AddBooks : UpdateBooks
    //{
    //    public DateTime Create { get; set; }
    //}


    export class TypeList
    {
        public  TypeName:string;
        public  hainName:string;
        public  Stock :number;//库存
        public  Borrow :number;//借出
        public  Return :number;//归还
    }

    export class Books
    {
        public  m_bookid:number;
        public  m_bookname:string;
        public  m_author:string;
        public  m_type:number;
        public  m_booknumber:string;
        public  m_barcode:string;
        public  m_createtime:Date;
        public  m_flag:number;
        public  m_chainid:number;
        public  m_lendcount:number;
        public  m_invalidState:number;
        public  m_modifytime:Date;
        }