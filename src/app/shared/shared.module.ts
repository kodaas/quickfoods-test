import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { SharedRoutingModule } from './shared-routing.module'



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    SearchComponent,
    NavMenuComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    SearchComponent,
    LogoComponent,
  ]
})
export class SharedModule { }
