import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [FooterComponent, HeaderComponent, LayoutComponent, NavbarComponent],
  exports: [HeaderComponent, FooterComponent, LayoutComponent, NavbarComponent]
})
export class CoreModule { }
