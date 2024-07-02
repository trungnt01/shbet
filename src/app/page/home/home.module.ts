import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {ImageModule} from "primeng/image";

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CarouselModule,
    RouterModule.forChild(routes),
    ImageModule
  ]
})
export class HomeModule { }
