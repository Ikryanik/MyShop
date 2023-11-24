import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { IProduct } from '../../../core/models/product.model';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  products: IProduct[] = this.cartService.products;
  totalSum: number = 0;

  constructor(
    private cartService: CartService,
    private location: Location) { }

  ngOnInit(): void {
    this.subscription = this.cartService.ProductsState.subscribe(state => {
      this.totalSum = state.sum;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

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
