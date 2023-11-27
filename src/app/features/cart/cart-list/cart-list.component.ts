import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { IProduct } from '../../../core/models/product.model';
import { Observable, Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {
  products$: Observable<IProduct[]> = this.cartService.getProducts();
  totalSum$: Observable<number> = this.cartService.getTotalSum();

  constructor(
    private cartService: CartService,
    private location: Location) { }

  clearCart(): void {
    this.cartService.clearCart();
  }

  deleteProduct(index: number): void {
    this.cartService.removeFromCart(index);
  }

  goBack(): void {
    this.location.back();
  }
}
