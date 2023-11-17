import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
 
@NgModule({
    imports: [BrowserModule, FormsModule, CommonModule,  CoreModule, ProductsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }