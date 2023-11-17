import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { HttpService } from '../../http.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
  providers: [HttpService]
})
export class ProductsListComponent {
  products: Product[] | undefined;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe(
      response => {
          this.products = response;
      }
    );
  }
}
