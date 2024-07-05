import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {ImageModule} from "primeng/image";
import {DialogModule} from 'primeng/dialog';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CarouselModule,
    ImageModule,
    DialogModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
