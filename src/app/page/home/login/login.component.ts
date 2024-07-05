import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDialog() {
    this.display = true;
  }

}
