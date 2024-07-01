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
