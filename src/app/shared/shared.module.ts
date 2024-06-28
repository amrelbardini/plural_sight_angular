import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,RouterLinkActive

  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
