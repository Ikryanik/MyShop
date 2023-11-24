import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-position',
  templateUrl: './cart-position.component.html',
  styleUrl: './cart-position.component.css'
})
export class CartPositionComponent {
  @Input() product!: IProduct;
  @Input() index: number = 0;
  @Output() deleteItemEvent = new EventEmitter<number>();

  constructor(private cartService: CartService) { }

  deleteProduct(): void {
    this.deleteItemEvent.emit(this.index);
  }
}
