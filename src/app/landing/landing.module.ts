import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
