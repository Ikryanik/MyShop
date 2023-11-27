import { Component } from '@angular/core';
import { IProduct } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductService]
})
export class ProductListComponent {
  readonly products$: Observable<IProduct[]> = this.httpService.getProductList$();

  constructor(private httpService: ProductService) { }
}
