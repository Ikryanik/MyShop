import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  productsCount: number = 0;
  private subscription!: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.ProductsState.subscribe(state => {
      this.productsCount = state.count;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
