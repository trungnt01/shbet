import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HomeService} from "../../../services/home.service";
import {last} from "rxjs";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(LoginComponent) login!: LoginComponent;
  @ViewChild('marquee')
  marquee!: ElementRef;

  srcVideoHeader: any = "https://attapp.me/shbet/header-euro-2024_v2-sh.mp4";
  listMenu: any;
  carousels: any;
  responsiveOptions: any;
  outstandings: any;
  products: any;
  gameFavorites: any;
  activeProduct: any = 0;
  games: any;
  instructions: any;
  gameFavoriteActive: number = 0;
  isCollapsed: boolean = false;
  srcIframe: any;
  carouselsBrand: any;
  paymentMethods: any;
  socials: any;

  display: boolean = false;

  items: string[] = [
    '✅Hãy trải nghiệm sự khác biệt tại SHBET, nơi cung cấp dịch vụ nạp rút tiền nhanh chóng và ổn định nhất thị trường...  ',
    '☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️☘️  ',
    'Truy cập vào SHBET không lo bị chặn:  ',
    'Bước 1: Tải 1.1.1.1: Faster Internet tại App Store hoặc 1.1.1.1 + WARP: Safer Internet tại CH Play.  ',
    'Bước 2: Tải ứng dụng về điện thoại được xếp hạng đầu tiên.  ',
    'Bước 3: Cài đặt và khởi động ứng dụng.  ',
    'Bước 4: Bật công tắc để kết nối thành công. Vào lại website SHBET.  '
  ];

  fullText = " là một nhà cái có giấy phép cá cược trực tuyến hợp pháp do Isle of Man và Khu kinh tế Cagayan and Freeport cấp. Với bề dày kinh nghiệm và danh tiếng phục vụ hơn 10 triệu người chơi, SHBET đã và đang khẳng định vị thế của mình trên thị trường game trực tuyến. Với tư cách là một công ty trò chơi trực tuyến trực thuộc Tổng bộ Liên minh OKVIP có trụ sở tại Luân Đôn, Anh, sở hữu đội ngũ nhân tài chuyên nghiệp đông đảo cung cấp sản phẩm phục vụ chất lượng cao. SHBET đảm bảo không tiết lộ thông tin cá nhân khách hàng cho bất kỳ bên thứ ba nào, sử dụng tiêu chuẩn mã hoá dữ liệu ở mức cao nhất. Tất cả thông tin cá nhân đều được thông qua hệ thống bảo mật - Secure Socket (Chuẩn mã hóa SS 128-bit), đồng thời được bảo vệ trong môi trường quản lý an toàn đảm bảo không thể truy cập từ các khu vực mạng công cộng. Tất cả dữ liệu ra vào đều bị hạn chế, giám sát nghiêm ngặt và quản lý chặt chẽ nhằm mang đến cho người chơi trải nghiệm người dùng an toàn tuyệt đối."

  constructor(
    public homeService: HomeService
  ) {

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.srcIframe = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAndresIniesta%2Fvideos%2F688592966738711%2F%3Fref%3Dembed_video&show_text=0&width=560";
  }

  ngOnInit(): void {
    this.listMenu = this.homeService.getMenuStatic();
    this.outstandings = this.homeService.getOutstandings();
    this.products = this.homeService.getProducts();
    this.carousels = this.homeService.getCarousel();
    this.gameFavorites = this.homeService.getGameFavorite();
    this.getGameFavorite(0);
    this.instructions = this.homeService.getInstruction();
    this.carouselsBrand = this.homeService.getCarouselsBrand();
    this.paymentMethods = this.homeService.getPaymentMethod();
    this.socials = this.homeService.getSocial();
  }

  onMouseEnterProduct(){
    this.activeProduct = !this.activeProduct;
  }

  onMouseLeaveProduct(){
    this.activeProduct = !this.activeProduct;
  }

  getGameFavorite(index: number) {
    this.gameFavoriteActive = index;
    this.games = this.gameFavorites[this.gameFavoriteActive].childrens;
  }

  toggleText() {
    this.isCollapsed = !this.isCollapsed;
  }

  go(item: string): void {
    console.log(item);
  }

  stopMarquee(): void {
    this.marquee.nativeElement.classList.add('paused');
  }

  startMarquee(): void {
    this.marquee.nativeElement.classList.remove('paused');
  }

  showDialog() {
    this.display = true;
  }
}
