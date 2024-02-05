import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

const declarations = [NavbarComponent,
  FooterComponent,
  NewsletterComponent]

@NgModule({
  declarations: [
    [...declarations]
  ],
  imports: [
    CommonModule
  ],
  exports: [
    [...declarations]
  ]
})
export class SharedModule { }
