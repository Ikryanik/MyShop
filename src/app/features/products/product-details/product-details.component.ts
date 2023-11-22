import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { IProduct } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  providers: [ProductService]
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
  ) { }

  goBack(): void {
    this.location.back();
  }
}
