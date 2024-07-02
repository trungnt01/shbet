import {Injectable} from "@angular/core";
// import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: "root"
})

export class HomeService{

  constructor(
    // public httpClient: HttpClient
  ) {

  }

  getOutstandings(){
    const outstandings = [
      {
        title: 'Thương Hiệu Uy Tín',
        description: 'Thương hiệu uy tín được nhiều người chơi lựa chọn.',
        srcImage: 'assets/images/outstanding/outstanding1.jpg'
      },
      {
        title: 'Đa Dạng Sản Phẩm',
        description: 'Thương hiệu uy tín được nhiều người chơi lựa chọn.',
        srcImage: 'assets/images/outstanding/outstanding2.jpg'
      },
      {
        title: 'An Ninh Bảo Mật',
        description: 'Casino Trực Tuyến, Thể Thao, Nổ Hũ, Bắn Cá, Đá Gà... Nhiều sản phẩm đa dạng bạn có thể lựa chọn.',
        srcImage: 'assets/images/outstanding/outstanding3.jpg'
      },
      {
        title: 'Giao Dịch Nhanh Chóng',
        description: 'Giao dịch gửi tiền được xử lý trong vòng 1-3 phút khi nhận được khoản chuyển. Thời gian rút tiền trong vòng 5-15 phút.',
        srcImage: 'assets/images/outstanding/outstanding4.jpg'
      }
    ]
    return outstandings;
  }

  getMenuStatic(){
    const listMenu = [
      {
        name: 'TRANG CHỦ',
        children: []
      },
      {
        name: 'CASINO',
        children: [
          {
            name: "DG Trực Tuyến",
            url: ""
          },
          {
            name: "SE Trực Tuyến",
            url: ""
          },
          {
            name: "EVO Trực Tuyến",
            url: ""
          },
          {
            name: "WM Trực Tuyến",
            url: ""
          },
          {
            name: "MT Trực Tuyến",
            url: ""
          },
          {
            name: "AG Trực Tuyến",
            url: ""
          },
          {
            name: "SA Trực Tuyến",
            url: ""
          },
          {
            name: "PT Trực Tuyến",
            url: ""
          },
          {
            name: "BG Trực Tuyến",
            url: ""
          },
          {
            name: "TP Trực Tuyến",
            url: ""
          },
          {
            name: "MG Trực Tuyến",
            url: ""
          },
          {
            name: "DB Trực Tuyến",
            url: ""
          },
          {
            name: "ON Trực Tuyến",
            url: ""
          },
        ]
      },
      {
        name: 'NỔ HŨ',
        children :[
          {
            name: "PG Điện Tử",
            url: ""
          },
          {
            name: "JILI Điện Tử",
            url: ""
          },
          {
            name: "TP Điện Tử",
            url: ""
          },
          {
            name: "FC Điện Tử",
            url: ""
          },
          {
            name: "PP Điện Tử",
            url: ""
          },
          {
            name: "MG Điện Tử",
            url: ""
          },
          {
            name: "CQ9 Điện Tử",
            url: ""
          },
          {
            name: "JDB Điện Tử",
            url: ""
          },
          {
            name: "BNG Điện Tử",
            url: ""
          },
          {
            name: "VA Điện Tử",
            url: ""
          },
          {
            name: "KA Điện Tử",
            url: ""
          },
          {
            name: "PS Điện Tử",
            url: ""
          },
        ]
      },
      {
        name: 'BẮN CÁ',
        children :[]
      },
      {
        name: 'THỂ THAO',
        children :[]
      },
      {
        name: 'GAME BÀI',
        children :[]
      },
      {
        name: 'ĐÁ GÀ',
        children :[]
      },
      {
        name: 'XỔ SỐ',
        children :[]
      },
      {
        name: 'GAME BÀI',
        children :[]
      },
      {
        name: 'KHUYẾN MÃI',
        children :[]
      },
      {
        name: 'VIP CLUB',
        children :[]
      },
      {
        name: 'ĐẠI LÝ',
        children :[]
      },
      {
        name: 'ĐẠI SỨ',
        children :[]
      }
    ]
    return listMenu;
  }

}
