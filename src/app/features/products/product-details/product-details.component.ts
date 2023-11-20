import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  providers: [ProductService]
})
export class ProductDetailsComponent implements OnDestroy {
  product: IProduct | undefined;
  isHidden: boolean = true;
  subscription?: Subscription;

  constructor(
    private httpService: ProductService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.subscription = this.httpService.getProductById(id).subscribe(x => {
      if (x) {
        this.isHidden = false;
        this.product = x;
      }
      else {
        this.isHidden = true;
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
