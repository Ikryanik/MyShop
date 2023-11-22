import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductRoutingModule } from './product-routuing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ProductRoutingModule,
    NgFor],
  declarations: [ProductListComponent, ProductDetailsComponent],
  bootstrap: [ProductListComponent]
})
export class ProductModule { }
