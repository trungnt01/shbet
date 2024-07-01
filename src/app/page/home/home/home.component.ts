import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  srcVideoHeader: any = "https://attapp.me/shbet/header-euro-2024_v2-sh.mp4";

  constructor() { }

  ngOnInit(): void {
  }

}
