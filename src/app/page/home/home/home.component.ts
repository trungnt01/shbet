import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  srcVideoHeader: any = "https://attapp.me/shbet/header-euro-2024_v2-sh.mp4";
  listMenu: any;
  carousels: any;
  responsiveOptions: any;

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

  }

  ngOnInit(): void {
    this.listMenu = this.homeService.getMenuStatic();
    this.carousels = [
      'assets/images/carousel/slide1.jpg',
      'assets/images/carousel/slide2.jpg',
      'assets/images/carousel/slide3.jpg',
      'assets/images/carousel/slide4.jpg',
      'assets/images/carousel/slide5.jpg',
      'assets/images/carousel/slide6.jpg',
      'assets/images/carousel/slide7.jpg',
    ]
  }

}
