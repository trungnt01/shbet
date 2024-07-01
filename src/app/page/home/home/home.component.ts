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

  constructor(
    public homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.listMenu = this.homeService.getMenuStatic();

  }

}
