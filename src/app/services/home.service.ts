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

  getCarouselsBrand(){
    const carouselsBrand = [
      '/assets/images/brandAmbassador/brandAmbassador2.png',
      '/assets/images/brandAmbassador/brandAmbassador3.png',
      '/assets/images/brandAmbassador/brandAmbassador4.png',
      '/assets/images/brandAmbassador/brandAmbassador5.png',
      '/assets/images/brandAmbassador/brandAmbassador6.png',
      '/assets/images/brandAmbassador/brandAmbassador7.png',
    ]
    return carouselsBrand;
  }

  getPaymentMethod(){
    const paymentMethods = [
      '/assets/images/paymentMethod/paymentMethod1.png',
      '/assets/images/paymentMethod/paymentMethod2.png',
      '/assets/images/paymentMethod/paymentMethod3.png',
      '/assets/images/paymentMethod/paymentMethod4.png',
      '/assets/images/paymentMethod/paymentMethod5.png',
      '/assets/images/paymentMethod/paymentMethod6.png',
      '/assets/images/paymentMethod/paymentMethod7.png',
      '/assets/images/paymentMethod/paymentMethod8.png',
    ]
    return paymentMethods;
  }

  getSocial(){
    const socials = [
      '/assets/images/footer/socialPlasform/facebook.png',
      '/assets/images/footer/socialPlasform/youtube.png',
      '/assets/images/footer/socialPlasform/telegram.png',
    ]
    return socials;
  }

  getGameFavorite(){
    const gameFavorites = [
      {
        title: 'HOT GAME',
        childrens: [
          {
            title: 'DG Bacarat',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame1.png',
          },
          {
            title: 'Sexy Bacarat',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame2.png',
          },
          {
            title: 'WM Xóc Đĩa',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame1.png',
          },
          {
            title: 'Evolution Tài Xỉu',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame1.png',
          },
          {
            title: 'Saba Thể Thao',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame1.png',
          },
          {
            title: 'GW Xổ Số',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame1.png',
          },
          {
            title: 'TP Bắn cá Dễ Dàng',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame1.png',
          },
          {
            title: 'TP Nhị Gia bắn cá',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame1.png',
          },
          {
            title: 'FC bắn cá Vũ Trụ',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame1.png',
          },
          {
            title: 'Bài Cào',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame1.png',
          },
          {
            title: 'Tiến Lên',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame1.png',
          },{
            title: 'Lửa Vàng Bùng Nổ 7',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame1.png',
          },
        ]
      },
      {
        title: 'PG Điện Tử',
        childrens: [
          {
            title: 'DG Bacarat',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame1.png',
          },
          {
            title: 'Sexy Bacarat',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame2.png',
          },

        ]
      },
      {
        title: 'JILI Điện Tử',
        childrens: [
          {
            title: 'HOT GAME',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame2.png',
          }

        ]
      },
      {
        title: 'TP Điện Tử',
        childrens: [
          {
            title: 'HOT GAME',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame2.png',
          }

        ]
      },
      {
        title: 'JILI BẮN CÁ',
        childrens: [
          {
            title: 'HOT GAME',
            srcImage: '/assets/images/favoriteGames/hotGame/favoriteGame2.png',
          }

        ]
      },
    ]
    return gameFavorites;
  }

  getInstruction(){
    const instruction = [
      '/assets/images/instruction/instruction1.png',
      '/assets/images/instruction/instruction2.png',
      '/assets/images/instruction/instruction3.png',
      '/assets/images/instruction/instruction4.png',
      '/assets/images/instruction/instruction5.jpg',
    ]
    return instruction;
  }


  getMenuStatic(){
    const listMenu = [
      {
        name: 'TRANG CHỦ',
        icon: 'assets/images/logos/header/home.png',
        children: []
      },
      {
        name: 'CASINO',
        icon: 'assets/images/logos/header/casino.png',
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
        icon: 'assets/images/logos/header/noHu.png',
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
        icon: 'assets/images/logos/header/banCa.png',
        children :[]
      },
      {
        name: 'THỂ THAO',
        icon: 'assets/images/logos/header/theThao.png',
        children :[]
      },
      {
        name: 'GAME BÀI',
        icon: 'assets/images/logos/header/gameBai.png',
        children :[]
      },
      {
        name: 'ĐÁ GÀ',
        icon: 'assets/images/logos/header/daGa.png',
        children :[]
      },
      {
        name: 'XỔ SỐ',
        icon: 'assets/images/logos/header/xoSo.png',
        children :[]
      },
      {
        name: 'KHUYẾN MÃI',
        icon: 'assets/images/logos/header/khuyenMai.png',
        children :[]
      },
      {
        name: 'VIP CLUB',
        icon: 'assets/images/logos/header/vipClub.png',
        children :[]
      },
      {
        name: 'ĐẠI LÝ',
        icon: 'assets/images/logos/header/daiLy.png',
        children :[]
      },
      {
        name: 'ĐẠI SỨ',
        icon: 'assets/images/logos/header/daiSu.png',
        children :[]
      }
    ]
    return listMenu;
  }

}
