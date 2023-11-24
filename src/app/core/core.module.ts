import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartService } from './services/cart.service';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [CartService]
})
export class CoreModule { }
