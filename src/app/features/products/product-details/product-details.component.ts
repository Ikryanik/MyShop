import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { IProduct } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  providers: [ProductService, CartService]
})
export class ProductDetailsComponent {
  product$: Observable<IProduct> = this.route.params.pipe(
    switchMap(params => {
      const id = params['id'];
      return this.httpService.getProductById(id);
    })
  );

  constructor(
    private httpService: ProductService,
    private location: Location,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  goBack(): void {
    this.location.back();
  }

  addProductToCart(product: IProduct): void {
    this.cartService.addToCart(product);
  }
}
