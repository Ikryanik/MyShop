import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListRoutingModule } from './products-list-routuing.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, ProductsListRoutingModule],
  declarations: [ProductsListComponent],
  bootstrap: [ProductsListComponent]
})
export class ProductsModule { }
