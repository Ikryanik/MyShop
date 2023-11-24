import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartPositionComponent } from './cart-position/cart-position.component';
import { CartRoutingModule } from './cart-routuing.module';
import { CartService } from '../../core/services/cart.service';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, CartRoutingModule
  ],
  declarations: [CartListComponent, CartPositionComponent],
  bootstrap: [CartListComponent],
  providers: [CartService]
})
export class CartModule { }
