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
        srcImage: '/assets/images/outstanding/outstanding1.png'
      },
      {
        title: 'Đa Dạng Sản Phẩm',
        description: 'Thương hiệu uy tín được nhiều người chơi lựa chọn.',
        srcImage: '/assets/images/outstanding/outstanding2.png'
      },
      {
        title: 'An Ninh Bảo Mật',
        description: 'Casino Trực Tuyến, Thể Thao, Nổ Hũ, Bắn Cá, Đá Gà... Nhiều sản phẩm đa dạng bạn có thể lựa chọn.',
        srcImage: '/assets/images/outstanding/outstanding3.png'
      },
      {
        title: 'Giao Dịch Nhanh Chóng',
        description: 'Giao dịch gửi tiền được xử lý trong vòng 1-3 phút khi nhận được khoản chuyển. Thời gian rút tiền trong vòng 5-15 phút.',
        srcImage: '/assets/images/outstanding/outstanding4.png'
      }
    ]
    return outstandings;
  }

  getProducts(){
    const products = [
      {
        title: 'THỂ THAO',
        srcImage: '/assets/images/product/product1.png',
        childrens: [
          "SABA Thể Thao", "CMD Thể Thao", "UG Thể Thao", "SBO Thể Thao", "CR Thể Thao", "IM Thể Thao"
        ]
      },
      {
        title: 'CASINO',
        srcImage: '/assets/images/product/product2.png',
        childrens: [
          "DG Trực Tuyến", "SE Trực Tuyến", "EVO Trực Tuyến", "WM Trực Tuyến", "MT Trực Tuyến", "AG Trực Tuyến", "SA Trực Tuyến"
        ]
      },
      {
        title: 'NỔ HŨ',
        srcImage: '/assets/images/product/product3.png',
        childrens: [
          'PG Điện Tử', 'JILI Điện Tử', 'TP Điện Tử', 'FC Điện Tử', 'PP Điện Tử', 'MG Điện Tử', 'CQ9 Điện Tử'
        ]
      },
      {
        title: 'BẮN CÁ',
        srcImage: '/assets/images/product/product4.png',
        childrens: [
          'JILI bắn cá', 'TP bắn cá', 'JDB bắn cá', 'BG bắn cá', 'KA bắn cá', 'FTG bắn cá', 'R88 bắn cá'
        ]
      },
      {
        title: 'GAME BÀI',
        srcImage: '/assets/images/product/product5.png',
        childrens: [
          'KM Game Bài 3d', 'R88 Game Bài 3d', 'V8 Game Bài 3d', 'JILI Game Bài 3d', 'TP Game Bài 3d' , 'MG Game Bài 3d', 'FTG Game Bài 3d'
        ]
      },
      {
        title: 'XỔ SỐ',
        srcImage: '/assets/images/product/product6.png',
        childrens: [
          'TP Xổ Số', 'VR Xổ Số', 'GW Xổ Số', 'SW Xổ Số'
        ]
      },
      {
        title: 'ĐÁ GÀ',
        srcImage: '/assets/images/product/product7.png',
        childrens: [
          'Ws168 Đá Gà'
        ]
      },
    ]
    return products;
  }

  getCarousel(){
    const carousels = [
      'assets/images/carousel/slide1.jpg',
      'assets/images/carousel/slide2.jpg',
      'assets/images/carousel/slide3.jpg',
      'assets/images/carousel/slide4.jpg',
      'assets/images/carousel/slide5.jpg',
      'assets/images/carousel/slide6.jpg',
      'assets/images/carousel/slide7.jpg',
    ]
    return carousels;
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
