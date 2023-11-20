import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
  providers: [ProductService]
})
export class ProductsListComponent implements OnInit {
  products: Observable<IProduct[]> | undefined;

  constructor(private httpService: ProductService) { }
  
  ngOnInit(): void {
    this.products = this.httpService.getProductList();
    this.httpService.getProductById(2);
  }
}
