import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { CartService } from './core/services/cart.service';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule, CoreModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
